import React, { useEffect } from 'react';
import Table from '../widgets/Table';
import FullScreenDialog from '../widgets/FullScreenDialog';
import AddTax from './AddTax';
import axios from 'axios';

export default function TaxList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'val' },
      { title: 'Amount From', field: 'ATTRIB_11' },
      { title: 'Amount Upto', field: 'ATTRIB_12' },
      { title: 'Fixed Amount', field: 'ATTRIB_13' },
      { title: 'Tax %', field: 'ATTRIB_17' },
      { title: 'Dedcription', field: 'ATTRIB_02' },
    ],
    data: [
      
    ],
    modalOpen: false,
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/tax`)
      .then(res => {
        const data = res.data.data
        setState({ ...state, data })
        console.log("DATA ", data)
      })
    console.log(state)
  }, []);

  const handleModalOpen = () =>  {
    setState({ ...state, modalOpen: true })
  
  }
  const handleModalClose = () =>  {
    setState({ ...state, modalOpen: false })
  }

  const handleDelete = (rowData) => {
    return new Promise((resolve) => {
      axios.delete(`http://localhost:4000/tax/${rowData.row_id}`);
      resolve()
      const data = [...state.data];
      data.splice(data.indexOf(rowData), 1);
      setState({ ...state, data });
    })
  }

  const handleUpdate = (newData, oldData) => {
    console.log(newData)
    return new Promise((resolve) => {
      axios.put(`http://localhost:4000/tax/${newData.row_id}`, { newData });
      resolve();
      const data = [...state.data];
      const index = data.indexOf(oldData);
      data[index] = newData;
      setState({ ...state, data });
      console.log("new Data ", newData)
      console.log("Old Data ", oldData)
    })
  }

  return (
    <React.Fragment>
    <Table
        title="Tax"
        columns={state.columns}
        data={state.data}
        exportButton={true}
        actions = {[
          {icon:'add', tooltip: 'Add Tax', onClick: handleModalOpen, isFreeAction: true},
          ]}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <FullScreenDialog 
        open={state.modalOpen}
        handleClose={handleModalClose}
        component={<AddTax />}
        title= 'Add New Tax'
      />
      </React.Fragment>
      );
}