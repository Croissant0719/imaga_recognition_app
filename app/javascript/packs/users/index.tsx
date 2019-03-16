import * as React from "react";
import * as ReactDOM from "react-dom";

const input = document.getElementById("user");
const dataset = input.dataset;

const data = {
  users_path: dataset.users_path
}

console.log(data);

const Index = () => {
  return(
    <div>
      <h1> Users Index </h1>
      <form action={data.users_path} method="post">
        <div>
          <label>名前</label>
          <input name="name"></input>
        </div>
        <div>
          <label>Email</label>
          <input name="email"></input>
        </div>
        <div>
          <label>password</label>
          <input type="password" name="password"></input>
        </div>
        <div>
          <label>passwordの確認</label>
          <input type="password" name="password_confirmation"></input>
        </div>
        <button type="submit">決定</button>
      </form>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("user"));
