import { useEffect, useState } from "react";
import Story from "./Story";



const SucessStory = () => {
    const [success, setSuccess] = useState([]);
    const [date, useDate] = useState([]);
    useEffect(()=>{
        fetch('SucessStory.json')
        .then(res => res.json())
        .then(data => setSuccess(data))
    },[]);

    // sort data asc to dsc
    const sortData = success;
    sortData.sort((a,b)=> new Date(a.marriageDate)- new Date (b.marriageDate));
    

    return (
      <section className="mt-10 mb-10">
        <h2 className="mb-14 text-center text-4xl font-medium  text-[#ff5a60]">Matrimony Service with Millions of Success Stories</h2>
        {/* success card start here */}
       <div className="grid grid-cols-3">
       {sortData.map(story => (
                <Story key={story._id} story={story} />
            ))}
       </div>
             
      </section>
    );
};

export default SucessStory;
