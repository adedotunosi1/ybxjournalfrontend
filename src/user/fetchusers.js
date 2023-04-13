import { useEffect, useState } from "react";

export default function FetchUsers() {
  const [data, setdata] = useState([]);
    useEffect(() => {
        fetch("https://ybxjournall.onrender.com/getallusers", {
                method: 'GET',
              }).then((res) => {
            return res.json();
        }).then((data) => {
         console.log(data, "userData");
         setdata(data.data);
  });
    }, []);
    return ( 
       <><h2 style={{
        color: "white"
       }}>YBX Journal Users: </h2>
       <br />
       <table style={{ width: 500}}>
         <tr>
            <th style={{
                 color: "white"
            }}>Name</th>
            <th  style={{
                 color: "white"
            }}>Email</th>
            <th  style={{
                 color: "white"
            }}>Id</th>
         </tr>
         {data.map((i) => (
                <tr>
                    <td style={{color: "white"}}>{i.name}</td>
                    <td style={{color: "white"}}>{i.email}</td>
                    <td style={{color: "white"}}>{i.id}</td>
                </tr>
            )
         )};
        </table></>
     );
}