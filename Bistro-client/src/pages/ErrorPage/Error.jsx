import { IoMdHome } from "react-icons/io";
import errorImg from "../../assets/404.gif";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const Error = () => {
      useTitle("Page Not Found");
      return (
            <div className="w-full h-screen flex items-center justify-center relative">
                  <img src={errorImg} alt="" />
                  <Link to="/" className="absolute bottom-14 flex items-center gap-1 py-2 px-3 bg-gradient-to-tr from-yellow-800 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 transition-all text-base text-slate-50 font-semibold">
                        <span>Back To Home</span>
                        <IoMdHome size={22} />
                  </Link>
            </div>
      )
}

export default Error