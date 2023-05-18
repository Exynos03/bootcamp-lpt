import React from 'react'
import { useState, useRef } from "react"

export default function OTP(props) {
    const [otp, setOtp] = useState(["", "", "", ""])
    const inputRefs = useRef([])

    function handleChange(e, index){
        const value = e.target.value;
        if (value.length > 1) {
            return;
        }

        setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index] = value;
            return newOtp
        })

        if (value && index < inputRefs.current.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }

    function handleKeyDown(e,index){
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    }

    console.log(otp)
    props.otp.push(otp)

  return (
    <div className="otp">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          className="otp-input"
          maxLength={1}
          value={value}
          ref={(ref) => inputRefs.current.push(ref)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  )
}
