import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../useFetch";
import { toast } from "react-toastify";



const UserCreate = () => {

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
  });
    const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const history = useHistory();
    const [image, setImage] = useState('');
 // console.log(author);
//  console.log(mainuser);
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setImage(reader.result);
      };
  
      reader.readAsDataURL(file);
    };

    const formSubmit = (e) => {
      e.preventDefault();
      const aut = userData.id;
      const main = { title, body, aut, image };

      fetch('https://ybxjournall.onrender.com/newuser-entry', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(main)
      }).then(() => {
        console.log(main);
        toast.success('New entry added.')
        history.push('/dashboard')
      })
  
   }

    return (
    <div className="create">
    <h2>Add a New Entry</h2>
    <form onSubmit={formSubmit}>
      <label style={{
        color: "white"
      }}>Entry Title:</label>
      <input
       type="text"
       required
       value={ title }
      onChange={(e) => setTitle(e.target.value)}
       />
       <label style={{
        color: "white"
      }}>Entry Content:</label>
      <textarea required
      value={ body }
      onChange={(e) => setBody(e.target.value)}
      >
      </textarea>
      <label style={{
        color: "white"
      }}>Author:</label>
      <div style={{
        color: "white"
      }}>{userData.id}</div>
      <label style={{
        color: "white"
      }}>Add Image </label>
      <input type="file" onChange={handleImageUpload} />
        {image && <img src={image} alt="uploaded image" />}
      <button>Submit New Entry</button>
    </form>
  </div>
    );
}
 
export default UserCreate;