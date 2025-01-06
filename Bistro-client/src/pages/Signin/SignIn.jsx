import { FcGoogle } from "react-icons/fc";
import loginImg from "../../assets/others/authentication2.png";
import { FaEye, FaFacebookF, FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { RiEyeCloseFill } from "react-icons/ri";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignIn = () => {
      useTitle("Login");
      const { signIn, googleLogin, githubLogin, setUser } = useContext(AuthContext);
      const axiosPublic = useAxiosPublic();
      const [disabled, setDisabled] = useState(true);
      const [showPassword, setShowPassword] = useState(false);
      const location = useLocation();
      const navigate = useNavigate();

      console.log(location)

      useEffect(() => {
            loadCaptchaEnginge(6);
      }, []);

      const handleValidate = (e) => {
            const user_captcha_value = e.target.value;
            if (validateCaptcha(user_captcha_value) == true) {
                  setDisabled(false)
            }
      }

      // Login with email & password
      const handleLogin = e => {
            e.preventDefault();
            const form = new FormData(e.target);
            const email = form.get('email');
            const password = form.get('password');
            const userInfo = { email, password };

            signIn(email, password)
                  .then(userCredential => {
                        console.log(userCredential.user)
                        toast.success('Login Successfull');
                        setTimeout(() => {
                              navigate(location?.state ? location.state : '/')
                        }, 2000);
                  })
                  .catch(error => {
                        console.log(error)
                  })
      };

      // Login with Google
      const handleGoogle = () => {
            googleLogin()
                  .then(result => {
                        const userInfo = result.user;
                        // Send user to the database
                        const userDetails = {
                              name: userInfo.displayName,
                              email: userInfo.email
                        }
                        axiosPublic.post('/users', userDetails)
                              .then(res => {
                                    toast.success('Login Successfull');
                                    setTimeout(() => {
                                          navigate(location?.state ? location.state : '/')
                                    }, 2000);
                              })
                  }).catch(error => console.log(error))
      };


      // Login with Github
      const handleGithub = () => {
            githubLogin()
                  .then(result => {
                        const userDetails = result.user;
                  }).catch(error => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(error)
                        console.log(errorCode)
                        console.log(errorMessage)
                  })
      }

      return (
            <section className="w-full min-h-screen place-content-center bg-loginBg">
                  <div className="w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center bg-transparent border-2 border-b-8 border-r-8 border-gray-400/60">
                        <div className="lg:flex-1">
                              <img src={loginImg} alt="" className="w-10/12 mx-auto" />
                        </div>
                        <div className="lg:flex-1">
                              <div className="card w-full md:w-9/12 mx-auto">
                                    <form onSubmit={handleLogin} className="card-body pb-0">
                                          <h2 className="text-center font-bold text-xl">Login</h2>
                                          {/* email */}
                                          <div className="form-control">
                                                <label htmlFor="email" className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" id="email" name="email" placeholder="enter your email" className="input input-bordered" required />
                                          </div>
                                          {/* password */}
                                          <div className="form-control relative">
                                                <label htmlFor="password" className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type={`${showPassword ? 'text' : 'password'}`} id="password" name="password" placeholder="enter your password" className="input input-bordered pr-12" required />
                                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[52px] ">{showPassword ? <FaEye />
                                                      : <RiEyeCloseFill />}</button>
                                          </div>
                                          {/* captcha */}
                                          <div className="form-control">
                                                <label className="label">
                                                      <LoadCanvasTemplate />
                                                </label>
                                                <input type="text" onBlur={handleValidate} placeholder="type captcha" className="input input-bordered" required />
                                                <input type="btn" defaultValue="Validate" className="btn btn-sm hover:text-slate-50 hover:bg-yellow-600 focus:outline-none bg-gray-200 shadow-sm mt-3" />
                                          </div>
                                          {/* Login btn */}
                                          <div className="form-control mt-4">
                                                <button type="submit" disabled={disabled} className="btn bg-yellow-500 text-slate-50 hover:bg-yellow-600">Sign In</button>
                                          </div>
                                    </form>
                                    {/* Social login */}
                                    <div className="px-8 py-6 text-center">
                                          <p className="font-medium text-yellow-600">New Here? <Link to='/signup' className="font-bold text-yellow-600 hover:underline">Create a New Account</Link></p>
                                          <p>Or sign in with</p>
                                          <div className="flex items-center justify-center gap-4 pt-5">
                                                <button className="w-8 h-8 rounded-full border-2 border-yellow-700 flex items-center justify-center hover:bg-yellow-600 hover:text-slate-50 transition-all">
                                                      <FaFacebookF />
                                                </button>
                                                <button onClick={handleGoogle} className="w-8 h-8 rounded-full border-2 border-yellow-700 flex items-center justify-center hover:bg-yellow-600 hover:text-slate-50 transition-all">
                                                      <FcGoogle />
                                                </button>
                                                <button onClick={handleGithub} className="w-8 h-8 rounded-full border-2 border-yellow-700 flex items-center justify-center hover:bg-yellow-600 hover:text-slate-50 transition-all">
                                                      <FaGithub />
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default SignIn