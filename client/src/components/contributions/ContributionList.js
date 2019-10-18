import React, { useEffect } from 'react';
import Table from '../widgets/Table';
import FullScreenDialog from '../widgets/FullScreenDialog';
import AddContribution from './AddContribution';
import axios from 'axios';

export default function ContributionList() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'val' },
            { title: 'Description', field: 'ATTRIB_03' },
            { title: 'Method', field: 'ATTRIB_06', lookup: { 'Fixed': 'fixed', 'Percentage of Net Pay': 'Percentage of Net Pay', 'Percentage of Gross Pay': 'Percentage of Gross Pay' } },
            { title: 'Limit Amount', field: 'ATTRIB_14' },
            { title: 'Amount/Percent Per Pay', field: 'ATTRIB_15' },
            { title: 'Taxable', field: 'FLG_04', lookup: {'Yes': 'Yes', 'No': 'No'} },
        ],
        data: [],
        modalOpen: false,
    });

    useEffect(() => {
        axios.get(`http://localhost:4000/contributions`)
            .then(res => {
                const data = res.data.data
                setState({ ...state, data })
                console.log("DATA ", data)
            })
        console.log(state)
    }, []);

    const handleDelete = (rowData) => {
        return new Promise((resolve) => {
            axios.delete(`http://localhost:4000/contributions/${rowData.row_id}`);
            resolve()
            const data = [...state.data];
            data.splice(data.indexOf(rowData), 1);
            setState({ ...state, data });
        })
    }

    const handleUpdate = (newData, oldData) => {
        console.log(newData)
        return new Promise((resolve) => {
            axios.put(`http://localhost:4000/contributions/${newData.row_id}`, { newData });
            resolve();
            const data = [...state.data];
            const index = data.indexOf(oldData);
            data[index] = newData;
            setState({ ...state, data });
            console.log("new Data ", newData)
            console.log("Old Data ", oldData)
        })
    }

    const handleModalOpen = () => {
        setState({ ...state, modalOpen: true })

    }
    const handleModalClose = () => {
        setState({ ...state, modalOpen: false })
    }

    return (
        <React.Fragment>
            <Table
                title="Contributions"
                columns={state.columns}
                data={state.data}
                exportButton={true}
                actions={[
                    { icon: 'add', tooltip: 'Add Contribution', onClick: handleModalOpen, isFreeAction: true },
                ]}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
            <FullScreenDialog
                open={state.modalOpen}
                handleClose={handleModalClose}
                component={<AddContribution />}
                title='Add New Contribution'
            />
        </React.Fragment>
    );
}