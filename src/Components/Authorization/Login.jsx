import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProbider/AuthProvider";

const Login = () => {
  const { signIn, logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        alert("User Logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signInWithGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        alert("User Logged in successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-14 lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="h-[500px] w-full"
              src="https://i.ibb.co/TRyTmtc/Untitled-5.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <p className="text-2xl font-bold text-center">Log in</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary normal-case"
                />
              </div>
              <p className="mt-7 font-thin text-xs">Or Sign In with</p>
              <div className="mt-7 mb-12 ">
                <button
                  onClick={signInWithGoogle}
                  className="btn btn-outline btn-primary normal-case w-full"
                >
                  Sign in with google
                </button>
              </div>
              <p>
                New at here?{" "}
                <Link to="/register" className="underline text-primary">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
