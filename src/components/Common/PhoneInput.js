import ReactPhoneInput from 'react-phone-number-input'
import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import { isPossiblePhoneNumber } from 'react-phone-number-input'

function PhoneInput() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState()
  return (

    <div className="ptb-80 align-content-center">
    <ReactPhoneInput
      defaultCountry="DE"
      className="phoneInput"
      placeholder="Handynummer"
      value={value}
      onChange={setValue}/>
      {/* {value&& isPossiblePhoneNumber(value) ? "it is" : "no it is not" } */}
    </div>
  )
}

export default PhoneInput