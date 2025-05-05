import { Platform } from "react-native";
import Toast from "react-native-toast-message";
import userDefaults from "react-native-user-defaults";

const CleverTap = require("clevertap-react-native");

export const showToast = (type, message) => {
  Toast.show({
    type: type, // 'success' | 'error' | 'info'
    text1: message,
    position: "bottom",
    visibilityTime: 3000,
  });
};

export const _handleOpenUrl = (event, from) => {
  console.log("handleOpenUrl", event.url, from);
  // showToast(`handleOpenUrl: ${event.url}, ${from}`);
};

export const onlogin = (navigation) => {
  const props = {
    Name: "Pushkar Sane",
    Identity: "380",
    Email: "pushkar.sane@gmail.com",
    Phone: "+14155551234",
    Gender: "M",
    "MSG-email": false,
    "MSG-push": true,
    "MSG-sms": false,
    "MSG-whatsapp": true,
  };

  CleverTap.onUserLogin(props);
  navigation.navigate("Dashboard", {
    name: props.Name,
    identity: props.Identity,
  });
  userDefaults.set(
    "CTProfileIdentity",
    props.Identity,
    "group.ctdemo.ios",
    (err, data) => {
      if (!err) console.log("Saved CTProfileIdentity:", props.Identity);
    }
  );

  console.log("OUL Called");
};

export const handleSubmit = (navigation, user) => {
  const { name, identity, email, phone, gender } = user;

  if (!identity) {
    showToast("error", "Identity is mandatory");
    return;
  }

  CleverTap.onUserLogin({
    Name: name,
    Identity: identity,
    Email: email,
    Phone: phone,
    Gender: gender,
  });

  console.log("OUL Called");
  navigation.navigate("Dashboard", {
    name: props.Name,
    identity: props.Identity,
  });
};

export const handleNotification = () => {
  showToast("info", "Notification Event");
  console.log("Push Notification");
  CleverTap.recordEvent("Notification Event");
};

export const getCleverTap_id = () => {
  CleverTap.getCleverTapID((err, res) => {
    console.log("CleverTapID", res, err);
    alert(`CleverTapID: \n ${res}`);
  });
};

export const pushevent = () => {
  showToast("info", "Event Recorded");
  console.log("Product Viewed Event Recorded");
  CleverTap.recordEvent("Product Viewed");
};

export const pushChargedEvent = () => {
  showToast("success", "Charged Event Recorded");
  console.log("Charged Event Recorded");

  // Recording an Event
  CleverTap.recordChargedEvent(
    { totalValue: 20, category: "books", purchase_date: new Date() },
    [
      {
        title: "book1",
        published_date: new Date("2010-12-12T06:35:31"),
        author: "ABC",
      },
      { title: "book2", published_date: new Date("2000-12-12T06:35:31") },
      { title: "book3", published_date: new Date(), author: "XYZ" },
    ]
  );
};

// App Inbox
export const show_appInbox = () => {
  CleverTap.recordEvent("App Inbox Event");
  console.log("App Inbox Event Recorded");
  // Show Inbox
  CleverTap.showInbox({
    navBarTitle: "My App Inbox",
    navBarTitleColor: "#FF0000",
    navBarColor: "#FFFFFF",
    inboxBackgroundColor: "#AED6F1",
    backButtonColor: "#00FF00",
    unselectedTabColor: "#0000FF",
    selectedTabColor: "#FF0000",
    selectedTabIndicatorColor: "#000000",
    noMessageText: "No message(s)",
    noMessageTextColor: "#FF0000",
  });
};

export const get_TotalMessageCount = () => {
  // Get the total message count
  CleverTap.getInboxMessageCount((err, res) => {
    console.log("Total Messages: ", res, err);
    showToast("info", `Total Messages: ${res}`);
  });
};

export const get_UnreadMessageCount = () => {
  // Get the count of unread messages
  CleverTap.getInboxMessageUnreadCount((err, res) => {
    console.log("Unread Messages: ", res, err);
    showToast("info", `Unread Messages: ${res}`);
  });
};

// Listeners

// CleverTap Event Handlers
