import { FaEye, FaFacebookF, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import { TiWarningOutline } from "react-icons/ti";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";
import { RiEyeCloseFill } from "react-icons/ri";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
      useTitle("Sign Up");
      const { signUp, updateUserProfile, googleLogin, githubLogin, logOut, loading } = useContext(AuthContext);
      const axiosPublic = useAxiosPublic();
      const [showPassword, setShowPassword] = useState(false);
      const navigate = useNavigate();
      const location = useLocation();
      const { register, handleSubmit, reset, formState: { errors }, } = useForm();

      // Signup with email password
      const onSubmit = (data) => {
            signUp(data.email, data.password)
                  .then(res => {
                        const userInfo = res.user;
                        updateUserProfile(data.name, userInfo.photoURL)
                              .then(() => {
                                    // send user information to the database
                                    const userDetails = {
                                          name: data.name,
                                          email: data.email,
                                    };
                                    axiosPublic.post('/users', userDetails)
                                          .then(res => {
                                                reset();
                                                if (res.data.insertedId) {
                                                      // signUp success message popup
                                                      toast.success("Registration successful! Log in now to access your account.");
                                                      setTimeout(() => {
                                                            logOut();
                                                            navigate('/signIn')
                                                      }, 1500);
                                                }
                                          })
                              })
                              .catch(error => console.log(error));
                  })
                  .catch(error => console.log(error));
      };


      // Continue with Google
      const handleGoogle = () => {
            googleLogin()
                  .then(result => {
                        const userInfo = result.user;
                        // send user to the database
                        const userDetails = {
                              name: userInfo.displayName,
                              email: userInfo.email
                        }
                        axiosPublic.post('/users', userDetails)
                              .then(res => {
                                    toast.success('Google Sign Up Successfull');
                                    setTimeout(() => {
                                          navigate(location?.state ? location.state : '/')
                                    }, 1500);
                              })
                  }).catch(error => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(error)
                        console.log(errorCode)
                        console.log(errorMessage)
                  })
      };

      // Continue with Github
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
                  <div className="w-11/12 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row lg:items-center bg-transparent border-2 border-b-8 border-r-8 border-gray-400/60">
                        <div className="lg:flex-1">
                              <div className="card w-full md:w-9/12 mx-auto">
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                                          <h2 className="text-center font-bold text-xl">Sign Up</h2>
                                          {/* name */}
                                          <div className="form-control">
                                                <label htmlFor="name" className="label">
                                                      <span className="label-text">Name*</span>
                                                </label>
                                                <input type="text" id="name" name="name"
                                                      {...register("name", { required: true })} placeholder="Enter your name" className="input input-bordered" />
                                                {errors.name && <small className="text-red-600 font-bold pt-1 flex items-center gap-2 pl-2"><TiWarningOutline />name is required</small>}
                                          </div>
                                          {/* email */}
                                          <div className="form-control">
                                                <label htmlFor="email" className="label">
                                                      <span className="label-text">Email*</span>
                                                </label>
                                                <input type="email" id="email" name="email"
                                                      {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered" />
                                                {errors.email && <small className="text-red-600 font-bold pt-1 flex items-center gap-2 pl-2"><TiWarningOutline />email is required</small>}
                                          </div>
                                          {/* password */}
                                          <div className="form-control relative">
                                                <label htmlFor="password" className="label">
                                                      <span className="label-text">Password*</span>
                                                </label>
                                                <input type={`${showPassword ? 'text' : 'password'}`} s id="password" name="password"
                                                      {...register("password", {
                                                            required: true,
                                                            minLength: 6,
                                                            maxLength: 14,
                                                            pattern: /(?=.*[A-Z])(?=.*[!@#$ &*])(?=.*[0-9])(?=.*[a-z])/
                                                      })} placeholder="Enter your password" className="input input-bordered" />
                                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[52px] ">{showPassword ? <FaEye />
                                                      : <RiEyeCloseFill />}</button>

                                                {/* Errors Message */}
                                                {errors.password?.type === 'required' && <small className="text-red-600 font-bold pt-1 flex items-center gap-2 pl-2"><TiWarningOutline />password is required</small>}
                                                {errors.password?.type === 'minLength' && <small className="text-red-600 font-bold pt-1 flex items-center gap-2 pl-2"><TiWarningOutline />password must be 6 characters</small>}
                                                {errors.password?.type === 'maxLength' && <small className="text-red-600 font-bold pt-1 flex items-center gap-2 pl-2"><TiWarningOutline />password less than 14 characters</small>}
                                                {errors.password?.type === 'pattern' && <small className="text-red-600 font-bold pt-1 flex items-center gap-2 pl-2"><TiWarningOutline size={18} />password must have 1 uppercase, 1 lowercase, 1 number and 1 special character.</small>}
                                          </div>
                                          {/* Sign up btn */}
                                          <div className="form-control mt-4">
                                                <button type="submit" className="btn bg-yellow-500 text-slate-50 hover:bg-yellow-600">{
                                                      loading ? <TbFidgetSpinner size={18} className="animate-spin" />
                                                            : 'Sign Up'}</button>
                                          </div>
                                    </form>
                                    {/* Social Sign Up */}
                                    <div className="px-8 py-6 text-center">
                                          <p className="font-medium text-yellow-600">Already Registered? <Link to='/signin' className="font-bold text-yellow-600 hover:underline">Go to log in</Link></p>
                                          <p>Or sign up with</p>
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
                        <div className="lg:flex-1">
                              <img src={loginImg} alt="" className="w-10/12 mx-auto" />
                        </div>
                  </div>
            </section>
      )
}

export default SignUp