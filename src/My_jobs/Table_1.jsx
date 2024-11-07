import { Link } from "react-router-dom";

const Table_1 = ({ job, jobes, handleDelete }) => {

    const {
        Job_title,
        Salary_range,
        Job_posting_date,
        applicationDeadline,
        _id
    } = job;

    return (
        <div>

            <tbody>
                <tr className="">
                    <th className="md:w-60 p-5">{Job_title}</th>
                    <th className="md:w-60">{Job_posting_date}</th>
                    <th className="md:w-60">{applicationDeadline}</th>
                    <th className="md:w-60">{Salary_range}</th>
                    <th className="md:w-60">
                        <Link to = {`/update/${_id}`}>
                            <button className="px-2 py-1 bg-orange-800 hover:bg-gray-400 hover:text-black text-white hover:border-1 hover:border-black font-bold mx-2 rounded-lg">
                                Update
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="px-2 py-1 bg-orange-800 hover:bg-gray-400 hover:text-black hover:border-1 hover:border-black text-white font-bold rounded-lg">
                            Delete
                        </button>
                    </th>
                </tr>
            </tbody>

        </div>
    );
};

export default Table_1;

