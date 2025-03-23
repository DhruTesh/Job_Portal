'use client'
import { useState } from 'react'
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const ForgotPasswordPage = () => {
    const [emailSubmit, setEmailSubmit] = useState(false)
    const [otpValidate, setOtpValidate] = useState(false)
    const [contentVal, setContentValue] = useState("Submit Your Email")
    const [inputField, setInputField] = useState({ email: "", otp: "", newPassword: "" });

    const handleSubmit = () => {
        if (!emailSubmit) {
            setEmailSubmit(true)
            setContentValue("Submit OTP")
        } else if (emailSubmit && !otpValidate) {
            setOtpValidate(true)
            setContentValue("Submit New Password")
        }

    }
    console.log(inputField)
    const handleOnChange = (event: any, name: string) => {
        setInputField({ ...inputField, [name]: event.target.value })
    }
    return (
        <div className="flex min-h-screen bg-gray-100 justify-center items-center ">
            <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden w-2/4 flex bg-white">


                {/* Left Section */}
                <div className="w-1/2 bg-gradient-to-b from-purple-900 to-purple-700 text-white p-10 pt-20 flex flex-col justify-center items-start">
                    <div className="flex space-x-2 mb-4">
                        <img src="https://marketplace.canva.com/EAF0Hq4UHjM/1/0/1600w/canva-orange-phoenix-animal-gaming-logo-WIPEOAyYPIs.jpg" alt="Profile 1" className="rounded-full" width={50} height={50} />
                        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_289,dpr_2/f_auto,q_auto/v1706089499/ideas-and-advice-prod/en-us/attachment_43805737-e1494006955649/attachment_43805737-e1494006955649.jpg?_i=AA" alt="Profile 2" className="rounded-full" width={50} height={50} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcRk469yihqTdrwpvbiPoovqlsbP2rcRjxEXHFChvOlj-vkaSIj3EZ-CnFBb1t4FQsvc&usqp=CAU" alt="Profile 3" className="rounded-full" width={50} height={50} />
                    </div>
                    <h1 className="text-4xl flex font-bold mb-4">Welcome to Airtribe <span className="text-yellow-400">✨</span></h1>
                    <p className="text-lg mb-6">Expert-led training courses to accelerate your professional development</p>
                    <Link href="/login" className="text-lg underline flex items-center">Log in to get back  <i className="fas fa-arrow-right ml-2"><FaArrowRight /></i></Link>
                </div>


                {/* Right Section */}

                <div className="w-1/2 bg-white p-10 flex flex-col justify-center items-center">
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-6 pl-10">forgot Password</h2>
                        <div className="text-lg mb-6 pl-10">
                        <p>Please enter your email to receive</p>
                        <p className="font-semibold pl-10">one time OTP</p>

                        </div>
                        <form className="space-y-4">

                        <div className='w-full items-center'>
                            <div className='w-full mb-5'>
                                <input type='text' 
                                value={inputField.email} 
                                onChange={(event) => { handleOnChange(event, "email") }} 
                                className='w-full p-3 border border-gray-300 rounded-lg ' 
                                placeholder='Enter Email' />
                            </div>

                            {
                                emailSubmit && <div className='w-full mb-5'>
                                
                                    <input type='text' value={inputField.otp} onChange={(event) => { handleOnChange(event, "otp") }} className='w-full p-3 border border-gray-300 rounded-lg ' placeholder='Enter OTP' />
                                </div>
                            }

                            {
                                otpValidate && <div className='w-full mb-5'>
                                    
                                    <input type='password' value={inputField.newPassword} onChange={(event) => { handleOnChange(event, "newPassword") }} className='w-full p-3 border border-gray-300 rounded-lg ' placeholder='Enter New Password' />
                                </div>
                            }

                            <div className='bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center text-lg border-2 hover:bg-white hover:text-black font-semibold cursor-pointer' onClick={() => handleSubmit()}>{contentVal}</div>

                            

                        </div>
                        </form>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default ForgotPasswordPage;
