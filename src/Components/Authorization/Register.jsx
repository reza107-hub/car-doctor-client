import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProbider/AuthProvider";

const Register = () => {
  const { createUser, updateProf } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = null;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        updateProf(name, photo);
        console.log(result.user);
        alert('User Created')
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
            <form onSubmit={handleRegister} className="card-body">
              <p className="text-2xl font-bold text-center">Sign up</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
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
                  value="Register"
                  className="btn btn-primary normal-case"
                />
              </div>

              <p>
                Already have an account?{" "}
                <Link to="/login" className="underline text-primary">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
