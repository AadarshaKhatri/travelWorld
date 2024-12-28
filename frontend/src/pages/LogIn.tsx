import {Link} from "react-router-dom";

const LogIn = () => {
  return (
    <section>
      <div>
        <div>
          Log in Form

          <div>
            {/* Username */}

            <label>Username</label>
            <input type = 'text' placeholder="Enter your Username"></input>

            {/* Password */}

            <label>Password</label>
            <input type = "password"></input>

            {/* OAuth Services */}
            <div>
              O Auth Services Here
            </div>

            <div>
              <h6><Link to='/register'>Don't have an account?</Link></h6>
            </div>
            <button type="submit">Log In</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogIn