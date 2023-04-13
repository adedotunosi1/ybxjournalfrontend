import { useEffect, useState } from "react";

const Images = () => {

    const [allimage, setAllImage] = useState([]);
    const [image, setImage] = useState([]);
           const convertToBase64 = (e) => {
                console.log(e);
                const file = e.target.files[0];
                const reader = new FileReader();
            
                reader.onload = () => {
                  setImage(reader.result);
                };
            
                reader.readAsDataURL(file);
                reader.onerror = error => {
                    console.log("Error: ", error);
                };
           }
           const uploadImage = () => {
            fetch('http://localhost:4000/upload-image', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    base64: image
                })
              }).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp);
           })
        }
        const getImage = () => {
            fetch('http://localhost:4000/get-image', {
                method: 'GET',
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp);
            setAllImage(resp.resp)
           })
        }
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner" style={{ width: "auto" }}>
                        Let's upload Image
                        <input type="file" name="" id="" onChange={convertToBase64}/>
                        {image==="" || image==null ? "" : <img width={100} height={100} src={image} />}
                        <button onClick={uploadImage}>Upload Now </button>
                        <br />
                        <h3>All Images on Database</h3>
                        {allimage.map((resp) => {
                            return (
                                <img width={100} height={100} src={resp.image} />
                            )
                        }) }
                    </div>
                    </div>
            )
}
 
export default Images;