import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import Table from "./Table";
import { AuthContext } from "../../Provider/AuthProvider";

const Alljobs = () => {
    const alljobs = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const {loading} = useContext(AuthContext);

    if(loading){
        <span className="loading loading-infinity loading-lg text-blue-700"></span>
    }

    ///console.log(alljobs); // Check if it's an array

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Array.isArray(alljobs) ? alljobs.slice(indexOfFirstItem, indexOfLastItem) : [];
    const totalPages = Math.ceil((alljobs?.length || 0) / itemsPerPage);

    // Handler to navigate pages
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="overflow-x-auto mx-4 md:mx-10 my-4">
            <table className="w-full text-left md:text-center">
                {/* Head */}
                <thead className="hidden md:table-header-group">
                    <tr className="bg-transparent">
                        <th className="md:w-60 p-3   text-xl md:text-xl">Job Title</th>
                        <th className="md:w-60 p-3  text-xl md:text-xl">Job Posting Date</th>
                        <th className="md:w-60 p-3  text-xl md:text-xl">Application Deadline</th>
                        <th className="md:w-60 p-3  text-xl md:text-xl">Salary Range</th>
                        <th className="md:w-60 p-3  text-xl md:text-xl">Details</th>
                    </tr>
                </thead>
                

                <tbody className="flex flex-col gap-4 md:table-row-group">
                    {currentItems.length > 0 ? (
                        currentItems.map(job => (
                            <Table key={job._id} job={job} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center p-4">No jobs available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center space-x-2 mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-slate-500'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Alljobs;
