function Footer() {
  return (
    <>
      <div className="footer bg-[#011141] text-white flex flex-col items-center text-center py-0">
        <div className="py-10">
          <div className="flex text-2xl justify-center ">
            <div className="Insta m-5"> <a href="https://www.instagram.com/jake_butler2nd_account_/" target="_blank" rel="noopener noreferrer">Instagram</a></div>
            <div className="Insta m-5"> <a href="https://www.instagram.com/jake_butler2nd_account_/" target="_blank" rel="noopener noreferrer">SnapChat</a></div>
          </div>
          <div className="heading text-3xl my-5">
            Terms and Conditions <br />
            Privacy Policy
          </div>
        </div>
        <hr className="border-white border w-full opacity-30" />
        <div className="flex flex-col items-center justify-center py-3">
          Copyright ©2022 Jake Bulter. All rights reserved. Developer
        </div>
      </div>
    </>
  );
}

export default Footer;
