import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('');
   const history = useHistory();

    const [image, setImage] = useState('');
  
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
      const entry = { title, body, author, image };

      fetch('http://localhost:8800/publicentry', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(entry)
      }).then(() => {
        toast.error('New public entry added.')
        history.push('/')
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
      <input type="text"
      required
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      />
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

export default Create;