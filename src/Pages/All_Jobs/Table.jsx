import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert2';
import { AuthContext } from "../../Provider/AuthProvider";

const Table = ({ job }) => {
    const {
        Job_title,
        Salary_range,
        Job_posting_date,
        applicationDeadline,
        _id
    } = job;

    // Toast notification
    const { user } = useContext(AuthContext);

    const showToast = () => {
        if (!user) {
            swal.fire({
                title: 'Not succeeded!',
                text: 'You have to login to visit viewDetails',
                icon: 'error',
                confirmButtonText: 'Login'
            });
        }
    };

    return (
        <tr className="md:table-row flex flex-col md:flex-row justify-between md:justify-center items-start md:items-center bg-transparent shadow-md md:shadow-none rounded-lg p-4 md:p-0 mb-4 md:mb-0">
            <td className="md:w-60 p-2 md:p-5">
                <p className="md:hidden font-semibold">Job Title</p>
                {Job_title}
            </td>
            <td className="md:w-60 p-2 md:p-5">
                <p className="md:hidden font-semibold">Job Posting Date</p>
                {Job_posting_date}
            </td>
            <td className="md:w-60 p-2 md:p-5">
                <p className="md:hidden font-semibold">Application Deadline</p>
                {applicationDeadline}
            </td>
            <td className="md:w-60 p-2 md:p-5">
                <p className="md:hidden font-semibold">Salary Range</p>
                {Salary_range}
            </td>
            <td className="md:w-60 p-2 md:p-5">
                <p className="md:hidden font-semibold">Details</p>
                <Link to={`/ViewDetails/${_id}`}>
                    <button className="btn bg-blue-500 text-white font-bold hover:text-black mt-2 md:mt-0" onClick={showToast}>
                        View Details
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default Table;
