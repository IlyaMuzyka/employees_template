import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex K.', salary: 800, increase: false, id: 1},
                {name: 'Olga D.', salary: 3000, increase: false, id: 2},
                {name: 'Ilya M.', salary: 5000, increase: false, id: 3}
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployee = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newArr = [...data, newEmployee];
            return {
                data: newArr
            }
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addEmployee}/>
            </div>
        );
    }
}

export default App;
