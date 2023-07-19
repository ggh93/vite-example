import { useNavigate } from "react-router-dom";

// import { DiApple } from "react-icons/di";

export const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="" style={{ borderBottom: "1px solid" }}>
        <div className="">
          <div className="m-3">
            <button
              className="flex justify-center w-24 mb-3 text-white rounded-lg bg-orange border-orange"
              onClick={() => {
                localStorage.removeItem("login-token");
                nav("/");
              }}
            >
              로그아웃
            </button>
          </div>
          {/* <div className="right_button">
            <button>회원가입</button>
          </div> */}
        </div>
      </div>
    </>
  );
};
