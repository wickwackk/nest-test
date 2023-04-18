"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_1 = require("next/font/google");
const axios_1 = require("axios");
const react_1 = require("react");
const inter = (0, google_1.Inter)({ subsets: ["latin"] });
function Home() {
    const [users, setUsers] = (0, react_1.useState)([]);
    function submitHandler(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.age.value);
        const newUser = {
            name: e.target.name.value,
            age: e.target.age.value,
        };
        axios_1.default.post(`http://localhost:3000/users/add`, newUser);
    }
    function getAllUserHandler() {
        axios_1.default
            .get("http://localhost:3000/users/all")
            .then((res) => setUsers(res.data));
    }
    return (<div>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>
          Name:
          <input name="name" className="border border-black block" type="text"/>
        </label>
        <label>
          Age:
          <input name="age" className="border border-black block" type="number"/>
        </label>

        <button className="border border-black mt-2" type="submit">
          Submit
        </button>
      </form>
      <button className="border border-black mt-2" onClick={getAllUserHandler}>
        Get all users
      </button>
      <ul>
        {users.map((user, index) => (<li key={index}>{user.name}</li>))}
      </ul>
    </div>);
}
exports.default = Home;
//# sourceMappingURL=index.js.map