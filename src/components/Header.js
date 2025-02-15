import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
const dispatch = useDispatch()

  function handleToggle(){
     dispatch(toggleMenu())
  }

  return (
    <>
     <div className="h-14 w-full shadow-lg  flex items-center" >
       <div >
        <img onClick={handleToggle}
         className="h-8 w-8 m-2 hover:cursor-pointer hover:bg-gray-200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="Hamburger menu" />
       </div>
       <div >
        <img className="h-8 w-36 hover:cursor-pointer  hover:bg-gray-400" src="https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg" alt="youtube logo" />
       </div>
       <div className="flex h-8 ml-64">
          <input dir="ltr" className="w-[515px] p-3 rounded-l-full border border-black" type="text" placeholder="Search" />
          <button dir="rtl" className="border border-black rounded-r-full bg-gray-100"><img className="h-8 p-2 w-10" src="https://www.svgrepo.com/show/7109/search.svg" alt="search icon" /></button>
       </div>
       <div className="ml-96 hover:cursor-pointer  hover:bg-gray-200">
       <img className="h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user icon" />
        </div>
     </div>
    </>
  );
};

export default Header;
