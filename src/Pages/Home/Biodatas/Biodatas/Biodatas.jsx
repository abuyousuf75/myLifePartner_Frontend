
import BiodataCard from "./BiodataCard/BiodataCard";
import FilterBio from "./FilterBioData/FilterBio";



const Biodatas = () => {
    
    
    return (
        <section>
        
            <div className="flex gap-10 mt-10 ">
                {/* filter div and options */}
                <div className="w-1/4">
                        <FilterBio></FilterBio>
                </div>
                   {/* biodatas options */}
                <div className="w-2/3">
                    <BiodataCard></BiodataCard>
                </div>
            </div>
        </section>
    );
};

export default Biodatas;