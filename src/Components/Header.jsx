import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Slide, useScrollTrigger } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display: 'none',
        [theme.breakpoints.down('sm')]: {
        display: 'block',
        }
    },
    title: {
      flexGrow: 1,
    },
    appbar : {
        backgroundColor: "white",
        color: "#003a78"
    },
    appbarHide : {
        display:'none'
    },
    menu : {
        display: "flex",
        justifyContent: 'space-around',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
  }),
);

const Header = () => {
    const classes = useStyles();
    // const [scrollTarget, setScrollTarget] = useState(undefined) 
    const trigger = useScrollTrigger()

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <div className={classes.root}>
            <AppBar position="fixed" classes={{root: classes.appbar}} >
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Zap Tech
                </Typography>
                <div className={classes.menu}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Service</Button>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Career</Button>
                    <Button color="inherit">Contact</Button>
                </div>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
            </div>
        </Slide>
    );
}

export default Header;