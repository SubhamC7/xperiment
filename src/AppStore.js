import StoreService from "services/StoreService";

const state = {
  paddingClass: "px-4 md:px-12 lg:px-20 xl:px-36",
  toggleHeaderClass: {
    bg: "bg-white h-20 lg:h-24 shadow-sm transition-all duration-200 ease-out px-4 md:px-12 lg:px-20 xl:px-28",
    logo: "w-20 h-5 md:w-32 md:h-12 transition-all duration-300 ease-out",
    logoText: "text-primary whitespace-nowrap",
    text: "whitespace-nowrap transition-all duration-300",
    isTransparentHeader: true,
  },
  selectedMenu: "Hospitals",
  loading: false,
  toggleNav: false,
  toast: "",
  toggleOptionMenu: false,

  user: {},
  referralUser: {},
};

export default StoreService(state);
