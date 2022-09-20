import Api from "services/Api";
import appStore from "AppStore";
import { removeAllData } from "services/LocalDB";
import Router from "next/router";
import axios from "axios";
const { getState, setState } = appStore;
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export const setTransparentHeader = (
  setToggleHeaderClass,
  toggleHeaderClass
) => {
  toggleHeaderClass.bg =
    "bg-white h-20 lg:h-24 shadow-sm transition-all duration-200 ease-out px-4 md:px-12 lg:px-20 xl:px-28";
  toggleHeaderClass.logo =
    "w-20 h-5 md:w-32 md:h-12 transition-all duration-300 ease-out";
  toggleHeaderClass.logoText = "text-primary whitespace-nowrap";
  toggleHeaderClass.text = "whitespace-nowrap transition-all duration-300";
  toggleHeaderClass.isTransparentHeader = true;
  setToggleHeaderClass({ ...toggleHeaderClass });
};

export const setDefaultHeader = (setToggleHeaderClass, toggleHeaderClass) => {
  toggleHeaderClass.bg =
    "bg-white bg-opacity-90 h-16 lg:h-20 shadow-md transition-all ease-in px-4 md:px-12 lg:px-20 xl:px-24";
  toggleHeaderClass.logo =
    "w-16 h-4 md:w-28 md:h-10 transition-all duration-300 ease-out";
  toggleHeaderClass.logoText = "text-primary whitespace-nowrap";
  toggleHeaderClass.text = "whitespace-nowrap transition-all duration-300";
  toggleHeaderClass.isTransparentHeader = false;
  setToggleHeaderClass({ ...toggleHeaderClass });
};

const generateRecaptcha = (captchaClass, authentication) => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    captchaClass,
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
    },
    authentication
  );
};

export const requestOtp = (e, phone, captchaClass, authentication, Toast) => {
  e.preventDefault();
  // if (fields.phone.length == 10) {
  generateRecaptcha(captchaClass, authentication);
  let otpVerifier = window.recaptchaVerifier;
  let number = "+91".concat(phone);
  signInWithPhoneNumber(authentication, number, otpVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      Toast("success", "OTP has been sent to your number.");
    })
    .catch((error) => {
      // console.log("error", error);
      Toast("error", "Something went wrong!");
    });
  // }
};

export const verifyOtp = (e, otpNo, setEnabled, Toast) => {
  e.preventDefault();
  let otp = otpNo;
  // console.log(typeof otp);
  if (otp.length == 6) {
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        // console.log("verified");
        Toast("success", "OTP verification is Successful.");
        setEnabled(true);
      })
      .catch((error) => {
        // console.log("error", error);
        Toast("error", "Something went wrong!");
      });
  }
};

export const logOut = (setUser, setCartItems, handleClickOutside) => {
  setUser({});
  setCartItems({});
  removeAllData();
  handleClickOutside();
  Router.push("/log-in");
};
