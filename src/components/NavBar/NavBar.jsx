import {AppBar, Toolbar, Typography  } from "@material-ui/core";
import useStyle from './Styles';

const NavBar = () => {
    const classes = useStyle();
    return ( 
        <>
            <AppBar className={classes.appBar} position="fixed" color="inherit">
                <Toolbar className={classes.customizeToolbar}>
                    <Typography className={classes.heading} variant="h4" align="center">
                        GEMOGRAPHY FRONTEND TEST
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}></div>
        </>
     );
}
 
export default NavBar;