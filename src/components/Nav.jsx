import useDarkMode from "../useDarkMode";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

const Nav = () => {
  const [darkModeEnabled, toggle] = useDarkMode();
  return (
    <div className="flex justify-end mb-8">
      <button className="text-gray-900 dark:text-gray-300" onClick={toggle}>
        {darkModeEnabled ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};
export default Nav;
