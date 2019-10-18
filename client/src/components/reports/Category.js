import React from 'react';
import Table from '../widgets/Table';

const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Description', field: 'description' },
    { title: 'Method', field: 'method' },
    { title: 'Amount', field: 'amount' },
]

const data = [
    { name: 'Bonus 1', description: 'kjhkjh khj hkj kjh  kjh  kjh kjh kjh  iuoi  lijh', method: 'Method 1', amount: '45000', },
]

export default function TaxReport() {

    return (
        <React.Fragment>
            <Table
                title="Category Wise Report"
                columns={columns}
                data={data}
                exportButton={true}
                isFreeAction={false}
            />
        </React.Fragment>
    )
}