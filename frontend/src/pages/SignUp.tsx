import {useRef} from 'react';
import { Link } from "react-router-dom"
import {postData} from '../Service/GetService';
const SignUp : React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const username = usernameRef.current?.value;
    const res = await postData("auths/register",{
      email,
      password,
      username,
    });
    console.log(res.data);
    
  }
  return (
    <section className="py-10">

      <div className=" flex flex-col justify-center items-center gap-y-5">
        <div className="w-[350px] border border-gray-500 rounded-md p-5">

            <div className="pb-5">
              <h2 className="text-2xl font-semibold text-blue-950">Create an Account In</h2>
              <h5 className="text-md text-blue-950">to start booking.</h5>
            </div>



          <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-col mt-5 space-y-3">
            {/* Email */}

            <label htmlFor="email">Email</label>

            <input ref={emailRef} name="email" className="p-4 border border-gray-200 outline-gray-400 rounded-md" type="email" placeholder="Enter your email"></input>


            {/* Username */}

            <label htmlFor="username">Username</label>
            <input ref={usernameRef} className="p-4 border border-gray-200 outline-gray-400 rounded-md " type = 'text' placeholder="Enter your Username"></input>

            {/* Password */}

            <label htmlFor="password">Password</label>
            <input ref={passwordRef} name="password" className="p-4 border border-gray-200 rounded-md" type = "password" placeholder="Enter your password"></input>

            {/* OAuth Services */}
            {/* <div>
              O Auth Services Here
            </div> */}

            <div className="py-4">
              <h6 className="font-light hover:underline"><Link to='/login'>Already have an account?</Link></h6>
            </div>


            <button type="submit" className="w-full py-4 rounded-md bg-primary text-white" >Create an Account</button>
          </div>
          </form>
        </div>  
      </div>
    </section>
  )
}

export default SignUp