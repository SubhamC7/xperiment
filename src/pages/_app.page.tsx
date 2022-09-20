import AppStore from "AppStore";
import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const publicUrls = ["/login", "/admin-login"];

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  // if (window.netlifyIdentity) {
  //   //@ts-ignore
  //   window.netlifyIdentity.on("init", (user) => {
  //     if (!user) {
  //       //@ts-ignore
  //       window.netlifyIdentity.on("login", () => {
  //         document.location.href = "/admin/";
  //       });
  //     } else {
  //       return <Component {...pageProps} />;
  //     }
  //   });
  // }
  return <Component {...pageProps} />;
}

export default MyApp;
