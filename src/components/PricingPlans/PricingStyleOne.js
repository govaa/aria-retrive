import React from 'react';
import Link from 'next/link'

const PricingStyleOne = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-ffffff">
            <div className="container">
                <div className="section-title">
                    <h2>Pricing Plans</h2>
                    <div className="bar"></div>
                    <p>You can get started with Ariadne even for free! Simply choose the plan below based on your needs.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Free</h3>
                            </div>
                            
                            <div className="price">
                                <span><sup>€</sup>0 <span>/Mon</span></span>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active">Manual People Counting</li>
                                    <li className="active">Manual Customer Tracking</li>
                                    <li className="active">Number of People</li>
                                    <li className="active">Heatmap</li>
                                    <li className="active">Trajectories</li>
                                    <li>Navigation</li>
                                    <li>Push Notificaitons</li>
                                    <li>Automated Visitor Analytics</li>
                                    <li>Monthly Reports and Analytics</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="/get-started">
                                    <a className="btn btn-primary">Get Started Free</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table active-plan">
                            <div className="pricing-header">
                                <h3>Standard</h3>
                            </div>
                            
                            <div className="price">
                                <span><sup>€</sup>1200 <span>/Mon</span></span>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active">People Counting (Total & By Area)</li>
                                    <li className="active">Dwell Time (Total & By Area)</li>
                                    <li className="active">Heatmap</li>
                                    <li className="active">Trajectories</li>
                                    <li className="active">Employee Scheduling</li>
                                    <li className="active">Queue Management</li>
                                    <li className="active">Data Security and Backups</li>
                                    <li className="active">Navigation</li>
                                    <li className="active">Push Notifications</li>
                                    <li className="active">Monthly Reports and Analytics</li>
                                    <li className="active"><strong>This option is valid up to 1000m<sup>2</sup> area.</strong><br />For larger areas, please contact us.</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="/letstalk">
                                    <a className="btn btn-primary">Select Plan</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Custom</h3>
                            </div>
                            
                            <div className="price">
                                <span><sup></sup>Custom <span></span></span>
                            </div>
                            
                            <div className="pricing-features pb-80">
                                <ul>
                                    <li className="active">Standard Package</li>
                                    <li className="active"><strong>+</strong></li>
                                    <li className="active">Customized Dashboards</li>
                                    <li className="active">Specific Use Cases</li>
                                    <li className="active pb-5">For Larger Areas</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="/contact">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src="/images/shape2.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.png" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.png" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="shape" />
            </div>
        </div>
    );
    
}

export default PricingStyleOne;
