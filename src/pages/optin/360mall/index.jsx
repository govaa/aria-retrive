import ReactPhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PageBanner from "@/components/Common/PageBanner";
import getUnixTime from "date-fns/getUnixTime";

import Head from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import toast from "react-hot-toast";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Mall360OptIn = () => {
  const router = useRouter();
  const { clientmac } = router.query;
  const sendAuthorization = async () => {
    window.location.href =
      router.query.authaction + "?msisdn=" + encodeURIComponent(value);
  };

  const [whatsapp, setWhatsapp] = useState(false);

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  function all_off() {
    setWhatsapp(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (!value || !isPossiblePhoneNumber(value) || !isValidPhoneNumber(value)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    const clientmac = router.query.clientmac;
    const submit_obj = {
      mac: clientmac || "not given",
      mobile: value,
      timestamp: getUnixTime(new Date()),
      project: "ikea_360",
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
            // router.replace()
            router.replace(
              router.query.authaction + "?msisdn=" + encodeURIComponent(value)
            );
            // window.location.href =
            //   router.query.authaction + "?msisdn=" + encodeURIComponent(value);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (agree) => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Welcome to 360 Mall Wifi | Ariadne</title>
        <meta name="description" content="Ariadne" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NextSeo canonical="https://www.ariadne.inc/optin/360mall" />

      <PageBanner pageTitle="Welcome to 360 Mall!" />

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
              By using the service, these terms will automatically apply to you
              - you should make sure therefore that you read them carefully
              before using the service. You are not allowed to copy, or modify
              the service, any part of the service, or our trademarks in any
              way. You're not allowed to attempt to extract the source code of
              the service, and you also should not try to translate the service
              into other languages, or make derivative versions. The service
              itself, and all the trade marks, copyright, database rights and
              other intellectual property rights related to it, still belong to
              Ariadne GmbH.
            </p>
            <br />
            <p>
              Ariadne GmbH is committed to ensuring that the service is as
              useful and efficient as possible. For that reason, we reserve the
              right to make changes to the service or to charge for its
              services, at any time and for any reason. We will never charge you
              for the service or its services without making it very clear to
              you exactly what you're paying for.
            </p>
            <br />
            <p>
              The Connected Experience app/service stores and processes personal
              data that you have provided to us, in order to provide our
              Service. It's your responsibility to keep your phone and access to
              the app/service secure. We therefore recommend that you do not
              jailbreak or root your phone, which is the process of removing
              software restrictions and limitations imposed by the official
              operating system of your device. It could make your phone
              vulnerable to malware/viruses/malicious programs, compromise your
              phone's security features and it could mean that the Connected
              Experience app/service won't work properly or at all.
            </p>
            <br />
            <p>
              The service does use third party services that declare their own
              Terms and Conditions.
            </p>
            <br />
            <p>
              Link to Terms and Conditions of third party service providers used
              by the service
            </p>
            <br />
            <h4>Facebook</h4>
            <br />
            <p>
              You should be aware that there are certain things that Ariadne
              GmbH will not take responsibility for. Certain functions of
              the service will require the service to have an active internet
              connection. The connection can be Wi-Fi, or provided by your
              mobile network provider, but Ariadne GmbH cannot take
              responsibility for the service not working at full functionality
              if you don't have access to Wi-Fi, and you don't have any of your
              data allowance left.
            </p>
            <br />
            <p>
              If you're using the service outside of an area with Wi-Fi, you
              should remember that your terms of the agreement with your mobile
              network provider will still apply. As a result, you may be charged
              by your mobile provider for the cost of data for the duration of
              the connection while accessing the service, or other third party
              charges. In using the service, you're accepting responsibility for
              any such charges, including roaming data charges if you use the
              service outside of your home territory (i.e. region or country)
              without turning off data roaming. If you are not the bill payer
              for the device on which you are using the service, please be aware
              that we assume that you have received permission from the bill
              payer for using the service.
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
              the service, when you're using the service, it's important to bear
              in mind that although we endeavour to ensure that it is updated
              and correct at all times, we do rely on third parties to provide
              information to us so that we can make it available to you. Ariadne
              GmbH accepts no liability for any loss, direct or indirect,
              you experience as a result of relying wholly on this functionality
              of the service.
            </p>
            <br />
            <p>
              At some point, we may wish to update the service. The service is
              currently available on – the requirements for system(and for any
              additional systems we decide to extend the availability of the
              service to) may change, and you'll need to download the updates if
              you want to keep using the service. Ariadne GmbH does not
              promise that it will always update the service so that it is
              relevant to you and/or works with the version that you have
              installed on your device. However, you promise to always accept
              updates to the application when offered to you, We may also wish
              to stop providing the service, and may terminate use of it at any
              time without giving notice of termination to you. Unless we tell
              you otherwise, upon any termination, (a) the rights and licenses
              granted to you in these terms will end; (b) you must stop using
              the service, and (if needed) delete it from your device.
            </p>
            <br />
            <h4>Changes to This Terms and Conditions</h4>
            <br />
            <p>
              We may update our Terms and Conditions from time to time. Thus,
              you are advised to review this page periodically for any changes.
              We will notify you of any changes by posting the new Terms and
              Conditions on this page.
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
          <Button
            variant="contained"
            color="error"
            autoFocus
            onClick={handleClose}
          >
            Disagree
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              handleClose();
              window.sessionStorage.setItem("termsAgreed", true);
              setWhatsapp(true);
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {!whatsapp && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center  mb-4">
              <button
                onClick={() => {
                  const agreed = window.sessionStorage.getItem("termsAgreed");
                  if (!agreed === true) {
                    handleClickOpen();
                  } else {
                    setWhatsapp(true);
                  }
                }}
                className="btn btn-success w-50"
              >
                Begin Opt-In
              </button>
            </div>
          </div>
        </div>
      )}
      {whatsapp && (
        <div className="container">
          <div>
            <div className="text-center">
              <h1>Enter your number for verification</h1>
            </div>

            <form onSubmit={handleSubmit} className="row  justify-content-end">
              <div className="col-12">
                <ReactPhoneInput
                  defaultCountry="DE"
                  className="phoneInput"
                  placeholder="Handynummer"
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div className="col-sm-12 col-md col-lg col-xl col-xxl text-center text-md-end  mt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-success btn-sm"
                >
                  Submit
                </button>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center text-md-end   mt-3">
                <button
                  disabled={loading}
                  onClick={() => {
                    all_off();
                  }}
                  className="btn btn-danger btn-sm"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Mall360OptIn;
