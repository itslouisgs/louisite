import NavLinks from "../components/NavLinks";
import Dropdown from "../components/Dropdown";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Menu3FillIcon from "remixicon-react/Menu3FillIcon";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  const [toggle, setToggle] = useState(false);

  const handleWidthChange = () => setIsMobile(window.innerWidth < 480);

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange);
    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  return (
    <nav className="container flex flex-wrap items-center justify-between py-5">
      <Link to="/" className="title">
        <p className="pb-0 text-2xl font-light">
          LOUI<span className="font-bold">SITE</span>
        </p>
      </Link>
      <div className="flex items-center gap-2 xs:gap-8">
        {!isMobile && <NavLinks />}
        {isMobile && (
          <div className="relative">
            <button
              className="cursor-pointer rounded-lg bg-slate-100/20 p-2 shadow-md backdrop-filter hover:bg-slate-100/30 dark:bg-slate-200/10 dark:hover:bg-slate-200/20"
              onClick={() => setToggle(!toggle)}
            >
              <Menu3FillIcon />
            </button>
            {toggle && <Dropdown />}
          </div>
        )}

        <ThemeSwitcher />
      </div>
    </nav>
  );
}