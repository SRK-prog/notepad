import { useState } from "react";

function Header({ showStaredHandler }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleStared = () => {
    setShowMenu(false);
    showStaredHandler();
  };

  return (
    <div className="bg-[#6EAF8B] h-12 flex items-center px-5 justify-between w-full">
      <div className="text-white">Book</div>
      <div className="text-white relative">
        <i
          onClick={() => setShowMenu(!showMenu)}
          className="fa-solid fa-bars cursor-pointer"
        ></i>
        {showMenu && (
          <div className="absolute top-6 right-0 bg-white rounded py-1 px-0.5 shadow-md shadow-slate-500 cursor-pointer ">
            <div
              onClick={handleStared}
              className="hover:bg-slate-400 text-slate-700 text-sm  px-1.5 rounded hover:text-white"
            >
              Star
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
