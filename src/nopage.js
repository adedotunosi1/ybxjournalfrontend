import { Link } from "react-router-dom";


const NoPage = () => {
    return ( 
        <div className="nopage">
            <h2>Sorry</h2>
            <p>This page does not exist</p>
            <Link to='/'>Return to Homepage</Link>
        </div>
     );
}
 
export default NoPage;