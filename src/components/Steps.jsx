import {BsArrowRight } from "react-icons/bs";

function Steps() {
    return ( <>
    <div className="steps flex flex-col sm:flex-col md:flex-col lg:flex-row  justify-around items-center py-20 bg-[#3848a2] text-white">

        {/* ----------1------------ */}
        <div className="step-1 m-10 w-[90vw] md:w-full h-[40vh] md:h-[50vh] flex flex-col justify-center items-center ">
            <div className="top flex justify-start items-center">
                <div className="number rounded-2xl flex justify-center items-center text-center bg-yellow-400 text-6xl mr-8 p-5">
                    1
                </div>
                <div className="heading text-4xl md:text-3xl">
                    Complete the form
                </div>
            </div>
            <div className="bottom text-2xl py-6 leading-10 md:mx-[30%] lg:mx-0">
            If you want to reach your true potential, please complete the form & let’s work!
            </div>
        </div>

        {/* ----------1------------ */}
        <div>
            <BsArrowRight className="text-8xl rotate-90 lg:rotate-0 text-white"/>
        </div>

             {/* ----------2------------ */}
             <div className="step-1 m-10 w-[90vw]  md:w-full h-[40vh] md:h-[50vh] flex flex-col justify-center items-center ">
            <div className="top flex justify-start items-center">
            <div className="number rounded-2xl flex justify-center items-center text-center bg-yellow-400 text-6xl mr-8 p-5">
                    2
                </div>
                <div className="heading text-4xl md:text-3xl">
                Wait to be contacted
                </div>
            </div>
            <div className="bottom text-2xl py-6 leading-10 md:mx-[30%] lg:mx-0">
           We will have a detailed call to discuss your goals & how I will help you to reach them
            </div>
        </div>

        {/* ----------2------------ */}
        <div>
            <BsArrowRight className="text-8xl rotate-90 lg:rotate-0 text-white"/>
        </div>

             {/* ----------3------------ */}
             <div className="step-1 m-10 w-[90vw]  md:w-full h-[40vh] md:h-[50vh] flex flex-col justify-center items-center ">
            <div className="top flex justify-start items-center">
                <div className="number rounded-2xl flex justify-center items-center text-center bg-yellow-400 text-6xl mr-8 p-5">
                    3
                </div>
                <div className="heading text-4xl md:text-3xl">
                You are all set
                </div>
            </div>
            <div className="bottom text-2xl py-6 leading-10 md:mx-[30%] lg:mx-0">
            We will have a detailed call to discuss your goals & how I will help you to reach them
            </div>
        </div>

        {/* ----------3----------- */}
    </div>
    </> );
}

export default Steps;