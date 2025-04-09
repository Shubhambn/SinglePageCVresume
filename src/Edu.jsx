// //Edu Imformatin such as school,title study,date of 
import { useState } from "react";
// import Ginfo from "./Ginfo";
// export default function Edu({onSubmit}){
//     const[CollName,setCollName]=useState("")
//     const[CollMark,setCollMark]=useState("")
//     const[CollYear,setCollYear]=useState("")

//     return (
//         <>
//         <h1>Education Background:</h1>
//         <br/>
//         <h3>Enter college Name</h3>
//         <input
//         type="text"
//         value={CollName}
//         onChange={(e)=>{setCollName(e.target.value)}}/>

//         <h3>Enter college Mark-Percentage:</h3>

//         <input
//         type="number"
//         value={CollMark}
//         onChange={(e)=>{setCollMark(e.target.value)}}/>


//         <h3>Enter college leave date:</h3>

//         <input
//         type="number"
//         value={CollYear}
//         onChange={(e)=>{setCollYear(e.target.value)}}
//         />
//         </>
//         )
//         }
        export default function Edu({ onData }) {
            const [school, setSchool] = useState("");
            const [degree, setDegree] = useState("");
            const [year, setYear] = useState("");
          
            const sendData = () => {
              onData({ school, degree, year });
            };
          
            return (
              <>
                <h2>Education Info</h2>
                <input value={school} onChange={(e) => { setSchool(e.target.value); sendData(); }} placeholder="School" />
                <input value={degree} onChange={(e) => { setDegree(e.target.value); sendData(); }} placeholder="Degree" />
                <input type="number" value={year} onChange={(e) => { setYear(e.target.value); sendData(); }} placeholder="Year" />
              </>
            );
          }
          