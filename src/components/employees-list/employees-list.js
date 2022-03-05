import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elems = data.map(elem => {
        const {id, ...elemProps} = elem;
        return (
            <EmployeesListItem 
                key={id} 
                {...elemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default EmployeesList;