import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgGym } from "react-icons/cg";

function Hero() {
  return (
    <>
      <div className="hero w-full h-[90vh] md:h-[98vh] relative text-white flex flex-col justify-center items-center md:items-center">
        <img
          className=" w-full h-[90vh] md:h-[98vh] object-cover object-top absolute left-0 top-0 -z-10 brightness-[50%] mb-5"
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
  

        <div className="name font-bold text-7xl md:text-9xl text-center flex flex-col justify-center items-center text-[#e5ad06] clip-text ">
          <div>
            <CgGym className=" animate-bounce" />
          </div>
          <div>JWB FITNESS</div>
        </div>
        <div className="text-3xl py-5">Online Coaching</div>
        <div className="answers flex flex-col md:flex-row justify-center items-center text-xl text-white">
          <div className="1 mt-10 mx-10 bg-[#ed2846]  md:w-60 rounded-full cursor-pointer w-44 h-12 md:h-16 flex justify-center items-center text-center  opacity-100 hover:opacity-80">
            <Link to="/plans">Plans</Link>
          </div>
          <div className="2 mt-10 mx-10 bg-[#ed2846]  md:w-60 rounded-full cursor-pointer w-44 h-12 md:h-16 flex justify-center items-center text-center  opacity-100 hover:opacity-80">
            <Link to="/coaching"> Online Coaching </Link>
          </div>
        </div>
        <div className="next mt-10 ">
          <Link to="/coaching">
            {" "}
            <button className="next flex items-center bg-white px-12 py-4 text-black rounded-full opacity-50 hover:opacity-100 transition-all">
              <span className="mr-2 text-2xl">Next</span>
              <BsArrowRight className="font-bold text-3xl" />{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="quote bg-black  font-bold flex justify-center items-center  md:w-full h-[20vh] px-4 text-white text-3xl md:text-6xl text-center py-5 md:py-[15vh]">
        Find your goal...focus...and just do it!
      </div>
    </>
  );
}

export default Hero;
