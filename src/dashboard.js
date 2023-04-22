import useFetch from "./useFetch";
import UserContent from "./user/usercontent";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

  /*
   const { data: user, loading, error } = useFetch('http://localhost:4000/user-entry');
    const mainclient = JSON.parse(localStorage.getItem("data"));
  const myself = user?.filter((users)=> {
      return  users.aut === mainclient.id;
  })
  */
  const [userData, setUserData] = useState("");
  fetch("https://ybxjournall.onrender.com/user-dashboard", {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                  token: window.localStorage.getItem("token"),
                })
              }).then((res) => {
            return res.json();
        }).then(({data: {id, name, email}}) => {
         setUserData({id,name, email});
         localStorage.setItem("userinfo", JSON.stringify(userData));

  });

  const [datas, setdatas] = useState([]);
  useEffect(() => {
      fetch("https://ybxjournall.onrender.com/user-entry", {
              method: 'GET',
            }).then((res) => {
          return res.json();
      }).then((data) => {
       setdatas(data.data);
       localStorage.setItem("userentries", datas);
       console.log(data.data);
});
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("userinfo"));
  const userJournals = datas.filter(data => data.aut === currentUser.id);

    return ( 
        <div>
          <div style={{
            color: "white",
            fontSize: "40px",
            marginBottom: "20px"
          }}> Welcome {userData.id}!</div>
           {userJournals == '' ?<div className="links">
            <p>You have no entries chief. Add new entry asap no dull am. Click the nav button up and add your entry.</p>
        </div>
  : <div><h3 style={{
    color: "white",
    fontSize: "25px",
    marginBottom: "20px"
  }}> My Journal Entries! </h3>
     {userJournals.map((userData) => (
      
      <UserContent key={userData._id} user={userData} />
    ))} </div>}
  
       </div>
     );
}