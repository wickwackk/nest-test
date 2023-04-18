import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface UserType {
  name: string;
  age: number;
}

export default function Home() {
  const [users, setUsers] = useState<UserType[]>([]);

  function submitHandler(e: any) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.age.value);
    const newUser = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    axios.post(`http://localhost:3000/users/add`, newUser);
  }

  function getAllUserHandler() {
    axios
      .get("http://localhost:3000/users/all")
      .then((res) => setUsers(res.data));
  }

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>
          Name:
          <input
            name="name"
            className="border border-black block"
            type="text"
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            className="border border-black block"
            type="number"
          />
        </label>

        <button className="border border-black mt-2" type="submit">
          Submit
        </button>
      </form>
      <button className="border border-black mt-2" onClick={getAllUserHandler}>
        Get all users
      </button>
      <ul>
        {users.map((user: UserType, index: number) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
