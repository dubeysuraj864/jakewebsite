import {BsArrowRight } from "react-icons/bs";

function Steps() {
    return ( <>
    <div className="steps flex flex-col md:flex-row justify-around items-center my-20">

        {/* ----------1------------ */}
        <div className="step-1 m-10 w-80vw md:w-[20vw]">
            <div className="top flex justify-start items-center">
                <div className="number w-24 h-24 rounded-2xl flex justify-center items-center text-center bg-yellow-400 text-6xl mr-8">
                    1
                </div>
                <div className="heading text-2xl">
                    Complete the form
                </div>
            </div>
            <div className="bottom text-2xl py-6 leading-10">
            If you want to reach your true potential, please complete the form & let’s work!
            </div>
        </div>

        {/* ----------1------------ */}
        <div>
            <BsArrowRight className="text-8xl rotate-90 md:rotate-0"/>
        </div>

             {/* ----------2------------ */}
             <div className="step-1 m-10 w-80vw md:w-[20vw]">
            <div className="top flex justify-start items-center">
                <div className="number w-24 h-24 rounded-2xl flex justify-center items-center text-center bg-yellow-400 text-6xl mr-8">
                    2
                </div>
                <div className="heading text-2xl">
                Wait to be contacted
                </div>
            </div>
            <div className="bottom text-2xl py-6 leading-10">
           We will have a detailed call to discuss your goals & how I will help you to reach them
            </div>
        </div>

        {/* ----------2------------ */}
        <div>
            <BsArrowRight className="text-8xl rotate-90 md:rotate-0"/>
        </div>

             {/* ----------3------------ */}
             <div className="step-1 m-10 w-80vw md:w-[20vw]">
            <div className="top flex justify-start items-center">
                <div className="number w-24 h-24 rounded-2xl flex justify-center items-center text-center bg-yellow-400 text-6xl mr-8">
                    3
                </div>
                <div className="heading text-2xl">
                You are all set
                </div>
            </div>
            <div className="bottom text-2xl py-6 leading-10">
            We will have a detailed call to discuss your goals & how I will help you to reach them
            </div>
        </div>

        {/* ----------3----------- */}
    </div>
    </> );
}

export default Steps;