

const Cards = ({cards}) => {
   const {Biodata_Type,Biodata_Id,Profile_Image,Permanent_Division_Name,Age,Occupation} = cards;
   
    return (
        <div className="card w-96 rounded-md mt-8 bg-[#1E0C36] shadow-xl">
            <div className="p-8 text-white justify-center items-center flex">
            <img  className="w-32  rounded-full h-32" src={Profile_Image} alt={Biodata_Id} />
            </div>
        <div className="card-body bg-[#fff]">
            <h2 className="text-center text-xl font-semibold pb-4">Biodata Id: {Biodata_Id}</h2>
            <div className="grid grid-cols-2 text-lg">
                <ul>
                    <li>Age: {Age}</li>
                </ul>
                <ul>
                    <li>Gender: {Biodata_Type}</li>
                </ul>
            </div>
            <div className="grid grid-cols-2 text-lg">
                <ul>
                    <li>Division: {Permanent_Division_Name}</li>
                </ul>
                <ul>
                    <li>Occupation: {Occupation}</li>
                </ul>
            </div>
            <div className="mt-8 text-center"> 
                <button className="w-1/2 bg-[#ff5a60] text-lg font-semibold p-2 rounded-xl text-white">View Profile</button>
                </div>
        </div>
       
      </div>
    );
};

export default Cards;