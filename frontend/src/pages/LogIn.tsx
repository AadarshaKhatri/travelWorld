import {Link} from "react-router-dom";
import GoogleAuth from "../services/GoogleAuth";

import GithubAuth from "../services/GithubAuth";

const LogIn = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <div className="w-[350px] border border-gray-500 rounded-md p-5">

            <div className="pb-5">
              <h2 className="text-2xl font-semibold text-blue-950">Log In</h2>
              <h5 className="text-md text-blue-950">to start booking.</h5>
            </div>

          <form className="">
            <div className="flex flex-col mt-5">

            {/* Username */}

            <label htmlFor="username">Username</label>
            <input className="p-4  border border-gray-200 outline-gray-400 rounded-md" name="username" type = 'text' placeholder="Enter your Username"></input>

            {/* Password */}

            <label htmlFor="password">Password</label>

            <input name="password" className="p-4 border border-gray-200 outline-gray-400 rounded-md" type = "password" placeholder="Enter your password"></input>


            {/* OAuth Services */}
            <div className="flex flex-col space-y-2 py-5">
             <GoogleAuth/>
              <GithubAuth/>
            </div>

            <div>
            </div>
              <h6><Link to='/register'>Don't have an account?</Link></h6>
            <button className="w-full rounded-md text-white bg-primary py-4" type="submit">Log In</button>

          </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default LogIn