import React from 'react';

const DashboardCta = () => {
    return (
        <div className="domain-search-area pt-1 pb-80 mb-4">
            <div className="container">
                <div className="domain-search-content">
                    <h2>Access Ariadne Dashboard For FREE</h2>
                    <form>
                        <input type="text" className="form-control" name="domain-search" id="domain-search" placeholder="Email address" />

                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DashboardCta;
