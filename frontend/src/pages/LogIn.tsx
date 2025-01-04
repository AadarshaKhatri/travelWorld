import {Link} from "react-router-dom";
import {useRef} from 'react';
import { postData } from "../Service/GetService";
// import GoogleAuth from "../services/GoogleAuth"; This will be implemented later

// import GithubAuth from "../services/GithubAuth";


const LogIn = () => {
  const emailRef= useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null)


  const handleSubmit = async(e : React.FormEvent)=>{
    e.preventDefault(); 
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const res = await postData("auths/login",{
      email,
      password,
    });
    console.log(res.data);
    if(res.data){
      alert("Logged In")
    }
  }
  return (
    <section className="py-10">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <div className="w-[350px] border border-gray-500 rounded-md p-5">

            <div className="pb-5">
              <h2 className="text-2xl font-semibold text-blue-950">Log In</h2>
              <h5 className="text-md text-blue-950">to start booking.</h5>
            </div>

          <form onSubmit={handleSubmit} method="post">
            <div className="flex flex-col mt-5">

            {/* email */}

            <label htmlFor="email">Email</label>
            <input ref={emailRef} className="p-4  border border-gray-200 outline-gray-400 rounded-md" name="email" type = 'email' placeholder="Enter your email"></input>

            {/* Password */}

            <label htmlFor="password">Password</label>

            <input ref={passwordRef} name="password" className="p-4 border border-gray-200 outline-gray-400 rounded-md" type = "password" placeholder="Enter your password"></input>


            {/* OAuth Services */}
            {/* <div className="flex flex-col space-y-2 py-5">
             <GoogleAuth/>
              <GithubAuth/>
            </div> */}

            <div className="py-4">
              <h6 className="font-light hover:underline"><Link to='/register'>Don't have an account?</Link></h6>
            </div>
            <button className="w-full rounded-md text-white bg-primary py-4" type="submit">Log In</button>

          </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default LogIn