import Tilt from 'react-parallax-tilt';
import { Parallax } from "react-parallax";

const Cover = ({ image, title }) => {
      return (
            <>
                  <Parallax
                        blur={{ min: -8, max: 10 }}
                        bgImage={image}
                        bgImageAlt="title photo"
                        strength={-200}
                  >
                        <div
                              className="hero h-[580px]">
                              <Tilt glareEnable={true} glareMaxOpacity={0.3} glareColor="#003049" glarePosition="bottom" glareBorderRadius="0px"
                                    className="hero-content max-w-6xl text-neutral-content w-11/12 mx-auto text-center  bg-black/65">
                                    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-72">
                                          <h1 className="mb-3 text-4xl font-bold">{title}</h1>
                                          <p className="">
                                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                                          </p>
                                    </div>

                              </Tilt>
                        </div>
                  </Parallax>
            </>
      )
}

export default Cover