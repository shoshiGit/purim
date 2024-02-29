import { useForm } from "react-hook-form";
import { login } from "./userApi";
import { useDispatch } from "react-redux";
import { userIn } from "./userSlice";

const Login = () => {
  let { register, handleSubmit, reset } = useForm();
  let dispatch = useDispatch();
  const save = (data) => {
    login(data)
      .then((res) => {
        alert("נכנסת בהצלחה");
        dispatch(userIn(res.data));
      })
      .catch((err) => {
        alert("שגיאה", err.response);
        console.log(err.response);
      });
  };
  return (
    <form onSubmit={handleSubmit(save)}>
      <label>שם</label>
      <input {...register("name")} type="text" />
      <label>סיסמא</label>
      <input {...register("password")} type="password" />
      <input type="submit" />
    </form>
  );
};

export default Login;
