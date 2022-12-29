import Phone from "../images/phone.png";

function Faq() {
  return (
    <div className="bg-[#006c61] text-white py-20">
      <div className="faq ">
        <div className="heading  text-center font-bold flex justify-center text-7xl md:text-9xl">
          What do <br /> you get?
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div className="left mx-5 md:mx-20">
          <div className="1 my-10 ">
            <div className="heading text-4xl my-2">
              Workout plans made for you
            </div>
            <div className="text-2xl my-2">
              Workout plans made specifically for your goals
            </div>
          </div>
          {/* --------- */}

          <div className="2 my-10">
            <div className="heading text-4xl my-2">Your own meal plan</div>
            <div className="text-2xl my-2">A catered meal plan for you</div>
          </div>

          {/* ------- */}

          <div className="2 my-10">
            <div className="heading text-4xl my-2">
              We track your progress together
            </div>
            <div className="text-2xl my-2">
              We watch and discuss your progress together
            </div>
          </div>
          {/* ------------ */}
          <div className="2 my-10">
            <div className="heading text-4xl my-2">
              Continuous communication
            </div>
            <div className="text-2xl my-2">24/7 contact with me</div>
          </div>
        </div>

        <div className="right mx-5 md:mx-20">
          <img src={Phone} className=" w-[90vw] md:w-[40vw]" alt="" />
        </div>
      </div>
      {/* ------------------------------ */}
      <div className="why my-20 md:my-5">
        <div className="heading font-bold flex justify-center text-7xl md:text-9xl text-center">
          Why choose <br />
          online coaching?
        </div>

        <div className=" flex flex-col md:flex-row justify-around items-center mt-10">
          <div className="left mx-5 md:m-10">
            <img
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className=" w-[85vw] md:w-[40vw] rounded-[3vw]"
            />
          </div>
          <div className="right w-[90vw] my-10 md:w-[40vw] px-5 mr-5 text-xl leading-8">
            I believe that you unlock your true potential when you can push past
            your physical and mental barriers, and I hold the key that you need!
            My style of coaching separates me from others as I have a variety of
            approaches depending on my client, I also take a look at clients
            nutrition patterns, physical health, mental health, habits which
            helps me encourage you to be the best version of you . <br /> <br /> My online
            coaching is an absolute when it comes to reaching your full
            potential within fitness and obtaining your goals. My coaching
            provides you with tailored plans for both your training and food, as
            well as chat access with me, which enables us to talk about all the
            small details to get in the best shape of your life. This provides
            you with optimal support, guidance, motivation and knowledge in your
            pocket so I'm with you every step of the way.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
