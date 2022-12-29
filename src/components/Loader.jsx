import { AiOutlineLoading } from "react-icons/ai";

function Loader() {
  return (
    <>
      <div id="loading" className=" w-full flex justify-center items-center">
        <div className="my-auto flex justify-center items-center h-[100vh]">
          <AiOutlineLoading />
        </div>
      </div>
    </>
  );
}

export default Loader;
