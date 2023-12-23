import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
