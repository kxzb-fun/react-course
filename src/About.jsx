import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const { user } = useParams();
  console.log(user);
//   const isAuth = false;

  // 后端有对这个token进行验证  uid emil name 其他重要的 能够展示你身份的信息
  // 定时刷新toke 一段时间后token失效 重新登录
  const goToHome = () => {
    navigate("/");
    // location.href = "/";
  };

//   useEffect(() => {
//     console.log(2)
//     if (!isAuth) {
//         console.log(3)
//       goToHome();
//     }
//   });

  return (
    <div>
      <h1>Product ID: {user}</h1>
      <button onClick={goToHome}>Home</button>; About
    </div>
  );
}
