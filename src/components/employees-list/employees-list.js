import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {
    const elems = data.map(elem => {
        const {id, ...elemProps} = elem;
        return (
            <EmployeesListItem 
                key={id} 
                {...elemProps}
                onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default EmployeesList;