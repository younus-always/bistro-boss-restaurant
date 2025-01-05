import { IoIosPaperPlane } from "react-icons/io";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContactForm = () => {

      const handleMessage = e => {
            e.preventDefault();
      }

      return (
            <section className="w-11/12 max-w-7xl mx-auto pb-10">
                  <SectionTitle subHeading={"Sent Us a Message"} heading={"contact form"} />

                  <div className="bg-gray-200 p-7 md:p-10 lg:p-16 mb-8">
                        <form onSubmit={handleMessage} className="space-y-2">
                              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                                    <div className="form-control">
                                          <label htmlFor="name" className="label">
                                                <span className="label-text">Name*</span>
                                          </label>
                                          <input type="text" id="name" name="name" placeholder="Enter your name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label htmlFor="email" className="label">
                                                <span className="label-text">Email*</span>
                                          </label>
                                          <input type="email" id="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                                    </div>
                              </div>
                              <div className="form-control">
                                    <label htmlFor="phone" className="label">
                                          <span className="label-text">Phone*</span>
                                    </label>
                                    <input type="number" id="phone" name="phone" placeholder="Enter your phone number" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label htmlFor="message" className="label">
                                          <span className="label-text">Message*</span>
                                    </label>
                                    <textarea type="text" id="message" name="message" placeholder="Write your message..." className="p-4 rounded-lg outline-none h-40 max-h-52" required></textarea>
                              </div>
                              <div className="flex items-center justify-center pt-6">
                                    <button type="submit" className="flex items-center gap-1 py-2 px-3 bg-gradient-to-r from-yellow-800 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-800 transition-all  text-sm text-slate-50 font-bold">
                                          <span>Send Message</span>
                                          <IoIosPaperPlane className="mt-1" />
                                    </button>
                              </div>
                        </form>
                  </div>
            </section>
      )
}

export default ContactForm