import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="div">
        <div>
          <Hero />
        </div>
        <div>
          <Steps />
        </div>
        <div>
          <Faq />
        </div>
        <div>
            <Footer/>
        </div>
      </div>
    </>
  );
}

export default Home;
