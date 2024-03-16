import React from "react";
import { Person } from "../types/Person.types";
interface UserList {
  data: Person[];
}
const UserList = (props: UserList) => {
  return (
    <div>
      {props.data.map((d) => (
        <h1>
          Name is {d.first} Last {d.last}
        </h1>
      ))}
    </div>
  );
};

export default UserList;
