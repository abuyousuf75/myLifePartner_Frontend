import { useEffect, useState } from "react";
import Cards from "./Cards";


const ProfileCard = () => {

    const [profile, setProfile] = useState([]);
    useEffect(()=>{
        fetch('ProfileCard.json')
        .then(res => res.json())
        .then(data => setProfile(data))
    },[])
 
    return (
        <div className="mt-8 mb-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
                {
                    profile.map(cards => <Cards key={cards.Biodata_Id} cards={cards}>
                        
                    </Cards>)
                }
           </div>
        </div>
    );
};

export default ProfileCard;