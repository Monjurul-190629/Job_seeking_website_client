const Applied_table = ({ job }) => {
    const {
        jobCategory,
        Job_title,
        Job_description,
        Salary_range,
        resumeLink
    } = job;

    return (
        <tr className="hover:bg-gray-100 border-b">
            <td className="py-4 px-6">{jobCategory}</td>
            <td className="py-4 px-6">{Job_title}</td>
            <td className="py-4 px-6">{Job_description}</td>
            <td className="py-4 px-6">{Salary_range}</td>
            <td className="py-4 px-6">
                <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    View Resume
                </a>
            </td>
        </tr>
    );
};

export default Applied_table;
