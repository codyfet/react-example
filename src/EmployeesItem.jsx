import React from 'react';

export const EmployeesItem = (props) => {
    return (
        <div className="item">
            <p>{props.name}</p>
            <p>{props.position}</p>
        </div>
    );
}