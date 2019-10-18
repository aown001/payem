import React from 'react';
import classNames from 'classnames'
import Circle from './widgets/Circle';
import { makeStyles } from '@material-ui/core/styles';
import FullScreenDialog from './widgets/FullScreenDialog';
import Register from './employee/Register';
import AddIcon from '@material-ui/icons/Add';
import PeopleIcon from '@material-ui/icons/People';
import PaymentIcon from '@material-ui/icons/Payment';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import Table from './widgets/Table';

const useStyles = makeStyles(theme => ({
    wrapper: {
        width: '100%',
        maxWidth: '750px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 'auto',
    },
}));

const columns = [
    { title: 'Pay Date', field: 'payDate' },
    { title: 'Gross', field: 'gross' },
    { title: 'Net', field: 'net' },
    { title: 'No. Of Employees', field: 'numOfEmployees' },
]

const data = [
    { id: '1', payDate: '1/1/2019', gross: '50000', net: '45000', numOfEmployees: '5', },
    { id: '2', payDate: '1/1/2019', gross: '50000', net: '45000', numOfEmployees: '5', },
]

export default function Home(props) {
    const [state, setState] = React.useState({
        modalOpen: false,
    });

    const handleModalOpen = () => {
        setState({ ...state, modalOpen: true })
    }

    const handleModalClose = () => {
        setState({ ...state, modalOpen: false })
    }

    const handleRedirect = (path) => {
        props.history.push("/" + path);
    }

    const classes = useStyles();
    return (
        <div>
            <div className={classNames(classes.wrapper, "mb-5")}>
                <div onClick={(event) => handleModalOpen()}>
                    <Circle
                        title="Add Employee"
                        icon={<AddIcon />}
                    />
                </div>
                <div onClick={(event) => handleRedirect('employees')}>
                    <Circle
                        title="View Employees"
                        icon={<PeopleIcon />}
                    />
                </div>
                <div onClick={(event) => handleRedirect('run-payroll')}>
                    <Circle
                        title="Run Payroll"
                        icon={<PaymentIcon />}
                    />
                </div>
                <div onClick={(event) => handleRedirect('payroll-settings')}>
                    <Circle
                        title="Payroll Settings"
                        icon={<SettingsApplicationsIcon />}
                    />
                </div>
            </div>
            <div>
                <Table
                    title="Recent PayRolls"
                    columns={columns}
                    data={data}
                    exportButton={true}
                />
            </div>
            <div>
                <FullScreenDialog
                    open={state.modalOpen}
                    handleClose={handleModalClose}
                    component={<Register />}
                    title='Add Employee'
                />
            </div>
        </div>
    )
}