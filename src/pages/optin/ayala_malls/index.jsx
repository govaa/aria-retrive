import React, { useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import styles from "styles/Optin.module.css";
import getUnixTime from "date-fns/getUnixTime";

import {
  CardContent,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import toast from "react-hot-toast";
import "react-phone-number-input/style.css";
import ReactPhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import CardActions from "@mui/material/CardActions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { isPossiblePhoneNumber } from "react-phone-number-input";

import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

const OptinLandingPage = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = React.useState(false);
  const [isAgreedToTheTNC, setIsAgreedToTheTNC] = React.useState(false);

  useEffect(() => {
    const stored_agreed = JSON.parse(
      window.sessionStorage.getItem("termsAgreed")
    );
    if (stored_agreed === true) {
      setIsAgreedToTheTNC(true);
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    setIsAgreedToTheTNC(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleOptIn(e) {
    e.preventDefault();

    if (!isAgreedToTheTNC) {
      toast.error("You must agree to the terms before continuing");
      return;
    }
    if (!value || !isPossiblePhoneNumber(value) || !isValidPhoneNumber(value)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    const clientmac = router.query.clientmac;
    const submit_obj = {
      mac: router.query.clientmac || "not given",
      mobile: value,
      timestamp: getUnixTime(new Date()),
      project: "ayala_malls",
    };
    try {
      setLoading(true);

      if (submit_obj) {
        const api_res = await fetch(
          "https://api.ariadne.inc/api/v3/wifi_optin",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "x-access-token":
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InB1bWFfc2cxIiwiZXhwIjoxNzAyMjk0NDA0fQ.pfaopVnNVyKQ5sYm9oOYIDgWwcHF6moUzI9nCSjpN5Y",
            },
            method: "POST",
            body: JSON.stringify({ ...submit_obj }),
          }
        );

        if (api_res.status !== 200) {
          toast.error("Something went wrong");
          return;
        } else {
          if (router.query.authaction) {
            toast.success("Success", { position: "top-center" });

            router.replace(
              router.query.authaction + "?msisdn=" + encodeURIComponent(value)
            );
          } else {
            toast.success("Success", { position: "top-center" });

            setValue("");
          }
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Grid container sx={{ width: "100%", height: "100vh" }}>
        <Grid item xs={12} md={7}>
          <Image
            src="/images/ayalaMall1.png"
            layout="responsive"
            width={"100%"}
            height={"65%"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(244, 245, 250)",
          }}
        >
          <Card className={styles.card} variant="outlined">
            <CardContent>
              <Typography
                style={{ marginTop: "32px" }}
                align="center"
                variant="h6"
                color="textPrimary"
              >
                Sign in to Network with your phone number
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "32px",
                }}
              >
                <Box
                  color="primary"
                  variant="standard"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <ReactPhoneInput
                    style={{ width: "100%", borderRadius: "5px" }}
                    defaultCountry="PH"
                    className="phoneInput"
                    placeholder={
                      isAgreedToTheTNC
                        ? "Phone Number"
                        : "Agree with our T&C to start now"
                    }
                    value={value}
                    onChange={setValue}
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: "20px",
                    width: "100%",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    checked={isAgreedToTheTNC}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                    onChange={() => setIsAgreedToTheTNC(!isAgreedToTheTNC)}
                  />
                  <Box>
                    I have read and agreed to the
                    <span
                      style={{
                        marginLeft: "5px",
                        cursor: "pointer",
                        color: "#c96850",
                        fontWeight: "800",
                      }}
                      onClick={handleClickOpen}
                    >
                      Terms and Conditions
                    </span>
                  </Box>
                </Box>
                <Box sx={{ marginTop: "20px", width: "100%" }}>
                  <Button
                    disabled={loading || !isAgreedToTheTNC}
                    onClick={handleOptIn}
                    sx={{ width: "100%", backgroundColor: "#c96850" }}
                    variant="contained"
                    size="small"
                    type="submit"
                  >
                    Proceed
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Dialog
          fullScreen={fullScreen}
          scroll="paper"
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Terms and Conditions"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>
                This promotion is a partnership between Ayala Malls Zing and our
                service provider Ariadne. Please read and agree to the following
                terms and conditions to avail of the offer.
              </p>
              <p>
                By using the service, these terms will automatically apply to
                you - you should make sure therefore that you read them
                carefully before using the service. You are not allowed to copy,
                or modify the service, any part of the service, or our
                trademarks in any way. You're not allowed to attempt to extract
                the source code of the service, and you also should not try to
                translate the service into other languages, or make derivative
                versions. The service itself, and all the trade marks,
                copyright, database rights and other intellectual property
                rights related to it, still belong to Ariadne GmbH.
              </p>
              <br />
              <p>
                Ariadne GmbH is committed to ensuring that the service is as
                useful and efficient as possible. For that reason, we reserve
                the right to make changes to the service or to charge for its
                services, at any time and for any reason. We will never charge
                you for the service or its services without making it very clear
                to you exactly what you're paying for.
              </p>
              <br />
              <p>
                The Connected Experience app/service stores and processes
                personal data that you have provided to us, in order to provide
                our Service. It's your responsibility to keep your phone and
                access to the app/service secure. We therefore recommend that
                you do not jailbreak or root your phone, which is the process of
                removing software restrictions and limitations imposed by the
                official operating system of your device. It could make your
                phone vulnerable to malware/viruses/malicious programs,
                compromise your phone's security features and it could mean that
                the Connected Experience app/service won't work properly or at
                all.
              </p>
              <br />
              <p>
                The service does use third party services that declare their own
                Terms and Conditions.
              </p>
              <br />
              <p>
                Link to Terms and Conditions of third party service providers
                used by the service
              </p>
              <br />
              <h4>Facebook</h4>
              <br />
              <p>
                You should be aware that there are certain things that Ariadne
                GmbH will not take responsibility for. Certain functions of the
                service will require the service to have an active internet
                connection. The connection can be Wi-Fi, or provided by your
                mobile network provider, but Ariadne GmbH cannot take
                responsibility for the service not working at full functionality
                if you don't have access to Wi-Fi, and you don't have any of
                your data allowance left.
              </p>
              <br />
              <p>
                If you're using the service outside of an area with Wi-Fi, you
                should remember that your terms of the agreement with your
                mobile network provider will still apply. As a result, you may
                be charged by your mobile provider for the cost of data for the
                duration of the connection while accessing the service, or other
                third party charges. In using the service, you're accepting
                responsibility for any such charges, including roaming data
                charges if you use the service outside of your home territory
                (i.e. region or country) without turning off data roaming. If
                you are not the bill payer for the device on which you are using
                the service, please be aware that we assume that you have
                received permission from the bill payer for using the service.
              </p>
              <br />
              <p>
                Along the same lines, Ariadne GmbH cannot always take
                responsibility for the way you use the service i.e. You need to
                make sure that your device stays charged - if it runs out of
                battery and you can't turn it on to avail the Service, Ariadne
                GmbH cannot accept responsibility.
              </p>
              <br />
              <p>
                With respect to Ariadne GmbH's responsibility for your use of
                the service, when you're using the service, it's important to
                bear in mind that although we endeavour to ensure that it is
                updated and correct at all times, we do rely on third parties to
                provide information to us so that we can make it available to
                you. Ariadne GmbH accepts no liability for any loss, direct or
                indirect, you experience as a result of relying wholly on this
                functionality of the service.
              </p>
              <br />
              <p>
                At some point, we may wish to update the service. The service is
                currently available on - the requirements for system(and for any
                additional systems we decide to extend the availability of the
                service to) may change, and you'll need to download the updates
                if you want to keep using the service. Ariadne GmbH does not
                promise that it will always update the service so that it is
                relevant to you and/or works with the version that you have
                installed on your device. However, you promise to always accept
                updates to the application when offered to you, We may also wish
                to stop providing the service, and may terminate use of it at
                any time without giving notice of termination to you. Unless we
                tell you otherwise, upon any termination, (a) the rights and
                licenses granted to you in these terms will end; (b) you must
                stop using the service, and (if needed) delete it from your
                device.
              </p>
              <br />
              <h4>Changes to This Terms and Conditions</h4>
              <br />
              <p>
                We may update our Terms and Conditions from time to time. Thus,
                you are advised to review this page periodically for any
                changes. We will notify you of any changes by posting the new
                Terms and Conditions on this page.
              </p>
              <br />
              <p>These terms and conditions are effective as of 2021-03-25</p>
              <br />
              <h4>Contact Us</h4>
              <br />
              <p>
                If you have any questions or suggestions about our Terms and
                Conditions, do not hesitate to contact us at
                contact@ariadne.inc.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{ background: "#c96850", color: "#fff", fontSize: "14px" }}
        buttonStyle={{
          color: "#c96850",
          background: "#fff",
          fontSize: "14px",
          borderRadius: "5px",
          fontWeight: 800,
        }}
        expires={365}
      >
        We use cookies to make your experience better. Read our{" "}
        <a href="/privacy-policy" style={{ color: "#fff" }}>
          <u>Privacy Policy</u>
        </a>{" "}
        to learn more.
      </CookieConsent>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      useCustomCookieModal: true,
    },
  };
};

export default OptinLandingPage;
