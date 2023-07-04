// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <h2>로그인 페이지</h2>
        <div className="container">
          <input type="text" className="account" placeholder="ID" />
          <input type="text" className="account" placeholder="PASSWORD" />
          <button className="login" onClick={() => []}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
