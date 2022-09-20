import AppStore from "AppStore";
import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const publicUrls = ["/login", "/admin-login"];

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
