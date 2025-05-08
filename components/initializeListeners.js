const CleverTap = require("clevertap-react-native");

// All CT Listeners
export const initializeAllCleverTapListeners = () => {
  CleverTap.addListener(CleverTap.CleverTapPushNotificationClicked, (e) => {
    console.log("PushNotifcationClicked", e);
  });

  CleverTap.addListener(CleverTap.CleverTapInAppNotificationDismissed, (e) => {
    console.log("InAppNotificationDismissed", e);
  });

  CleverTap.addListener(CleverTap.CleverTapInAppNotificationShowed, (e) => {
    console.log("InAppNotificationShowed", e);
  });

  CleverTap.addListener(CleverTap.CleverTapInboxDidInitialize, (e) => {
    console.log("CleverTapInboxDidInitialize", e);
  });

  CleverTap.addListener(CleverTap.CleverTapInboxMessagesDidUpdate, (e) => {
    console.log("CleverTapInboxMessagesDidUpdate", e);
  });

  CleverTap.addListener(CleverTap.CleverTapInboxMessageButtonTapped, (e) => {
    console.log("CleverTapInboxMessageButtonTapped", e);
  });

  CleverTap.addListener(CleverTap.CleverTapInboxMessageTapped, (e) => {
    console.log("CleverTapInboxMessageTapped", e);
  });

  CleverTap.addListener(
    CleverTap.CleverTapInAppNotificationButtonTapped,
    (e) => {
      console.log("CleverTapInAppNotificationButtonTapped", e);
    }
  );
};

export default initializeAllCleverTapListeners;
