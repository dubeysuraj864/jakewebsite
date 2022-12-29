function Footer() {
  return (
    <>
      <div className="footer bg-blue-800 text-white flex flex-col items-center text-center py-0">
     <div className="py-10">
     <div className="flex text-2xl justify-center ">
          <div className="Insta m-5">INSTAGRAM</div>
          <div className="tiktok m-5">TIKTOK</div>
        </div>
        <div className="heading text-3xl my-5">
          Terms and Conditions <br />
          Privacy Policy
        </div>
     </div>
        <hr className="border-white border w-full opacity-30" />
        <div className="flex flex-col items-center justify-center py-3">
        Copyright ©2022 Jake Bulter. All rights reserved. Developer @dubeysuraj864
        </div>
      </div>
    </>
  );
}

export default Footer;
