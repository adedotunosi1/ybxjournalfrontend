import Login from './login';
import { toast } from "react-toastify";
import { BeakerIcon, FaceSmileIcon, HomeIcon, HomeModernIcon } from '@heroicons/react/24/solid';
const Home = () => {
    return ( 
        
        <div className="home">
          <div className="wrap">
          <h2 style={{
            color: "white",
            fontSize: "40px",
            marginBottom: "30px",
            display: 'flex',
            justifyContent: 'center'
          }}>Welcome To YBX Journal <HomeIcon width={50} fill='white'/> </h2>
          <Login />
          </div>
       </div>
     );
}
export default Home;