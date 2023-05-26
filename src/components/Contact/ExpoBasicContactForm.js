import React, { useRef, useState } from "react";
import Link from 'next/link';
import emailjs from "@emailjs/browser";
import * as EmailValidator from 'email-validator';

const ContactForm = () => { 
    const form = useRef();
  
    const [isSent, setSend] = useState(false)
    const [formData, setFormData] = useState({user_name: "", user_email: "", user_tel: "", subject: "",message: ""})
    const [isEmailValid, setEmailValid] = useState('')
    const [loading, setLoading] = useState(false);
  
    const onChangeForm = (e) =>{
      const {name, value} = e.target
      setFormData({...formData, [name]: value})
  
    }
      
    const Success =()=>{
      return(<div className="border rounded-md h-2/4 transition-all">
        <h2>Thank you for your message. Our team will contact you shortly</h2>
      </div>)
    }
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      
    
      console.log('form ', form.current)
      if (EmailValidator.validate(formData.user_email)) setEmailValid(" ")
      else setEmailValid("Invalid email")  // true
  
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
            setSend(true)
            setLoading(false)
            
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
        <div className="contact-area pt-4">
            <div className="container">

                <div className="row">

                    <div className="col-lg-6 col-md-12">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row gy-2">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="user_name" 
                                            placeholder="Full Name" 
                                            className="form-control" 
                                            value={formData.user_name}
                                            onChange={onChangeForm}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text" 
                                            name="user_email" 
                                            placeholder="Business Email Address" 
                                            className="form-control" 
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

                                {/* <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            placeholder="Subject (Optional)" 
                                            className="form-control" 
                                            value={formData.subject}
                                            onChange={onChangeForm}
                                        />
                                    </div>
                                </div> */}

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea 
                                            name="message" 
                                            cols="30" 
                                            rows="5" 
                                            placeholder="Write your message..." 
                                            className="form-control" 
                                            value={formData.message}
                                            onChange={onChangeForm}
                                        />
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            By checking this, you agree to our <Link href="/imprint"><a>Terms</a></Link> and <Link href="/privacy-policy"><a>Privacy policy</a></Link>.
                                        </label>
                                        {isSent && <div className="pt-4 pb-4 text-success">Your message has been received, our team will contact you shortly.</div>}
                                    </div>
                                </div>
            
                                <div className="col-lg-12 col-sm-12 pb-80">
                                    <button 
                                    className="btn btn-primary"
                                    disabled={loading} 
                                    type="submit">
                                    Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

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