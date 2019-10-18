import React, { useEffect } from 'react';
import Table from '../widgets/Table';
import FullScreenDialog from '../widgets/FullScreenDialog';
import AddCode from './AddCode';
import axios from 'axios';

export default function TaxList() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'val' },
            { title: 'Code', field: 'ATTRIB_05' },
            { title: 'Description', field: 'ATTRIB_01' },
            { title: 'Taxable', field: 'FLG_01', lookup: {'Yes': 'Yes', 'No': 'No'} },
            { title: 'Active', field: 'FLG_02', lookup: {'Yes': 'Yes', 'No': 'No'} },
        ],
        data: [],
        modalOpen: false,
    });

    useEffect(() => {
        axios.get(`http://localhost:4000/codes`)
            .then(res => {
                const data = res.data.data
                setState({ ...state, data })
                console.log("DATA ", data)
            })
        console.log(state)
    }, []);

    const handleDelete = (rowData) => {
        return new Promise((resolve) => {
            axios.delete(`http://localhost:4000/codes/${rowData.row_id}`);
            resolve()
            const data = [...state.data];
            data.splice(data.indexOf(rowData), 1);
            setState({ ...state, data });
        })
    }

    const handleUpdate = (newData, oldData) => {
        console.log(newData)
        return new Promise((resolve) => {
            axios.put(`http://localhost:4000/codes/${newData.row_id}`, { newData });
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
                title="Tax and Money Codes"
                columns={state.columns}
                data={state.data}
                exportButton={true}
                actions={[
                    { icon: 'add', tooltip: 'Add Code', onClick: handleModalOpen, isFreeAction: true },
                ]}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
            <FullScreenDialog
                open={state.modalOpen}
                handleClose={handleModalClose}
                component={<AddCode />}
                title='Add New Code'
            />
        </React.Fragment>
    );
}