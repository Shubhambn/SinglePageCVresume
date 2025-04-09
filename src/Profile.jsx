// export default function Profile({ name, dob, mno,CollName,CollMark,CollYear }) {
//     return (
//       <>
//         <h1>It is your Profile</h1>
//         <h3>Name: {name}</h3>
//         <h3>DOB: {dob}</h3>
//         <h3>Phone: {mno}</h3>
//         <br/>
//         <br/>
//         <h1>It is college Background:</h1>
//         <h3>College Name={CollName}</h3>
//         <h3>college Marks-Pesentage={CollMark}</h3>
//         <h3>College Pass-out Year={CollYear}</h3>
//       </>

// );
//   }

  export default function Profile({ name, dob, mno, school, degree, year }) {
    return (
      <>
        <h2>Profile</h2>
        <h4>Name: {name}</h4>
        <h4>DOB: {dob}</h4>
        <h4>Phone: {mno}</h4>
        <h4>School: {school}</h4>
        <h4>Degree: {degree}</h4>
        <h4>Year: {year}</h4>
      </>
    );
  }
  
  