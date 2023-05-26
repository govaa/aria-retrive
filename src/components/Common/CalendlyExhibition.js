import React from 'react'; 

const CalendlyExhibition = () => {
    return (
            <div className="">
                <div className="row justify-content-center">
                    <iframe
                        src='https://calendly.com/ariadnemaps/nrf2023?hide_gdpr_banner=1'
                        loading='lazy'
                        frameBorder='0'
                        height='750vh'
                        title='calendly'
                        sandbox='allow-same-origin allow-scripts allow-popups allow-forms'>
                    </iframe>
            </div>
        </div>
    )
}

export default CalendlyExhibition;  
