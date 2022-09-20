import axios from "axios";
import { firebaseNotification } from "services/firebase";
import { svgIcons } from "widgets";

export const sendNotification = (title, body) => {
  var key =
    "AAAAwcQlNtg:APA91bHb8nizDRA6B0DgGprqXgCMTIG42VmJbDzFAC1Zimq2PTlzwYunE5t5VXBS001AkEOmIdCGGxBjLiNYuSVCjIRwfHMWXY_mpuozzeRHSjU4z7jqX8H0Ug25I_vScfnrr6M7J7E8";
  var to =
    "dgbeCLEJP9NSVye3YWFEGc:APA91bFQyS9h3fqkGpP1gjAQ_EnEAssJmBGv8WoKx67Lm_IGu3V27KtIm0IM3Y-PZOD6U456hB9OaEiVMnYc8GJT_npXeusC_3WRu_eYsrp2rZ7AaeKOfRyAER96OEJfxXDIxHwHC8fO";

  var notification = {
    title: title,
    body: body,
    icon: svgIcons.logo,
    // click_action: "http://localhost:8100",
  };

  axios({
    method: "POST",
    url: "https://fcm.googleapis.com/fcm/send",
    headers: {
      Authorization: "key=" + key,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      notification: notification,
      to: to,
    }),
  })
    .then((response) => {
      //   firebaseNotification();
      // console.log("response", response);
    })
    .catch((error) => {
      console.error("error", error);
    });
};
