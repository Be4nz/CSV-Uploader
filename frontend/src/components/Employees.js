const ShowEmployee = (employee) => {
    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phoneNumber}</td>
        </tr>
    )
}

const ShowTitle = ({ employees }) => {
    if (employees.length !== 0) {
        return (
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone Number</td>
            </tr>
        )
    }
}

const Employees = ({ employees }) => {

    return (
        <table>
            <tbody>
                {
                    Array.isArray(employees) && <ShowTitle employees={employees} /> &&
                    employees.map(emp =>
                        <ShowEmployee
                            key={emp.id}
                            name={emp.name}
                            email={emp.email}
                            phoneNumber={emp.phoneNumber}
                        />
                    )
                }
            </tbody>
        </table>
    )

}

export default Employees