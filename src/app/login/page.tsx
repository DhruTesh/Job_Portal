'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { FaEye } from "react-icons/fa";



export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login response", response.data);
      toast.success("Login successful");


      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (

    <div className="flex min-h-screen bg-gray-100 justify-center items-center ">
      <Toaster position="top-right" reverseOrder={false} />
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
            <h2 className="text-2xl font-bold mb-6 pl-10">{loading ? "Loading..." : "Log in to your account"}</h2>
            <div className="text-lg mb-6 pl-10">
              <p>Please enter your email and password</p>

            </div>


            <form className="space-y-4" onSubmit={onLogin}>

              {/*email */}
              <input id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg" />

              {/*password */}
              <div className="relative w-full">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="Password"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEye size={20} /> : <FaEye size={20} />} {/* You can switch to FaEyeSlash if needed */}
                </button>
              </div>


              <Link href="/forgotpassword" className="text-sm item-center text-center text-gray-500 mt-3 cursor-pointer" >Forgot password?</Link>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={buttonDisabled}
                className={`w-full ${buttonDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-200 cursor-pointer'} text-purple-700 p-3 rounded-lg font-semibold`}>
                {buttonDisabled ? "No login" : "Login"}
              </button>


            </form>

            <div className="flex items-center my-6">
              <hr className="w-full border-gray-300" />
              <span className="px-3 text-gray-500">OR</span>
              <hr className="w-full border-gray-300" />
            </div>

            {/* Google */}
            <button onClick={() => { signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_URL }) }} className="w-full bg-white border border-gray-300 text-gray-700 p-3 rounded-lg flex items-center justify-center cursor-pointer">
              <img src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo-thumbnail.png" alt="Google logo" className="mr-2" width={20} height={20} />
              Continue with Google
            </button>

            {/* LinkedIn 
            <button className="w-full bg-white border border-gray-300 text-gray-700 p-3 mt-3 rounded-lg flex items-center justify-center cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn logo"
                className="mr-2"
                width={20}
                height={20}
              />
              Continue with LinkedIn
            </button>*/}

            <p className="text-sm text-center text-gray-500 mt-6">Already have an account? <Link href="/signup" className="text-blue-500">Sign Up</Link></p>
          </div>
        </div>

      </div>
    </div>

  )
}

