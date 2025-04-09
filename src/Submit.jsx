// // import Profil from "./Profile";
// // import { useState } from "react";

// // // export default function Submit(){
// // //   <button onClick={displayProfile()}>The time is?</button>
// // // }

// // // function displayProfile(){
// // //   return (<Profile/>)
// // //   }

  
// // export default function Submit() {
// //   const [showProfile, setShowProfile] = useState(false);

// //   function displayProfile() {
// //     setShowProfile(true);
// //   }

// //   return (
// //     <>
// //       <button onClick={displayProfile}>The time is?</button>
// //       {showProfile && <Profil/>}
// //     </>
// //   );
// // }

// import { useState } from "react";
// import Ginfo from "./Ginfo";
// import Edu from "./Edu";
// import Profile from "./Profile";

// export default function Submit() {
//   const [showProfile, setShowProfile] = useState(false);
//   const [userData, setUserData] = useState({});

//   function handleFormSubmit(data) {
//     setUserData(data);      // store the form data
//     setShowProfile(true);   // show profile component
//   }

//   return (
//     <>
//       {!showProfile ? (
//         <Ginfo onSubmit={handleFormSubmit} />
//       ) : (
//         <Profile {...userData} />
//       )}
//     </>
//   );
// }

import { useState } from "react";
import Ginfo from "./Ginfo";
import Edu from "./Edu";
import Profile from "./Profile";

export default function Submit() {
  const [generalData, setGeneralData] = useState({});
  const [eduData, setEduData] = useState({});
  const [showProfile, setShowProfile] = useState(false);

  const handleSubmit = () => {
    setShowProfile(true);
  };

  const combinedData = { ...generalData, ...eduData };

  return (
    <>
      {!showProfile ? (
        <>
          <Ginfo onData={setGeneralData} />
          <Edu onData={setEduData} />
          <button onClick={handleSubmit}>Submit All</button>
        </>
      ) : (
        <Profile {...combinedData} />
      )}
    </>
  );
}
