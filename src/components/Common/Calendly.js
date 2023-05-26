import React from 'react'; 

const Calendly = () => {
    return (
            <div className="">
                <div className="row justify-content-center">
                    <iframe
                        src='https://calendly.com/georgiopoulos_g/30min'
                        loading='lazy'
                        frameBorder='0'
                        height='800vh'
                        title='calendly'
                        sandbox='allow-same-origin allow-scripts allow-popups allow-forms'>
                    </iframe>
            </div>
        </div>
    )
}

export default Calendly;  