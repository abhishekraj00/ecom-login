import { useState } from "react";

const Login = () => {
  const [userId, setUserId] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [showPassword, setshowPassword] = useState<boolean>(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        marginLeft: "50px",
      }}
    >
      <input
        placeholder="Enter User-Id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{ padding: "10px", borderRadius: "5px", borderWidth: "0.1px" }}
      />
      <br />
      <br />
      <div style={{ borderRadius: "5px", border: "1px solid" }}>
        <input
          placeholder="Enter Password"
          value={userPassword}
          type={showPassword ? "password" : "text"}
          onChange={(e) => setUserPassword(e.target.value)}
          style={{ padding: "10px", border: "none" }}
        />
        <span onClick={() => setshowPassword((prev) => !prev)}>
          {showPassword ? "Show" : "Hide"}
        </span>
      </div>
      <br />
    </div>
  );
};

export default Login;
