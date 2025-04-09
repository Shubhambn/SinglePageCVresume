// // General information like name emal and phone Number
// import { useState } from "react"
// export default function Ginfo(){
//     const[name,setName]=useState("");
//     const[dob,setDob]=useState("");
//     const[mno,setMno]=useState("");
//     const Profile ={
//       Name:" ",
//       Dob:"",
//       Mno:"",
      

//     }
//     return(<>
//       <h3>Enter your Name:</h3>
//       <input 
//       type="text" 
//       value={name}
//       onChange={(e)=>setName(e.target.value)}
//       />
      
//       <br/>
//       <h3>Enter your DOB:</h3>
  
//       <input 
//       type="date"
//       value={dob}
//       onChange={(e)=>setDob(e.target.value)}
//       />
//       <input 
//       type="number"
//       value={mno}
//       onChange={(e)=>setMno(e.target.value)}
//       />
//       {Profile.Name=name}
//       {Profile.Dob=dob}
//       {Profile.Mno=mno}


//     </>
//     )
// }/
// import { useState } from "react";

// export default function Ginfo({ onSubmit }) {
//   const [name, setName] = useState("");
//   const [dob, setDob] = useState("");
//   const [mno, setMno] = useState("");

//   return (
//     <>
//       <h3>Enter your Name:</h3>
//       <input value={name} onChange={(e) => setName(e.target.value)} />

//       <h3>Enter your DOB:</h3>
//       <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

//       <h3>Enter your Phone Number:</h3>
//       <input type="number" value={mno} onChange={(e) => setMno(e.target.value)} />
//       <br /><br />
//       {createRoot(document.getElementById('But')).}
//     </>
//   );
import { useState } from "react";

export default function Ginfo({ onData }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [mno, setMno] = useState("");

  // Send data up when something changes
  const sendData = () => {
    onData({ name, dob, mno });
  };

  return (
    <>
      <h2>General Info</h2>
      <input value={name} onChange={(e) => { setName(e.target.value); sendData(); }} placeholder="Name" />
      <input type="date" value={dob} onChange={(e) => { setDob(e.target.value); sendData(); }} />
      <input type="number" value={mno} onChange={(e) => { setMno(e.target.value); sendData(); }} placeholder="Phone" />
    </>
  );
}

