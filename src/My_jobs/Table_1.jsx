import { Link } from 'react-router-dom';

const Table_1 = ({ job, handleDelete }) => {
    const {
        Job_title,
        Salary_range,
        Job_posting_date,
        applicationDeadline,
        _id,
    } = job;

    return (
        <tr className="text-sm md:text-base border-b">
            {/* Job Title */}
            <td className="px-4 py-2 text-gray-800">{Job_title}</td>

            {/* Posting Date */}
            <td className="px-4 py-2 text-gray-600">{Job_posting_date}</td>

            {/* Application Deadline */}
            <td className="px-4 py-2 text-gray-600">{applicationDeadline}</td>

            {/* Salary Range */}
            <td className="px-4 py-2 text-gray-600">{Salary_range}</td>

            {/* Action Buttons */}
            <td className="px-4 py-2">
                <Link to={`/update/${_id}`}>
                    <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mr-2">
                        Update
                    </button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Table_1;
