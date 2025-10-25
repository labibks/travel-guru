import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const RegisterPage = () => {
  const { signUp, googleSignIn, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Password validation
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    if (!uppercase || !lowercase || password.length < 6) {
      toast.error(
        "Password must have uppercase, lowercase and minimum 6 characters"
      );
      return;
    }

    signUp(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL })
          .then(() => {
            toast.success("Registered Successfully!");
            navigate(from, { replace: true });
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then(() => {
        toast.success("Registered Successfully via Google!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 text-white p-12 relative overflow-hidden">
        <h1 className="text-5xl font-bold mb-6 animate-fadeInDown">
          Welcome to WinterPetCare
        </h1>
        <p className="text-lg text-white/90 animate-fadeInUp">
          Create your account and manage your pets with ease. Enjoy a seamless
          and interactive experience.
        </p>

        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="bg-white w-36 h-36 rounded-full absolute -top-10 -left-10 animate-spin-slow"></div>
          <div className="bg-white w-28 h-28 rounded-full absolute bottom-10 right-10 animate-pulse-slow"></div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center relative pt-8 
  bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 overflow-hidden"
      >
        <div className="bg-white/20 backdrop-blur-md p-12 rounded-3xl shadow-2xl w-full max-w-md border border-white/30">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center animate-fadeInDown">
            Register
          </h2>
          <p className="text-gray-600 mb-8 text-center animate-fadeInUp">
            Enter your details to create a new account
          </p>

          <form onSubmit={handleRegister} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-3 text-gray-600 hover:text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition duration-300"
            >
              Register
            </button>
          </form>

          <div className="my-5 text-center text-gray-500">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition duration-300"
          >
            Register with Google
          </button>

          <p className="mt-5 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
