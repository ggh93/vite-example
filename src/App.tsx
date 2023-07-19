import { Header } from "./Header";
import Router from "./core/router";
import { useState } from "react";
// import { Join } from "./Join";

export function App() {
  const [isLogin, setIsLogin] = useState(false);

  if (localStorage.getItem("login-token")) {
    setIsLogin(true);
    console.log("로그인있음", isLogin);
  }
  // if (!isLogin) return <Join />;
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}
