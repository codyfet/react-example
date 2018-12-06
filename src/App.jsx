import React from 'react';
import { EmployeesList } from './EmployeesList';

const employees = [{
    name: "James Bond",
    position: "superagent 007"
},
{
    name: "Ivan Petro",
    position: "student"
},
{
    name: "Sasha Volkov",
    position: "programmer"
}];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredEmployees: employees,
            inputValue: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (event) {
        const filtered = employees.filter(
            (employee) => {
                return employee.name.indexOf(event.target.value) !== -1
            }
        )

        this.setState({
            inputValue: event.target.value,
            filteredEmployees: filtered
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                <EmployeesList employees={this.state.filteredEmployees} />
            </div>
        )
    }
}

export { App };