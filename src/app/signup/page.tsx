'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { FaEye } from "react-icons/fa";


export default function SignUpPage() {

  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
    number: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);


  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success('Signup successful! Redirecting...');
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      console.log("Signup response", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0 && user.number.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

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
          <Link href="/signup" className="text-lg underline flex items-center">Sign up to get started <i className="fas fa-arrow-right ml-2"><FaArrowRight /></i></Link>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center items-center">
          <div className="w-full max-w-md ">
            <h2 className="text-2xl pl-[6rem] font-bold mb-6">{loading ? "Loading..." : "Create account"}</h2>
            <form onSubmit={onSignup} className="space-y-4">

              {/*username */}
              <input id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Username"
                className="w-full p-3 border border-gray-300 rounded-lg" />

              {/*email */}
              <input id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg" />

              {/*password */}
              {/* Password Input with Toggle */}
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


              {/*number */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIJbX-6MVfN4u1_xWs8A7eADfLg1lU9k7oA&s" alt="Country flag" className="ml-3 mr-2" width={30} height={20} />
                <input id="number"
                  type="text"
                  value={user.number}
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                  placeholder="Number"
                  className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="whatsapp-updates" className="mr-2  cursor-pointer" />
                <label htmlFor="whatsapp-updates" className="text-sm">Send me updates over WhatsApp</label>
              </div>

              {/* Submit Button */}
              <button onClick={onSignup}
                type="submit"
                disabled={buttonDisabled}
                className={`w-full ${buttonDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-200 cursor-pointer'} text-purple-700 p-3 rounded-lg font-semibold`}>
                {buttonDisabled ? "No signup" : "Signup"}
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
            </button> */}

            <p className="text-sm text-center text-gray-500 mt-6">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};


