
const Heading = ({ title, subTitle }) => {
      return (
            <div className="w-11/12 max-w-6xl mx-auto h-72 bg-black/50 flex flex-col items-center justify-center text-center text-slate-50 rounded-lg p-10">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">{title}</h1>
                  <p className="uppercase text-sm md:text-base pt-3 font-medium">{subTitle}</p>
            </div>
      )
}

export default Heading