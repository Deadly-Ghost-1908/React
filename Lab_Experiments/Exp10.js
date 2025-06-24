import React from "react";

function Exp10() {
  let currDate = new Date();
  let hours = currDate.getHours();
  let greeting;

  if (hours >= 1 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
  } else if (hours >= 18 && hours < 20) {
    greeting = "Good Evening";
  } else if (hours >= 20 && hours <= 24) {
    greeting = "Good Night";
  }

  return (
    <div className="Greeting">
      <h1>Wishing You a Very {greeting}!</h1>
      <h2>Name: <strong>Adrin Dsouza</strong></h2>
      <h2>UEN: <strong>RTU24101IT009</strong></h2>
    </div>
  );
}

export default Exp10;
