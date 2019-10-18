import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavItem, NavLink } from 'reactstrap';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    function handleClick() {
        setOpen(!open);
    }

    const { Icon, title, items } = props;

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button onClick={handleClick}>
                <Icon className="mr-2" />
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {items.map((item, index) => (
                        <NavItem key={index} className="pl-4">
                            <NavLink tag={Link} to={item.target}>
                                <span className="mr-2">{item.icon}</span>
                                {item.title}
                            </NavLink>
                        </NavItem>
                    ))}
                </List>
            </Collapse>
        </List>
    );
}