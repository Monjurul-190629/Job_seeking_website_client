import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Table from "./Table";

const Alljobs = () => {
    const alljobs = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    console.log(alljobs); // Check if it's an array

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
                        <th className="md:w-60 p-3 underline text-xl md:text-2xl">Job Title</th>
                        <th className="md:w-60 p-3 underline text-xl md:text-2xl">Job Posting Date</th>
                        <th className="md:w-60 p-3 underline text-xl md:text-2xl">Application Deadline</th>
                        <th className="md:w-60 p-3 underline text-xl md:text-2xl">Salary Range</th>
                        <th className="md:w-60 p-3 underline text-xl md:text-2xl">Details</th>
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
                        className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-slate-500 text-white' : 'bg-white text-slate-500'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Alljobs;
