import React from 'react';

const PageBanner = ({pageTitle, pageSubtitle}) => {
    return (
        <div className="page-title-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <h1>{pageTitle}</h1>
                        <h4 className="pt-3">{pageSubtitle}</h4>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
			<div className="shape2 rotateme">
                <img src="/images/shape2.png" alt="shape" />
            </div>
			<div className="shape3">
                <img src="/images/shape3.png" alt="shape" />
            </div>
			<div className="shape4">
                <img src="/images/shape4.png" alt="shape" />
            </div>
			<div className="shape5">
                <img src="/images/shape5.png" alt="shape" />
            </div>
			<div className="shape6 rotateme">
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

export default PageBanner;