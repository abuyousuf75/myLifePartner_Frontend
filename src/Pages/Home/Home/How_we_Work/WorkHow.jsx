
import { FaUser,FaSearch,FaHandshake  } from "react-icons/fa";


const WorkHow = () => {
    return (
        <div className="bg-[#DA3182] mb-8 p-8">
        <h2 className="text-white text-xl mb-8 text-center font-bold p-4">How Websites Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#d1d1d1] rounded-lg shadow-md flex flex-col items-center">
                <div className="icons mb-4 flex items-center justify-center w-12 h-12 bg-slate-500 rounded-full">
                    <FaUser className="text-2xl " />
                </div>
                <h2 className="font-semibold text-center">Create an Account</h2>
            </div>
            <div className="p-8 bg-[#d1d1d1] rounded-lg shadow-md flex flex-col items-center">
                <div className="icons mb-4 flex items-center justify-center w-12 h-12 bg-slate-500 rounded-full">
                    <FaSearch className="text-2xl" />
                </div>
                <h2 className="font-semibold text-center">Find Biodatas</h2>
            </div>
            <div className="p-8 bg-[#d1d1d1] rounded-lg shadow-md flex flex-col items-center">
                <div className="icons mb-4 flex items-center justify-center w-12 h-12 bg-slate-500 rounded-full">
                    <FaHandshake className="text-2xl " />
                </div>
                <h2 className="font-semibold text-center">Contact</h2>
            </div>
        </div>
    </div>
    
    );
};

export default WorkHow;