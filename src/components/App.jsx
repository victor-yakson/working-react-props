import React from "react";
import Card from "./Card";
import Contact from "../contacts";

function App() {
  return (
    <div>
      <Card
        name={Contact[0].name}
        img={Contact[0].imgURL}
        email={Contact[0].email}
        tel={Contact[0].phone}
      />
      <Card
        name={Contact[1].name}
        img={Contact[1].imgURL}
        email={Contact[1].email}
        tel={Contact[1].phone}
      />
      <Card
        name={Contact[2].name}
        img={Contact[2].imgURL}
        email={Contact[2].email}
        tel={Contact[2].phone}
      />
    </div>
  );
}

export default App;
