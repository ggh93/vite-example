// import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import IdStore from "./stores/store";
// import "./App.css";
/** @jsxImportSource @emotion/react */

type Props = {
  id: string;
  password: string;
};

const loginInfo: Props = {
  id: "dev",
  password: "1234",
};

export function Join() {
  const cookie = new Cookies();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();

  // const [remember, setRemember] = useState<boolean>(false);
  // const [isLoding, setIsLoding] = useState<boolean>(false);
  /**
  * 
  localStorage vs sessionStorage
    - Key와 Value 값으로 저장.
    - 문자열이 아닌 객체도 저장이 가능하며 5MB까지 저장 가능함.
    - 쿠키와 다르게 만료기간을 지정할 수 없으며, 서버로 전송되지 않음.
    - 자동로그인을 원하면 localStorage를 사용하고 브라우저를 닫으면 로그인이 풀리는 것을 원하면 sessionStorage를 사용
    1) localStorage
    - 사용자가 지우지 않는 이상 영구적으로 계속 브라우저에 남아있음.
    - 따라서 지속적으로 필요한 정보를 저장한다. (자동로그인 등)
    2) sessionStorage
    - 윈도우나 브라우저를 닫는 경우 사라지며 뿐만 아니라 브라우저 내에서 탭을 생성하는 경우에도 별도의 영역으로 할당됨.
    - 잠시동안 필요한 정보를 저장한다. (일회성 로그인 등)
 *
 */
  const { id, increase } = IdStore((state) => state);

  // const {bears, increasePopulation, removeAllBears} = useBearStore()
  const onSubmit: SubmitHandler<Props> = (data) => {
    console.log(data);

    if (data) {
      if (loginInfo.id === data.id && loginInfo.password === data.password) {
        cookie.set("admin-login", "cookie");
        // alert("로그인 성공");
        localStorage.setItem("login-token", "gg");
        // response.ACCESS_TOKEN
        nav("/board");
        console.log("cookie : ", cookie.get("admin-login"));
      } else {
        alert("아이디 및 비밀번호를 확인해주세요");
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="p-4 w-80">
        <h1 className="mb-5 text-4xl font-semibold text-center">
          우리들의 법률사무소
        </h1>
        <button
          onClick={() => {
            increase(1);
          }}
        >
          one up {id}
        </button>
        {/* <button onClick={}>remove all</button> */}
        <form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              className="flex w-full mb-3 border-2 border-solid rounded-lg h-11 border-orange"
              placeholder=" ID"
              {...register("id", { required: true })}
            />
            {errors.id && (
              <span className="mb-2">아이디 입력은 필수입니다.</span>
            )}
            <input
              type="password"
              className="flex w-full mb-3 border-2 border-solid rounded-lg h-11 border-orange"
              placeholder=" PASSWORD"
              defaultValue={""}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="mb-2">패스워드 입력은 필수입니다.</span>
            )}
            <button
              type="submit"
              className="flex items-center justify-center w-full h-12 mb-3 text-2xl text-white rounded-lg bg-orange border-orange"
            >
              로그인
            </button>
          </div>
        </form>
        <div>
          <input type="checkbox" className="w-8 h-4 mb-3 border-solid" />
          아이디 기억하기
        </div>
        {/* <div className="flex">
          회원이 아니신가요?&nbsp;
          <div
            className="cursor-pointer text-blue"
            onClick={() => alert("회원가입 팝업창 준비중")}
          >
            회원가입
          </div>
        </div> */}
        <div className="text-gray-light">ID : dev / PW : 1234 </div>
      </div>
    </div>
  );
}
