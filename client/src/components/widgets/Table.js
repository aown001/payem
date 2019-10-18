import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

export default function Employee(props) {
    const { data } = props;

    const [state, setState] = React.useState({
        modalOpen: false,
    });
    const [myData, setMyData] = useState(data);

    useEffect(() => {
        console.log(data)
        setMyData(data)
    }, [data])

    return (
        <React.Fragment>
            <MaterialTable
                title={props.title}
                columns={props.columns}
                data={myData}
                onRowClick={props.onRowClick}
                editable={{
                    onRowUpdate: (newData, oldData) => {
                        return props.handleUpdate(newData, oldData)
                    },
                    onRowDelete: (oldData) => {
                        console.log(oldData)
                        return props.handleDelete(oldData)
                    }
                }}
                options={{
                    exportButton: props.exportButton,
                    actionsColumnIndex: -1,
                }}
                actions={
                    props.actions
                }
            />
        </React.Fragment>
    )
}