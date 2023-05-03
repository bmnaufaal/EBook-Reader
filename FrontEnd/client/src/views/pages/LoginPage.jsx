import { useState } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../helpers/notify";

export default function LoginPage() {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const changeLoginFormHandler = (event) => {
    const { name, value } = event?.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    })
      .then(async (response) => {
        if (!response.ok) throw await response.json();
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        setLoginForm({
          ...loginForm,
          username: "",
          password: "",
        });
        navigate("/");
        notify("Success login");
      })
      .catch((error) => {
        console.log(error);
        notify(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="input input-bordered"
                    value={loginForm.username}
                    onChange={changeLoginFormHandler}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    value={loginForm.password}
                    onChange={changeLoginFormHandler}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
