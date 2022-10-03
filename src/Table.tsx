import React from "react";

const Table = ({ data }: any) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {data.map((user: any) => (
          <tr>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
