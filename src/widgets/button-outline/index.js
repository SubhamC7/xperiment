import styles from "assets/styles/underline.module.css";
import React from "react";

const ButtonOutline = ({
  title,
  onClick,
  disabled = false,
  loading,
  style = "",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`xl:hover:bg-theme-blue whitespace-nowrap transition-all duration-500 ease-in-out text-theme-blue font-semibold hover:cursor-pointer xl:hover:text-white py-2 px-4 border border-theme-blue xl:hover:border-transparent active:scale-90 rounded-md ${style}`}
    >
      {loading ? <div className={`${styles.btnLoadingSpinner}`}></div> : title}
    </button>
  );
};

export default ButtonOutline;
