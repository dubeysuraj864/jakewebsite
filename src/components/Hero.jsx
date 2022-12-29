import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Questions from "./Questions";


function Hero() {
  return (
    <>
    
      <div className="hero w-full h-[90vh] relative text-white flex flex-col justify-center items-center md:items-center">
        <img
          className=" w-full h-[90vh] object-cover object-top absolute left-0 top-0 -z-10 brightness-50"
          src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />

        <div className="name font-bold text-8xl text-center">Jake Butler</div>
        <div className="text-3xl py-5">Online Coaching</div>
        <div className="answers flex flex-col md:flex-row justify-center items-center text-xl text-white">
          <div className="1 mt-10 mx-10 bg-[#ed2846]  w-60 rounded-full cursor-pointer h-10 flex justify-center items-center text-center  opacity-100 hover:opacity-80">
            <Link to="/plans" >Plans</Link>
          </div>
          <div className="2 mt-10 mx-10 bg-[#ed2846]  w-60 rounded-full cursor-pointer h-10 flex justify-center items-center text-center opacity-100 hover:opacity-80">
         <Link to="/coaching" >     Online Coaching   </Link>
          </div>
        </div>
        <div className="next mt-10 ">
         
          <Link to="/coaching" >     <button className="next flex items-center bg-white px-8 py-2 text-black rounded-full opacity-50 hover:opacity-100 transition-all">
            <span className="mr-2 text-2xl">Next</span>
            <BsArrowRight className="font-bold text-3xl" />{" "}
          </button>  </Link>
        </div>
      </div>
      <div className="quote bg-[#ed2846]  font-bold flex justify-center items-center  md:w-full h-[30vh] text-white text-6xl md:text-9xl text-center py-10 md:py-[30vh]">
        Find your goal...focus...and just do it!
      </div>
    </>
  );
}

export default Hero;
