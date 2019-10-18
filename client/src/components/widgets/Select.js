import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

export default function ControlledOpenSelect(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    function handleChange(event) {
        console.log(event)
        setAge(event.target.value);
        console.log("Select Name: ", event.target.name);
        console.log("Select Value: ", event.target.value);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }

    return (
        <form autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="demo-controlled-open-select">{props.label}</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={props.value}
                    onChange={props.onChange}
                    className={classes.selectEmpty}
                    inputProps={{
                        name: props.name,
                        id: 'demo-controlled-open-select',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        props.options.map(option =>
                            <MenuItem value={option.value}>{option.label}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </form>
    );
}