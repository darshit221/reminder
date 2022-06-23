import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDbiLGfK4Rht-P3Zdk7I-KLAe1jXwTBcT4",
  authDomain: "remider-2fac5.firebaseapp.com",
  projectId: "remider-2fac5",
  storageBucket: "remider-2fac5.appspot.com",
  messagingSenderId: "4064172964",
  appId: "1:4064172964:web:56f4811beb82f63ceeff31",
};

initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BItiiVKdtwMlo61DznzrVqhO3BWRSu6cdrV63I48gAO8uhGyr7ARg76A7BXyfuoyY_7bV3ZMQ-LSHkXxApIo60M",
    });
    if (currentToken) {
      console.log("current token for client: ", currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
