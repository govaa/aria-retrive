import React, { useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import * as EmailValidator from "email-validator";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ContactForm = () => {

  
  const { locale, locales, defaultLocale, asPath } = useRouter();

  const translations = {
    en: {
      text_a:"Get In Touch With Us",
      text_b:"Anything On your Mind. We'll Be Glad To Assist You!",
      text_c:"Full Name",
      text_d:"Email Address",
      text_e:"Subject (Optional)",
      text_f:"Your Message...",
      text_g:"By submitting this form, you agree to our ",
      text_k:"Terms",
      text_l:" and ",
      text_m:"Privacy Policy",
      text_h:"Send Message",
      text_i:"Thank you for your message. Our team will contact you shortly.",
    },
    de: {
      text_a:"Kontaktieren Sie uns",
      text_b:"Alles was Sie beschäftigt. Wir helfen Ihnen gerne weiter!",
      text_c:"Vollständiger Name",
      text_d:"E-Mail-Adresse",
      text_e:"Betreff (optional)",
      text_f:"Ihre Nachricht...",
      text_g:"Durch das Absenden dieses Formulars stimmen Sie unseren ",
      text_k:"Nutzungsbedingungen",
      text_l:" und ",
      text_m:"Datenschutzbestimmungen zu.",
      text_h:"Send Message",
      text_h:"Nachricht senden",
      text_i:"Vielen Dank für Ihre Nachricht. Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen.",
    },
  }

  const [language, setLanguage] = useState({});

  useEffect(() => {
    console.log(locale);
    if (locale === "de") {
      console.log("locale is german");
      setLanguage(translations.de);
    } else if (locale === "en") {
      console.log("locale is uk");
      setLanguage(translations.en);
      // console.log("object: ",language)
    } else {
      console.log("locale is french");
      setLanguage(translations.fr);
      // console.log("object: ",language)
    }
  }, []);

  const form = useRef();

  const [isSent, setSend] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_tel: "",
    subject: "",
    message: "",
  });
  const [isEmailValid, setEmailValid] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Success = () => {
    return (
      <div className='border rounded-md h-2/4 transition-all'>
        <h2>{language.text_i}</h2>
      </div>
    );
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("form ", form.current);
    if (EmailValidator.validate(formData.user_email)) setEmailValid(" ");
    else setEmailValid("Invalid email"); // true

    emailjs
      .sendForm(
        "service_sz5fwrj",
        "template_bo5pqb9",
        form.current,
        "5XnEP5pWWhSJWW48B"
      )
      .then(
        (result) => {
          console.log(result?.text);
          console.log("message sent");
          setSend(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-area ptb-80'>
      <div className='container'>
        <div className='section-title'>
          <h2>{language.text_a}</h2>
          <div className='bar'></div>
          <p>{language.text_b}</p>
        </div>

        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12'>
            <Image
              width={600}
              height={400}
              src='/images/contact-img.png'
              alt='image'
            />
          </div>

          <div className='col-lg-6 col-md-12'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row'>
                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='user_name'
                      placeholder={language.text_c}
                      className='form-control'
                      value={formData.user_name}
                      onChange={onChangeForm}
                      required
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='user_email'
                      placeholder={language.text_d}
                      className='form-control'
                      value={formData.user_email}
                      onChange={onChangeForm}
                      required
                    />
                    {!isEmailValid && <div>{isEmailValid}</div>}
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="user_tel" 
                                            placeholder="Your phone number" 
                                            className="form-control" 
                                            value={formData.user_tel}
                                            onChange={onChangeForm}
                                        />
                                    </div>
                                </div> */}

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='subject'
                      placeholder={language.text_e}
                      className='form-control'
                      value={formData.subject}
                      onChange={onChangeForm}
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      cols='30'
                      rows='5'
                      placeholder={language.text_f}
                      className='form-control'
                      value={formData.message}
                      onChange={onChangeForm}
                    />
                  </div>

                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckDefault'
                    >
                      {language.text_g}{" "}
                      <Link href='/imprint'>
                        <a>{language.text_k}</a>
                      </Link>{" "}
                      {language.text_l}{" "}
                      <Link href='/privacy-policy'>
                        <a>{language.text_m}</a>
                      </Link>
                      .
                    </label>
                    {isSent && (
                      <div className='pt-4 pb-4 text-success'>
                        {language.text_i}
                      </div>
                    )}
                  </div>
                </div>

                <div className='col-lg-12 col-sm-12'>
                  <button
                    className='btn btn-primary'
                    disabled={loading}
                    type='submit'
                  >
                    {language.text_h}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// import React, { useState } from "react";
// import axios from "axios";
// import Link from 'next/link';
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// const MySwal = withReactContent(Swal);
// import baseUrl from '../../utils/baseUrl'

// const alertContent = () => {
//     MySwal.fire({
//       title: "Congratulations!",
//       text: "Your message was successfully send and will back to you soon",
//       icon: "success",
//       timer: 2000,
//       timerProgressBar: true,
//       showConfirmButton: false,
//     });
//   };

//   // Form initial state
//   const INITIAL_STATE = {
//     name: "",
//     email: "",
//     number: "",
//     subject: "",
//     text: "",
//   };

// const ContactForm = () => {

//     const [contact, setContact] = useState(INITIAL_STATE);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setContact((prevState) => ({ ...prevState, [name]: value }));
//         // console.log(contact)
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = `${baseUrl}/api/contact`;
//             const { name, email, number, subject, text } = contact;
//             const payload = { name, email, number, subject, text };
//             const response = await axios.post(url, payload);
//             console.log(response);
//             setContact(INITIAL_STATE);
//             alertContent();
//         } catch (error) {
//             console.log(error);
//         }
//     };
