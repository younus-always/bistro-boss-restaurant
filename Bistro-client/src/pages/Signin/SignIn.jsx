import { FcGoogle } from "react-icons/fc";
import loginImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const SignIn = () => {
      useTitle("Login");

      const handleLogin = e => {
            e.preventDefault();
            const form = new FormData(e.target);
            const email = form.get('email');
            const password = form.get('password');
            const captcha = form.get("captcha");
            const recaptcha = form.get('recaptcha');
            const userInfo = { email, password, captcha, recaptcha };
            console.log(userInfo)
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
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name="email" placeholder="Type here" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text"></span>
                                                </label>
                                                <input type="text" name="captcha" placeholder="I3Yj2gT" className="input input-bordered" required />
                                                <label className="label">
                                                      <Link className="font-semibold text-blue-700">Reload Captcha</Link>
                                                </label>
                                          </div>
                                          <div className="form-control">
                                                <input type="text" name="recaptcha" placeholder="Type here" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn bg-yellow-600 text-slate-50 hover:bg-yellow-700">Sign In</button>
                                          </div>
                                    </form>
                                    <div className="px-8 py-6 text-center">
                                          <p className="font-medium text-yellow-600">New Here? <Link to='/signup' className="font-bold text-yellow-600 hover:underline">Create a New Account</Link></p>
                                          <p>Or sign in with</p>
                                          <div className="flex items-center justify-center gap-4 pt-5">
                                                <button className="w-8 h-8 rounded-full border-2 border-yellow-700 flex items-center justify-center hover:bg-yellow-600 hover:text-slate-50 transition-all">
                                                      <FaFacebookF />
                                                </button>
                                                <button className="w-8 h-8 rounded-full border-2 border-yellow-700 flex items-center justify-center hover:bg-yellow-600 hover:text-slate-50 transition-all">
                                                      <FcGoogle />
                                                </button>
                                                <button className="w-8 h-8 rounded-full border-2 border-yellow-700 flex items-center justify-center hover:bg-yellow-600 hover:text-slate-50 transition-all">
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