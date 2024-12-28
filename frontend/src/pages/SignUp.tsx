
import { Link } from "react-router-dom"
const SignUp = () => {
  return (
    <section>
      <div>
        <div>
          Log in Form

          <div>
            {/* Email */}

            <label>Email</label>
            <input type="email" placeholder="Enter your email"></input>
            {/* Username */}

            <label>Username</label>
            <input type = 'text' placeholder="Enter your Username"></input>

            {/* Password */}

            <label>Password</label>
            <input type = "password" placeholder="Enter your password"></input>

            {/* OAuth Services */}
            <div>
              O Auth Services Here
            </div>

            <div>
              <h6><Link to='/login'>Already have an account?</Link></h6>
            </div>
            <button type="submit">Create an Account</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp