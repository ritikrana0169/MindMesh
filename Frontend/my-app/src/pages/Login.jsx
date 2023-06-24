import { useState } from "react"
import mindmesh from "../Logo/mindmesh.png"
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = ()=>{
        console.log(email,password);
        if(email && password){
            navigate("/dashboard")
        }
    }
    

    return (
      <div className="">
        <div className="flex" >
            <div className="w-4/12 bg-gray-200 h-screen">
                <h1 className="text-left pl-16 mt-16 text-2xl font-bold leading-9 tracking-tight text-gray-900" >MindMesh</h1>
                <h1 className="text-left pl-16 font-medium text-lg text-blue-600">To learn and know </h1>
                <h1 className="text-left pl-16 font-medium text-lg text-blue-600">more about MindMesh, Please Signup!!</h1>
                <img className="mt-20" src={mindmesh} alt="img" />
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 m-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                    </h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-left text-sm font-medium leading-6 text-gray-900">
                        Email address
                        </label>
                        <div className="mt-2">
                        <input
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
        
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        {/* <div className="text-sm">
                            <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                            </a>
                        </div> */}
                        </div>
                        <div className="mt-2">
                        <input
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
        
                    <div>
                        <button
                        onClick={handleClick}
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Sign in
                        </button>
                    </div>
                    </form>
                    {/* <div>
                        <link className="flex justify-center" rel="stylesheet" href="/signup" >Signup</link>
                    </div> */}
                    <a href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign Up?
                    </a>
                </div>
            </div>
            
        </div>
      </div>
    )
  }