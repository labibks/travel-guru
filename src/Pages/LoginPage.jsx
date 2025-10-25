import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    signIn(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleForgetPassword = () => {
    // console.log("forget click")
    if (!email) {
      toast.error("Please enter your email first");
      return;
    }
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="">
      

      {/* Right Side - Login Form */}
      <div
        className="w-full  flex items-center justify-center relative pt-8 
  bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 overflow-hidden"
      >
        
        
        {/* Login Form */}
        <div
          className="border border-amber-400 p-12 shadow-xl">
          <h2 className="text-4xl font-bold text-white text-center mb-3 animate-fadeInDown">
            Login
          </h2>
          <p className="text-white/80 text-center mb-6 animate-fadeInUp">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-white/90">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 
                     focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                required
              />
            </div>

            <div className="relative">
              <label className="block mb-1 font-medium text-white/90">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 
                     focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-[35px] text-white/80 hover:text-white transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="text-white/80 hover:underline text-sm transition"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-white/40 hover:bg-white/60 text-white font-semibold rounded-xl transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="my-5 text-center text-white/70">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition duration-300"
          >
            Continue with Google
          </button>

          <p className="mt-5 text-center text-white/80">
            Don't have an account?{" "}
            <Link to="/register" className="text-white hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
