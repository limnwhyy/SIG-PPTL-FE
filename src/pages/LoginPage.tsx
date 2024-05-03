import { ILocalStorageToken, LoginProps } from "../constants/interfaces";
import { useState, useEffect } from "react";
import { assets } from "../constants/assets";
import "./LoginPageStyle.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { axiosInstance } from "../utils/axios";
import { useLocalStorage } from "usehooks-ts";

type Inputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const [data, setData] = useState<LoginProps>({
    username: "",
    password: "",
  });

  const [disable, setDisable] = useState<boolean>(true);

  const [isHide, setIsHide] = useState<boolean>(true);

  const handleShowPassword = () => {
    setIsHide(!isHide);
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm<Inputs>();
  const [value, setValue] = useLocalStorage<ILocalStorageToken>("token", {
    access_token: "",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await axiosInstance.post("/v1/user/login", data);
      alert("Login berhasil");
      // navigate("/admin/perguruan-tinggi");
      setValue(result.data);
    } catch (error) {
      alert("Username atau password salah");
    }
  };

  useEffect(() => {
    if (watch("username") !== "" && watch("password") !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [watch("username"), watch("password")]);

  return (
    <>
      {value.access_token ? (
        <Navigate to="/admin/perguruan-tinggi" />
      ) : (
        <div className="login-page">
          <div className="image-container">
            <figure>
              <img src={assets.image3} alt="background" />
            </figure>
          </div>
          <div className="main">
            <div className="content">
              <div className="text-container">
                <h3>SISTEM INFORMASI GEOGRAFIS</h3>
                <h1>
                  Persebaran
                  <br />
                  Perguruan Tinggi
                  <br />
                  Lampung
                </h1>
              </div>
            </div>
            <div className="content">
              <div className="form-container">
                <div className="form-header">
                  <h1>Masuk</h1>
                  <p>Sebagai Admin</p>
                </div>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      // id="username"
                      // name="username"
                      // autoComplete="off"
                      // onChange={handleChangeLogin}
                      {...register("username", { required: true })}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type={isHide ? "password" : "text"}
                      // id="password"
                      // name="password"
                      // autoComplete="off"
                      // onChange={handleChangeLogin}
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="show-password">
                    <input type="checkbox" onChange={handleShowPassword} />
                    <label htmlFor="showPassword">Tampilkan kata sandi</label>
                  </div>
                  <button disabled={disable}>MASUK</button>
                </form>
                <div className="other">
                  <p>Tidak punya akun?</p>
                  <NavLink to={"/"}>Kembali ke beranda</NavLink>
                </div>
                <div className="copyright">
                  <p>
                    &copy; {new Date().getFullYear()} Sistem Informasi Geografis
                    Persebaran Perguruan Tinggi Lampung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
