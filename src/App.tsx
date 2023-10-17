import { useState } from "react";
import Login from "./auth/login";
import Header from "./components/Header";

const App = () => {
  const [token, setToken] = useState<string>("");
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
};

export default App;
