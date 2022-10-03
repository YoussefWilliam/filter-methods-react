import React, { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email", "gender"];

  const search = (Users: any) => {
    return Users.filter((user: any) =>
      keys.some((key) => user[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e: any) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
