import AppStore from "AppStore";
import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Admin from "./admin/index.page";
import Home from "./home/index.page";
import Login from "./login/index.page";
import AdminLogin from "./admin-login/index.page";

const publicUrls = ["/login", "/admin-login"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user] = AppStore("user");
  const [referralUser] = AppStore("referralUser");
  const hasUser = Object.keys(user).length;
  const hasReferralUser = Object.keys(referralUser).length;
  const isPublic = publicUrls.indexOf(router.pathname) > -1;

  // if (router.pathname.includes("/home")) {
  //   if (hasReferralUser && isPublic) {
  //     return <Home />;
  //   } else if (hasReferralUser && !isPublic) {
  //     return <Login />;
  //   }
  // } else if (router.pathname.includes("/admin")) {
  //   if (hasUser && isPublic) {
  //     return <Admin />;
  //   } else {
  //     return <AdminLogin />;
  //   }
  // }
  // else {
  //   return <Component {...pageProps} />;
  // }

  // if (hasReferralUser && isPublic && !hasUser) {
  //   return <Home />;
  // } else if (!hasUser && !isPublic && !hasReferralUser) {
  //   return <AdminLogin />;
  // } else if (hasUser && isPublic && !hasReferralUser) {
  //   return <Admin />;
  // } else if (!hasReferralUser && !isPublic && !hasUser) {
  //   return <Login />;
  // } else {
  //   return <Component {...pageProps} />;
  // }

  return <Component {...pageProps} />;
}

export default MyApp;
