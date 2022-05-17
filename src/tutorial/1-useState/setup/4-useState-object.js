import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });
  const handleMessage = () => {
    setPerson({ ...person, message: "hello world" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={handleMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
