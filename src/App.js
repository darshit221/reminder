import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import moment from "moment";

import { onMessageListener, requestForToken } from "./firebase";
function App() {
  const [notification, setNotification] = useState({ title: "", body: "" });
  useEffect(() => {
    requestForToken();
    onMessageListener()
      .then((payload) => {
        setNotification({
          title: payload?.notification?.title,
          body: payload?.notification?.body,
        });
      })
      .catch((err) => console.log("failed: ", err));
  }, []);

  console.log("dasf", notification);
  return (
    <div className="App">
      <input type={"datetime-local"} name="data" />
      <button>reminder</button>
    </div>
  );
}

export default App;
