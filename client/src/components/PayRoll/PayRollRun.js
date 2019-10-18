import React from 'react';
import MaterialTable from 'material-table';
import Table from '../widgets/Table';

const columns= [
    { title: 'Name', field: 'name' },
    { title: 'Status', field: 'status' },
    { title: 'Pay Type', field: 'pay_type' },
    { title: 'Frequency', field: 'frequency' },
    { title: 'Registration', field: 'registration' },
]

const data= [
    { id: '1', name: 'Sajeel', status: 'Active', pay_type: 'Salary', frequency: 'Monthly', registration: 'Complete' },
]

export default function PayRollRun(props) {
    const [state, setState] = React.useState({
        modalOpen: false,
    });

    return (
        <React.Fragment>
            <Table 
            title= "Run PayRoll"
            columns= {columns}
            data = {data}
            />
        </React.Fragment>
    )
}