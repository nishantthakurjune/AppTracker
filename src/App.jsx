import image1 from "./images/pattern-bg-desktop.png";
import arrowButton from "./images/icon-arrow.svg";
function App() {
  return (
    <div className="box1 h-screen flex justify-center ">
      <div
        className="box2 h-1/3 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <h1 className="text-white text-center text-2xl font-bold p-5">
          IP Address Tracker
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for any IP Address or domain"
            className="w-1/4 px-4 py-2  rounded-l-xl outline-none "
          />
          <button className="bg-black rounded-r-xl  pt-3 pb-3.5 px-4 py-4 cursor-pointer">
            <img src={arrowButton} alt="" />
          </button>
        </div>
        <div className="box4 flex justify-center absolute left-1/2 -translate-x-1/2 gap-16 bg-white w-1/2 m-8  pr-6 p-4 rounded-lg">
          <div className="text-dark-gray">
            IP ADDRESS
            <div className="text-very-dark-gray text-xl">helo</div>
          </div>
          <img src="" alt="" />
          <div className="text-dark-gray">
            {" "}
            LOCATION
            <div className="text-very-dark-gray text-xl">helo</div>
          </div>
          <div className="text-dark-gray">
            TIMEZONE
            <div className="text-very-dark-gray text-xl">helo</div>
          </div>
          <div className="text-dark-gray">
            ISP
            <div className="text-very-dark-gray text-xl">helo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
