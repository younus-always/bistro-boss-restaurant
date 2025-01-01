
const SectionTitle = ({ heading, subHeading }) => {
      return (
            <div className="max-w-sm mx-auto text-center my-5">
                  <h4 className="text-yellow-500 font-medium mb-3">{subHeading}</h4>
                  <h1 className="text-2xl md:text-3xl font-semibold border-y-4 uppercase py-3">{heading}</h1>
            </div>
      )
}

export default SectionTitle