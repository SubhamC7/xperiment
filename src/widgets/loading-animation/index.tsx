import React from "react";

import loader from "assets/images/loader-hearbeat.gif";

type Props = {
  loading: boolean;
};

const LoadingAnimation = ({ loading }: Props) => {
  return loading ? (
    <div className="h-screen w-full bg-transparentD flex justify-center items-center top-0 fixed z-50">
      <img
        src={loader.src}
        className="object-cover h-32 overflow-hidden z-50 pointer-events-none"
      />
    </div>
  ) : null;
};

export default LoadingAnimation;
