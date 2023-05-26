import ReactPhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PageBanner from "@/components/Common/PageBanner";
// import GoogleAdsense from "@/components/Common/GoogleAdsense";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PhoneInput from "@/components/Common/PhoneInput";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import toast from "react-hot-toast";
import Countdown, { CountdownApi } from "react-countdown";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CaptivaPortalDasEinstein = () => {
  const router = useRouter();
  const { clientmac } = router.query;
  const sendAuthorization = async () => {
    //console.log(router.query.tok)
    // window.location.href=router.query.authaction + "&tok=" + router.query.tok + "&redir=" + router.query.redir;
    //console.log('router.query.authaction ', router.query.authaction)
    //console.log('value ', value)
    //const response = await axios.post(
    //    router.query.authaction,
    //    {'msisdn': value }
    //    )
    //  console.log(response.data)
    window.location.href =
      router.query.authaction + "?msisdn=" + encodeURIComponent(value);
  };

  const [whatsapp, setWhatsapp] = useState(false);
  const [login, setLogin] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [verification, setVerification] = useState(false);
  const [verify_value, setVerifyValue] = useState("");
  const [login_number, setLoginNumber] = useState("");
  const [resendable, setResendable] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  function all_off() {
    setWhatsapp(false);
    setLogin(false);
    setVerification(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    try {
      setLoading(true);

      const url = "/api/whatsapp/getCode";
      const response = await axios.post(url, {
        phone_number: value,
      });
      if (response.status === 200) {
        toast.success("OTP sent");

        // window.location.href = `https://wa.me/${value}`;
        setVerification(true);
        // window.open(`https://wa.me/18313464750`, "_blank");
      } else if (response.status === 203) {
        toast.error("Phone number already registered, please use it to Login ");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function handleResend() {
    try {
      setLoading(true);

      const url = "/api/whatsapp/getCode";
      const response = await axios.post(url, {
        phone_number: value,
      });
      if (response.status === 200) {
        toast.success("OTP sent");
        setResendable(false);
        window.location.href = ` https://wa.me/${value}`;
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function handleVerify(e) {
    e.preventDefault();
    if (!verify_value) return;

    try {
      setLoading(true);

      const url = "/api/whatsapp/verifyCode";
      const response = await axios.post(url, {
        phone_number: value,
        code: verify_value,
        clientmac: clientmac,
      });
      if (response.status === 200) {
        if (router.query.authaction) {
          window.location.href =
            router.query.authaction + "?msisdn=" + encodeURIComponent(value);
        } else {
          toast.success("Success");
          setValue("");
        }
      } else {
        toast.error("Verification failed");
      }
    } catch (error) {
      toast.error("Verification failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (!login_number) return;

    setLoading(true);
    fetch(
      "https://europe-west1-ariadne-analytics-next-auth.cloudfunctions.net/get_verified_tel",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          check_tel: login_number,
        }),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast.success("Verification successful");
          window.location.href =
            router.query.authaction + "?msisdn=" + encodeURIComponent(value);
        }
      })

      .catch((e) => {
        setLoading(false);

        toast.error(e.message);
      });
    console.log(check_if_tel_exists);
    setLoading(false);
    if (check_if_tel_exists.status !== 200) {
      toast.error("Your phone number has not been verified");
      // setLoading(false);
    } else {
      router.replace(
        router.query.authaction + "?msisdn=" + encodeURIComponent(value)
      );
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
        <title>Captive Portal | Ariadne</title>
        <meta name='description' content='Ariadne' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <NextSeo canonical='https://www.ariadne.inc/captiveportaldaseinstein' />

      <PageBanner pageTitle='Free WiFi Captive Portal' />

      <Dialog
        fullScreen={fullScreen}
        scroll='paper'
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
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
            variant='contained'
            color='error'
            autoFocus
            onClick={handleClose}
          >
            Disagree
          </Button>
          <Button
            variant='contained'
            color='success'
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

      {/* <div className='ptb-80 align-content-center'>
        <ReactPhoneInput
          defaultCountry='DE'
          className='phoneInput'
          placeholder='Handynummer'
          value={value}
          onChange={setValue}
        />
        {value && isPossiblePhoneNumber(value) ? "it is" : "no it is not"}
      </div> */}
      {!whatsapp && !login && !verification && (
        <div className='container'>
          <div className='row justify-content-center'>
            {/* <div className='col-12 text-center mb-4'>
              <button
                onClick={() => {
                  setSms(true);
                  setWhatsapp(false);
                }}
                className='btn btn-primary w-25'
              >
                SMS
              </button>
            </div> */}
            {/* <div className='col-12 text-center mb-4'>
              <button
                onClick={() => {
                  setLogin(true);
                  setWhatsapp(false);
                }}
                className='btn btn-primary w-50'
              >
                <p className='text-white' style={{ fontSize: "0.7rem" }}>
                  Already registered? Log in here
                </p>
              </button>
              <a
                className='btn btn-success text-light'
                href='https://wa.me/491744079675?text=Test+Optin+We+Can+Write+Whatever+We+Want+Here+But+The+Client+Has+To+Click+Send'
                target='_blank'
              >
                Whatsapp
              </a>
            </div> */}
            <div className='col-12 text-center  mb-4'>
              <button
                onClick={() => {
                  const agreed = window.sessionStorage.getItem("termsAgreed");
                  if (!agreed === true) {
                    handleClickOpen();
                  } else {
                    setWhatsapp(true);
                  }
                }}
                className='btn btn-success w-50'
              >
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      )}
      {whatsapp && (
        <div className='container'>
          {!verification && (
            <div>
              <div className='text-center'>
                <h1>Enter your number for verification</h1>
              </div>

              <form
                onSubmit={handleSubmit}
                className='row  justify-content-end'
              >
                <div className='col-12'>
                  <ReactPhoneInput
                    defaultCountry='DE'
                    className='phoneInput'
                    placeholder='Handynummer'
                    value={value}
                    onChange={setValue}
                  />
                </div>
                <div className='col-sm-12 col-md col-lg col-xl col-xxl text-center text-md-end  mt-3'>
                  <button
                    type='submit'
                    disabled={!value || loading}
                    className='btn btn-success btn-sm'
                  >
                    Submit
                  </button>
                </div>
                <div className='col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center text-md-end   mt-3'>
                  <button
                    disabled={loading}
                    onClick={() => {
                      all_off();
                    }}
                    className='btn btn-danger btn-sm'
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
          )}
          {verification && (
            <div>
              <div className='text-center'>
                <h1>Enter your code here</h1>
              </div>
              {/* <div className='text-center'>
                <button
                  onClick={handleResend}
                  disabled={!resendable}
                  className={
                    resendable
                      ? "btn btn-small btn-success border shadow"
                      : "btn btn-small btn-success border"
                  }
                >
                  {!resendable && (
                    <div>
                      Resend in:{" "}
                      <Countdown
                        onComplete={() => {
                          setResendable(true);
                        }}
                          
                        date={Date.now() + 60000}
                      />
                    </div>
                  )}
                  {resendable && <div>Resend</div>}
                </button>
              </div> */}
              <form
                onSubmit={handleVerify}
                className='row  justify-content-end'
              >
                <div className='col-12'>
                  <input
                    value={verify_value}
                    onChange={(e) => {
                      setVerifyValue(e.target.value);
                    }}
                    placeholder='Verification Code'
                    className='form-control'
                  />
                </div>
                <div className='col-12 col-md text-center text-md-end  mt-3'>
                  <button
                    style={{ height: "50px", fontSize: "12px" }}
                    type='submit'
                    disabled={!value || loading}
                    className='btn btn-success btn-sm'
                  >
                    Verify
                  </button>
                </div>
                <div className='col-12 col-md-2 text-right mt-3'>
                  <a
                    className='btn btn-success btn-sm'
                    style={{ height: "50px", fontSize: "12px" }}
                    href={`https://api.whatsapp.com/send/?phone=18313464750&text&type=phone_number&app_absent=0`}
                    target='_blank'
                  >
                    Open Whatsapp
                  </a>
                </div>
              </form>
            </div>
          )}
          {/* {value&& isPossiblePhoneNumber(value) ? "it is" : "no it is not" } */}
        </div>
      )}
      {login && (
        <div className='container'>
          {!verification && (
            <div>
              <div className='text-center'>
                <h1>Log in with your Phone number</h1>
              </div>
              <form onSubmit={handleLogin} className='row  justify-content-end'>
                <div className='col-12'>
                  <ReactPhoneInput
                    defaultCountry='DE'
                    className='phoneInput'
                    placeholder='Handynummer'
                    value={login_number}
                    onChange={setLoginNumber}
                  />
                </div>
                <div className='col-12 col-md text-center text-md-end mt-3'>
                  <button
                    type='submit'
                    disabled={!login_number || loading}
                    className='btn btn-success btn-sm'
                  >
                    Log in
                  </button>
                </div>
                <div className='col-12 col-md-2 text-center text-md-end mt-3'>
                  <button
                    disabled={loading}
                    onClick={() => {
                      all_off();
                    }}
                    className='btn btn-danger btn-sm'
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
          )}
          {verification && (
            <div>
              <form
                onSubmit={handleVerify}
                className='row  justify-content-end'
              >
                <div className='col-12'>
                  <input
                    value={verify_value}
                    onChange={(e) => {
                      setVerifyValue(e.target.value);
                    }}
                    placeholder='Verification Code'
                    className='form-control'
                  />
                </div>
                <div className='col text-right mt-3'>
                  <button
                    type='submit'
                    disabled={!value || loading}
                    className='btn btn-success btn-sm'
                  >
                    Verify
                  </button>
                </div>
                <div className='col-12 col-md-2 text-right mt-3'>
                  <a
                    className='btn btn-success btn-sm'
                    href={`https://wa.me/${value}`}
                  >
                    <div>Open Whatsapp</div>
                  </a>
                </div>
              </form>
            </div>
          )}
          {/* {value&& isPossiblePhoneNumber(value) ? "it is" : "no it is not" } */}
        </div>
      )}

      {/* <div className='ad'>
        <ins
          className='adsbygoogle'
          style={{ display: "block" }}
          data-ad-client='ca-pub-9225882475496989'
          data-ad-slot='6600412537'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </div> */}
      {/* <button onClick={sendAuthorization} className='btn btn-primary'>
        Authorize
      </button> */}

      {/* <div className='services-area-two pt-80 pb-50 bg-f9f6f6'>
        <div className='container'>
          <GoogleAdsense />
        </div>
      </div> */}
    </>
  );
};

export default CaptivaPortalDasEinstein;
