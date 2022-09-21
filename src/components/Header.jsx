import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

function Header({ showStaredHandler }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleStared = () => {
    setShowMenu(false);
    showStaredHandler();
  };

  const logoutHandler = () => {
    localStorage.removeItem("balance-notes");
    navigate("/login");
  };

  return (
    <div className="bg-[#6EAF8B] h-12 flex items-center px-5 justify-between w-full">
      <div className="text-white">Book</div>
      <div className="text-white relative">
        {!showMenu && (
          <i
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(true);
            }}
            className="fa-solid fa-bars cursor-pointer"
          ></i>
        )}
        {showMenu && (
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowMenu(false);
            }}
          >
            <i
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(false);
              }}
              className="fa-solid fa-bars cursor-pointer"
            ></i>
            <div className="absolute top-6 right-0 bg-white rounded-sm py-1 px-0.5 shadow-md shadow-slate-500 cursor-pointer ">
              <div
                onClick={handleStared}
                className="hover:bg-slate-400 text-slate-700 text-sm  px-1.5 rounded-sm hover:text-white mb-1"
              >
                star
              </div>
              <div
                className="hover:bg-slate-400 text-slate-700 text-sm  px-1.5 rounded-sm hover:text-white "
                onClick={logoutHandler}
              >
                logout
              </div>
            </div>
          </OutsideClickHandler>
        )}
      </div>
    </div>
  );
}

export default Header;
