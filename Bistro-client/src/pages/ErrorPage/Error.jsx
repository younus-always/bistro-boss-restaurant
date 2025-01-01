import errorImg from "../../assets/404.gif"
import useTitle from "../../hooks/useTitle"
const Error = () => {
      useTitle("Page Not Found");
      return (
            <div className="w-full h-screen flex items-center justify-center">
                  <img src={errorImg} alt="" />
            </div>
      )
}

export default Error