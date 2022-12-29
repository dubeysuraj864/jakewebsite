import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Plans() {
 
  
  return (
    <>
    
     
      <div className="plans overflow-hidden">
        <div className="top bg-[#e54f3f] text-white py-5 md:py-10">
          <div
            data-aos="flip-down"
            className="heading py-10 text-center font-bold flex justify-center text-8xl md:text-9xl"
          >
            Plans
          </div>
          <div className="para  text-center flex justify-center">
            <p
              data-aos="fade-right"
              className="md:w-[60vw] font-medium text-md mx-6 md:mx-0 md:text-xl"
            >
              Thanks for showing an interest in my online coaching. Below you
              will find a breakdown of what you will get with my Online Coaching
              programme, and you can sign up for the option that best suits you!
            </p>
          </div>
        </div>
        <div className="middle">
          <div className="cards flex flex-col md:flex-row items-center justify-center my-10 ">
            <div
              data-aos="fade-right"
              className="card1 md:w-[30%] md:h-max-[60vh] p-4 text-center flex flex-col items-center justify-center border-gray-400 border-2 rounded-lg m-4"
            >
              <div className="head text-4xl font-bold">Workout Plan</div>
              <div className="price text-gray-600">
                <span className="font-bold text-black">£59/</span> month
              </div>
              <div className="para my-3 text-md text-gray-600">
                You receive a complete workout plan with exercises for the
                different days of the week. Fully tailored for your goal, body,
                experience, injuries and much more.
              </div>
              <div className="btn w-full">
                <a onClick={() => {window.location.href="/workout_plan"}}><button className=" w-[76vw] md:w-[16vw] mx-2 py-2 bg-[#e54f3f] text-white rounded-lg">
                  Get Started!
                </button></a>
                
              </div>
            </div>
            {/* ------------------------ */}

            <div
              data-aos="zoom-in"
              className="card1 w-[90vw] md:w-[30%] md:h-max-[60vh] p-4 text-center flex flex-col items-center justify-center border-gray-400 border-2 rounded-lg m-4"
            >
              <div className="head text-4xl font-bold">Nutrition Plan</div>
              <div className="price text-gray-600">
                <span className="font-bold text-black">£59/</span> month
              </div>
              <div className="para my-3 text-md text-gray-600">
                You receive a flexible and varied meal plan. Your diet
                preferences, allergies and a wide array of other factors are
                taken into account, so you have the best chances of reaching
                your goal.
              </div>
              <div className="btn w-full">
            
                <a onClick={() => {window.location.href="/nutrition_plan"}}><button className=" w-[76vw] md:w-[16vw] mx-2 py-2 bg-[#e54f3f] text-white rounded-lg">
                  Get Started!
                </button></a>
              </div>
            </div>

            {/* ------------------------- */}
            <div
              data-aos="fade-left"
              className="card1 w-[90vw] md:w-[30%] md:h-max-[60vh] p-4 text-center flex flex-col items-center justify-center border-gray-400 border-2 rounded-lg m-4"
            >
              <div className="head text-4xl font-bold">
                Workout & Nutrition Plan
              </div>
              <div className="price text-gray-600">
                <span className="font-bold text-black">£79/</span> month
              </div>
              <div className="para my-3 text-md text-gray-600">
                You receive both a personalised workout and nutrition plan - all
                tailored uniquely for you, your body, goal, preferences and
                everyday life.
              </div>
              <div className="btn w-full">
           
                <a onClick={() => {window.location.href="/workout_nutrition_plan"}}><button className=" w-[76vw] md:w-[16vw] mx-2 py-2 bg-[#e54f3f] text-white rounded-lg">
                  Get Started!
                </button></a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Plans;
