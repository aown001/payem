import React from 'react';
import Table from '../widgets/Table';

const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Description', field: 'description' },
    { title: 'Method', field: 'method' },
    { title: 'Amount', field: 'amount' },
]

const data = [
    { name: 'Contribution 1', description: 'kjhkjh khj hkj kjh  kjh  kjh kjh kjh  iuoi  lijh', method: 'Method 1', amount: '45000', },
]

export default function ContributionsReport() {

    return (
        <React.Fragment>
            <Table
                title = "Contributions Report"
                columns={columns}
                data={data}
                exportButton={true}
                isFreeAction={false}
            />
        </React.Fragment>
    )
}