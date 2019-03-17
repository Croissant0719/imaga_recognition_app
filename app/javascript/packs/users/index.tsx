import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";

const input = document.getElementById("user");
const dataset = input.dataset;

const data = {
  users_path: dataset.users_path
};

const Index = () => {
  const [userName, setUserName] = useState<string>();
  const [userEmail, setEmail] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>();

  const userInfo = {
    userName: userName,
    userEmail: userEmail,
    userPassword: userPassword,
    userPasswordConfirm: userPasswordConfirm
  };

  return (
    <div>
      <h1> Users Index </h1>
      <table>
        <tbody>
          <tr>
            <td>
              <label>名前</label>
            </td>
            <td>
              <input
                name="name"
                placeholder="username"
                onBlur={e => {
                  setUserName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input
                name="email"
                placeholder="email"
                onBlur={e => {
                  setEmail(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>password</label>
            </td>
            <td>
              <input
                type="password"
                name="password"
                onBlur={e => {
                  setUserPassword(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>passwordの確認</label>
            </td>
            <td>
              <input
                type="password"
                name="password_confirmation"
                onBlur={e => {
                  setUserPasswordConfirm(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" onClick={() => console.log(userInfo)}>
        決定
      </button>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("user"));
