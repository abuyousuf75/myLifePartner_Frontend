import { useEffect, useState } from "react";
import BioInfoCard from "./BioInfoCard";


const BiodataCard = () => {
    const [bioDatas, setBiodatas] = useState([]);
    
    useEffect(()=>{
        fetch('Biodata.json')
        .then(res => res.json())
        .then(data => setBiodatas(data))
    },[])
    
    return (
        <div className="">
            <h2>Biodata card</h2>
            <div className="grid lg:grid-cols-2 gap-10">
                {
                
                    bioDatas.map(cards => <BioInfoCard key={cards._id } cards={cards}></BioInfoCard>)
                
                }
            </div>
        </div>
    );
};

export default BiodataCard;