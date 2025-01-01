import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
      return (
            <footer>
                  <section className="grid grid-cols-1 md:grid-cols-2">
                        <div className="bg-slate-700 text-slate-50 flex items-center justify-center py-8">
                              <div className="text-center">
                                    <h3 className="text-2xl font-medium mb-3">Contact Us</h3>
                                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                                    <p>+88 123456789</p>
                                    <p>Mon - Fri: 08:00 - 22:00</p>
                                    <p>Sat - Sun: 10:00 - 23:00</p>
                              </div>
                        </div>
                        <div className="bg-slate-900 text-slate-50 flex items-center justify-center py-8">
                              <div className="text-center">
                                    <h3 className="text-2xl font-medium mb-3">Follow Us</h3>
                                    <p>Join us on social media</p>
                                    <div className="flex items-center justify-center gap-4 mt-3">
                                          <Link to='https://www.facebook.com' target="blank"><FaFacebookF /></Link>
                                          <Link to="https://www.instagram.com" target="blank"><FaInstagram /></Link>
                                          <Link to="https://www.x.com" target="blank"><FaXTwitter /></Link>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <p className="bg-slate-950 text-slate-100 py-5 text-center text-sm font-medium">Copyright &copy; {new Date().getFullYear()} Bistro Boss. All rights resevered.</p>
            </footer>
      )
}

export default Footer