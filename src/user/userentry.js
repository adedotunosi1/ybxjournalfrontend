import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { toast } from "react-toastify";
import { BeakerIcon, FaceSmileIcon } from '@heroicons/react/24/solid'


const UserEntry = () => {
    const { id } = useParams();
    const { data: entry, error, loading } = useFetch('https://ybxjournall.onrender.com/userentry/' + id);
    const history = useHistory();
    const deleteClick = () => {

        fetch('https://ybxjournall.onrender.com/delete-entry/' + id, {
            method: 'DELETE'
        }).then((res) => {
            res.json();
            console.log(res);
            history.push('/dashboard');
            toast.success('Entry deleted.')
        })
    
    }
    console.log(entry);
    return (  
        <div className="EntryContent">
            { loading && <div>Coming up. Dey calm down Comrade. Abi na glo you dey use? <FaceSmileIcon width={50} fill='white'/></div> }
            { error && <div> Coming up. Dey calm down Comrade. Abi na glo you dey use? <FaceSmileIcon width={50} fill='white'/> </div> }
            { entry && (
                <article>
                    
                    <h2> { entry.data.title }</h2>
                    <p> {entry.data.image && <img width={250} height={250} src={entry.data.image} alt="uploaded image" /> } </p>
                    <div>{ entry.data.body }</div>
                    <p>Written by: { entry.author || entry.data.aut } </p>
                    <button onClick={ deleteClick }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default UserEntry;