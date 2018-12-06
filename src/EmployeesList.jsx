import React from 'react';
import {EmployeesItem} from "./EmployeesItem";

export const EmployeesList = (props) => {
    const {employees} = props;

    const employeesItems = employees.map(
        (employee) => <EmployeesItem name={employee.name} position={employee.position}/>
    )

    return (
        <div className="list">{employeesItems}</div>
    );
}