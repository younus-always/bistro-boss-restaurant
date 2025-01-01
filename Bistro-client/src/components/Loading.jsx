import { CircleLoader } from "react-spinners";

const Loading = () => {
      return (
            <div className="flex items-center justify-center h-screen">
                  <CircleLoader
                        color="#e3af00"
                        cssOverride={{}}
                        loading
                        size={60}
                        speedMultiplier={2}
                  />
            </div>
      )
}

export default Loading