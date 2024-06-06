

const FilterBio = () => {
    return (
        <div className="">
            <h2 className="text-2xl font-semibold">Filter or sort by:</h2>
            <div className="p-4">
                {/* By Divisions */}
            <h2 className="text-xl font-semibold mb-4">Divisions</h2>
            <select className="text-white select w-full text-lg max-w-xs bg-[#FF5A60]">
               
            <option >All</option>
            <option>Dhaka</option>
            <option>Chattagram</option>
            <option>Rangpur</option>
            <option>Barisal</option>
            <option>Khulna</option>
            <option>Maymansign</option>
            <option>Sylhet</option>
            </select>
            </div>
            {/* By ages */}
            <div className="p-4">
                {/* By Divisions */}
            <h2 className="text-xl font-semibold mb-4">Biodata types</h2>
            <select className="text-white select w-full text-lg max-w-xs bg-[#FF5A60]">
            <option>Both</option>
            <option>Male</option>
            <option>Female</option>
            </select>
            </div>
            <div className="p-4">
                {/* By Age Range */}
            <h2 className="text-xl font-semibold mb-4">Age Range</h2>
            <input type="range"  className="range  range-accent" />
            </div>
        </div>
    );
};

export default FilterBio;