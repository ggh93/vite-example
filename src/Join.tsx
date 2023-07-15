// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./App.css";

type Props = {
  id: string;
  password: string;
};

const loginInfo: Props = {
  id: "dev",
  password: "1234",
};

export function Join() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();
  const onSubmit: SubmitHandler<Props> = (data) => {
    console.log(data);
    if (data) {
      if (loginInfo.id === data.id && loginInfo.password === data.password) {
        alert("로그인 성공");
        nav("/board");
      } else {
        alert("아이디 및 비밀번호를 확인해주세요");
      }
    }
  };

  return (
    <div className="root">
      <div className="main">
        <h1>우리들의 변호사</h1>
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              className="account"
              placeholder="ID"
              {...register("id")}
            />
            <input
              type="password"
              className="account"
              placeholder="PASSWORD"
              defaultValue={""}
              {...register("password", { required: true })}
            />
            <button type="submit" className="login">
              로그인
            </button>
            {errors.password && (
              <span
                className="account"
                style={{
                  display: "flex",
                  width: "200px",
                  color: "GrayText",
                }}
              >
                패스워드 입력은 필수입니다.
              </span>
            )}
            <div>ID : dev / PW : 1234 </div>
          </div>
        </form>
      </div>
    </div>
  );
}
