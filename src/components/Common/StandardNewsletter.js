import React from 'react';
import { useState } from 'react';
import axios from "axios";

export default () => {
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [errorMessage, setErrorMessage] = useState(null);

    const subscribe = async () => {
        setState("LOADING");
        setErrorMessage(null);
        try {
            const response = await axios.post("/api/emailnewsletter", {email});
            setState("SUCCESS");
        } catch (e) {
            setErrorMessage(e.response.data.error);
            setState("ERROR")
        }
    }

    return (
        <div className="free-trial-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-image">
                            <img src="/images/free-trial-img.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="free-trial-content">
                            <h2>Get Ariadne For Your Business</h2>

                            <form className="newsletter-form">
                                <input type="email" className="input-newsletter" placeholder="Enter your business email here" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                <button type="button" disabled={state==="LOADING"} onClick={subscribe}>Sign Up Free</button>
                            </form>
                            {state==="ERROR" && (
                                <p className="domain-search-content text-danger">{errorMessage}</p>
                            )}
                            {state==="SUCCESS" && (
                                <p className="domain-search-content text-success">Thank you for your interest, our team will be in contact as soon as possible.</p>
                            )}
                            <p>Get Ariadne features for your business.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src="/images/shape2.png" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.png" alt="shape" />
            </div>
        </div>
    );
}

