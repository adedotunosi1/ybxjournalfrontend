import { Link } from "react-router-dom";

const UserContent = ({ user, title}) => {
    return (  
        <div className="entry-list">
              <h2 style={{
               color: "white"
              }}> { title }</h2>
              
                    <div className="entry-preview">
                      <Link to={`/userentry/${ user?._id }`}>
                      <h2>{ user.entry?.title || user?.title }</h2>
                      <p>Author: { user?.aut }</p>
                      </Link>
                      </div>
          
        </div>
       );
}
 
export default UserContent;