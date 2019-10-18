import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FullScreenDialog from '../widgets/FullScreenDialog';
import Register from '../employee/Register';

const useStyles = makeStyles(theme => ({
    circle: {
        backgroundColor: '#17a2b8',
        color: 'white',
        height: '180px',
        width: '180px',
        borderRadius: '70%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: '#7386D5',
            cursor: 'pointer',
        }
    },
}));

const handleClick = () => {
    console.log("kjhkhkjhkj")

};


export default function Home(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.circle} onClick={handleClick}>
                <Typography variant="button" display="block" gutterBottom>
                    <div>
                        {props.icon}
                    </div>
                    <div>
                        {props.title}
                    </div>
                </Typography>
            </div>
        </div>
    )
}