import { Link } from "react-router-dom";
import { BeakerIcon, LinkIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    return ( <div className="footer">
        <p>	&#169; <Link to={{ pathname: "https://bit.ly/adedotunosi"  }} target="_blank" style={{color: "white", textDecoration: "none", marginLeft: "2px", marginRight: "5px"}}>Adedotun Osi-Efa</Link><LinkIcon width={20} fill='white'/></p>
    </div> );
}
 
export default Footer;