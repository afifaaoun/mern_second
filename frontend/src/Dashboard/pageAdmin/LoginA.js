import React from 'react'
import CustomInputA from "../pageAdmin/CustomInputA"


const LoginA = () => {
  return (
    <div className="py-5" style={{ background: "#eee", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <CustomInputA type="text" placeholder="Email Address" id="email" />
        <CustomInputA type="text" placeholder="password" id="pass" />

      </div>
    </div>
  )
}

export default LoginA