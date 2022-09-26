import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleClick() {
    setHeading(firstName + " " + lastName);
    event.preventDefault();
  }
  function handleFirstNameChange() {
    setFirstName(event.target.value);
  }
  function handleLastNameChange() {
    setLastName(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleFirstNameChange}
          type="text"
          value={firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleLastNameChange}
          type="text"
          value={lastName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// function App() {
//   const [name, setName] = useState("");
//   const [headingText, setHeading] = useState("");
//   function handleClick() {
//     //this is just actual value
//     setHeading(name);
//     //this code stops the default refresh behaviour of forms
//     event.preventDefault();
//   }
//   function handleChange() {
//     setName(event.target.value);
//     //values you can pull from input
//     // console.log(event.target.value);
//     // console.log(event.target.placeholder);
//     // console.log(event.target.type);
//   }
//   return (
//     <div className="container">
//       <h1>Hello {headingText}</h1>
//       {/* alternative code when using forms */}
//       <form onSubmit={handleClick}>
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="What's your name?"
//           //set value to variable created in state
//           value={name}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;
