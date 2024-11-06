import { useLoaderData } from "react-router-dom";
import Table from "./Table";

const Alljobs = () => {
    const alljobs = useLoaderData();

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
                    {alljobs.map(job => (
                        <Table key={job._id} job={job} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Alljobs;
