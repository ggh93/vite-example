import { DiApple } from "react-icons/di";

export const Header = () => {
  return (
    <>
      <div className="bg-red-600">흠</div>
      <div className="header" style={{ borderBottom: "1px solid" }}>
        <div className="left">
          <h2>
            <DiApple />
          </h2>
        </div>
        <div className="right">
          <div className="ml-3">
            <button>로그인</button>
          </div>
          <div className="right_button">
            <button>회원가입</button>
          </div>
        </div>
      </div>
    </>
  );
};
