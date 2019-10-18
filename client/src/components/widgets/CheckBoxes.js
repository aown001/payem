import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function CheckboxLabels(props) {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
        console.log("Radio Checked ", event.target.checked)
    };

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{props.label}</FormLabel>
                <FormGroup row>
                    {
                        props.options.map(option =>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={state.checkedA}
                                        onChange = {props.onChange}
                                        value={true}
                                        name= {props.name}
                                        disabled= {props.disabled}
                                    />
                                }
                                label={option.label}
                            />
                        )
                    }
                </FormGroup>
            </FormControl>
        </div>
    );
}