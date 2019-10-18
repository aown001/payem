import React, { useEffect } from 'react';
import Table from '../widgets/Table'
import FullScreenDialog from '../widgets/FullScreenDialog';
import AddDeduction from './AddDeduction';
import axios from 'axios';

export default function DeductionList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'val' },
      { title: 'Description', field: 'ATTRIB_03' },
      { title: 'Method', field: 'ATTRIB_06' },
      { title: 'Amount', field: 'ATTRIB_14' },
      { title: 'Amount Per Pay', field: 'ATTRIB_15' },
    ],
    data: [

    ],
    modalOpen: false,
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/deductions`)
      .then(res => {
        const data = res.data.data
        setState({ ...state, data })
        console.log("DATA ", data)
      })
    console.log(state)
  }, []);

  const handleDelete = (rowData) => {
    return new Promise((resolve) => {
      axios.delete(`http://localhost:4000/deductions/${rowData.row_id}`);
      resolve()
      const data = [...state.data];
      data.splice(data.indexOf(rowData), 1);
      setState({ ...state, data });
    })
  }

  const handleUpdate = (newData, oldData) => {
    console.log(newData)
    return new Promise((resolve) => {
      axios.put(`http://localhost:4000/deductions/${newData.row_id}`, { newData });
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
        title="Deductions"
        columns={state.columns}
        data={state.data}
        exportButton={true}
        actions={[
          { icon: 'add', tooltip: 'Add Deduction', onClick: handleModalOpen, isFreeAction: true },
        ]}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <FullScreenDialog
        open={state.modalOpen}
        handleClose={handleModalClose}
        component={<AddDeduction />}
        title='Add New Deduction'
      />
    </React.Fragment>
  );
}