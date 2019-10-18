import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Register from './Register';
import FullScreenDialog from '../widgets/FullScreenDialog';
import Dialogue from '../widgets/Dialogue';
import ExpansionPanel from '../widgets/ExpansionPanel';
import Table from '../widgets/Table';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Position', field: 'position' },
  { title: 'Email', field: 'email' },
  { title: 'Password', field: 'password' },
]

const data = [
  { id: '1', name: 'Sajeel', position: 'Admin', email: 'sajeel@cwaret.com', password: '********', },
  { id: '2', name: 'Saad', position: 'Moderator', email: 'saad@cwaret.com', password: '********', },
]



export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [state, setState,] = React.useState({
    modalOpen: false,
  });

  const [dialogueOpen, setDialogueOpen] = React.useState(false);

  const handleModalOpen = () => {
    setState({ ...state, modalOpen: true })
  }

  const handleModalClose = () => {
    setState({ ...state, modalOpen: false })
  }

  function handleClickOpen() {
    setDialogueOpen(true);

  }

  function handleClose() {
    setDialogueOpen(false);
  }


  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classNames(classes.title, )} color="textSecondary" gutterBottom>
            Pay'Em User Account
          </Typography>
          <Divider className="mb-4" />
          <Typography variant="h5" component="h2">
            <PersonIcon />
            <span>Muhammad Aown</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <AssignmentIcon />
            Admin
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <EmailIcon />
            cadmin@cwaret.com
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleClickOpen()}>Change Password ?</Button>
        </CardActions>
      </Card>
      <Dialogue
        title="Change Password"
        open={dialogueOpen}
        handleClose={handleClose}
      />
      <div onClick={(event) => handleModalOpen()}>
        <Button size="small" className="mt-3">
          <AddIcon className="ml-2" />
          Add User
        </Button>
      </div>
      <ExpansionPanel
        title="View Users"
        icon={<PeopleIcon />}
        details={
          <Table
            title="Users"
            columns={columns}
            data={data}
            exportButton={false}
            isFreeAction={false}
          />}
      />
      <div>
        <FullScreenDialog
          open={state.modalOpen}
          handleClose={handleModalClose}
          component={<Register />}
          title='Add User'
        />
      </div>
    </React.Fragment>
  );
}
