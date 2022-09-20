import styles from "assets/styles/underline.module.css";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import appStore from "AppStore";
import LogoutIcon from "assets/svg/LogoutIcon";

import logoImg from "assets/images/zemidi.png";

import UseOutsideClick from "hooks/useOutsideClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "config/icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { setDefaultHeader, setTransparentHeader } from "AppActions";
import Router, { useRouter } from "next/router";

type Props = {
  referrslHeader?: boolean;
  detailsHeader?: boolean;
};

const Header = ({ referrslHeader = false, detailsHeader = false }: Props) => {
  const [toggleNav, setToggleNav] = appStore("toggleNav");
  const [selectedMenu, setSelectedMenu] = appStore("selectedMenu");
  const [user, setUser] = appStore("user");
  const [referralUser, setReferralUser] = appStore("referralUser");
  const [toggleHeaderClass, setToggleHeaderClass] =
    appStore("toggleHeaderClass");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let path = router.pathname;
    let menu = path.split("/").pop();
    setSelectedMenu(menu);
  }, [router]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY < 50) {
      setTransparentHeader(setToggleHeaderClass, toggleHeaderClass);
    } else {
      setDefaultHeader(setToggleHeaderClass, toggleHeaderClass);
    }
  };

  useEffect(() => {
    if (!toggleHeaderClass.isTransparentHeader) {
      setTransparentHeader(setToggleHeaderClass, toggleHeaderClass);
    }
  }, []);

  // useEffect(() => {
  //   if (Object.keys(user).length) {
  //     setIsLoggedIn(true);
  //   }
  // }, [user]);

  const handleClickOutside = () => {
    setToggleNav(false);
  };
  const headerRef: any = useRef(null);
  const navRef: any = UseOutsideClick(handleClickOutside);

  const LogoSection = () => (
    <Link href={""}>
      <a
        // onClick={() => {
        //   setSelectedMenu("Hospitals");
        // }}
        className="w-fit h-full flex items-center justify-start hover:cursor-pointer"
      >
        <div
          className={`mr-1 ${styles.headerLogo} ${toggleHeaderClass.logo}`}
        ></div>
        {/* <p
          className={`font-bold lg:pb-1 text-4xl ${toggleHeaderClass.logoText}`}
        >
          Zemidi
        </p> */}
      </a>
    </Link>
  );
  const NavSection = () =>
    Object.keys(user).length ? (
      <>
        <Link href="/">
          <a
            // onClick={() => setSelectedMenu("bookings")}
            className={
              selectedMenu === "Home"
                ? `text-primary py-1 text-m font-semibold hover:cursor-pointer ${styles.underline} ${styles.underlineColorT} ${toggleHeaderClass.text}`
                : `py-1 text-m font-semibold hover:cursor-pointer ${styles.underline} ${styles.underlineColorN} ${toggleHeaderClass.text}`
            }
          >
            Referrals Users
          </a>
        </Link>
      </>
    ) : null;

  return (
    <>
      <div
        ref={headerRef}
        className={`w-full flex justify-between fixed z-40 ${toggleHeaderClass.bg} `}
      >
        <div className="w-full h-full flex items-center justify-between space-x-7 xl:space-x-10">
          <LogoSection />

          <>
            {/* <div className="w-fit h-full hidden 2xl:flex justify-start items-center tracking-tighter xl:space-x-4 2xl:space-x-5">
              <NavSection />
            </div> */}
            {referrslHeader ? (
              <div
                onClick={() => {
                  setUser({});
                  Router.push("/admin-login");
                }}
                className="flex items-center"
              >
                <LogoutIcon
                  style={
                    "h-10 w-10 text-primary cursor-pointer hover:text-primaryDark active:scale-95"
                  }
                />
              </div>
            ) : null}
            {detailsHeader ? (
              <div
                onClick={() => {
                  setReferralUser({});
                  Router.push("/login");
                }}
                className="flex items-center"
              >
                <LogoutIcon
                  style={
                    "h-10 w-10 text-primary cursor-pointer hover:text-primaryDark active:scale-95"
                  }
                />
              </div>
            ) : null}
          </>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={
          toggleNav
            ? "flex bg-transparentD justify-center items-center right-0 w-screen h-screen 2xl:h-0 fixed z-50 transition-all duration-500 ease-in-out"
            : "-z-10 transition-all duration-500 ease-in-out"
        }
      >
        <div
          ref={navRef}
          className={
            toggleNav
              ? "fixed bg-white border border-solid border-slate-100 rounded-l-xl z-50 top-0 right-0 p-4 pt-2 space-y-4 w-4/6 sm:w-1/2 h-screen flex flex-col justify-start 2xl:hidden transition-all duration-500"
              : "fixed bg-gray-500 border border-solid border-slate-100 rounded-l-xl z-50 top-0 -right-full p-4 pt-2 space-y-4 w-4/6 sm:w-1/2 h-screen flex flex-col justify-start 2xl:hidden transition-all duration-500"
          }
        >
          <div className="w-full h-8 mb-1 md:h-12 grid justify-items-end ">
            <FontAwesomeIcon
              icon={icons.faTimes as IconProp}
              className={
                "h-10 w-10 active:bg-primary hover:cursor-pointer text-black duration-200 rounded-full p-2"
              }
              onClick={() => setToggleNav(!toggleNav)}
            />
          </div>

          <Link href="/">
            <a
              className={
                selectedMenu === "home"
                  ? "w-full text-xl font-medium text-primary cursor-pointer active:scale-95"
                  : "w-full text-xl font-medium active:text-primary cursor-pointer active:scale-95"
              }
              onClick={() => {
                setToggleNav(!toggleNav);
              }}
            >
              Referrals Users
            </a>
          </Link>

          {/* <div className="w-full flex items-center justify-center pt-20">
            <button
              onClick={() => {
                setUser({});
                Router.push("/");
                setToggleNav(!toggleNav);
              }}
              className="w-40 h-12 flex items-center justify-center rounded-lg text-lg font-medium text-primary border-2 border-primary hover:cursor-pointer hover:bg-primary hover:text-black active:scale-95 transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
