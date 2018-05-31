import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles';
import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const styles = theme => ({
    a: {
        textDecoration: `inherit`,
        color: `inherit`
    }
})

class BottomDrawer extends React.Component {
    state = {
        bottom: false
    }

    componentWillReceiveProps(props) {
        this.setState({bottom: props.isOpen})
    }

    toggleDrawer = (side, open) => () => {
        this.setState({[side]: open});
    };

    render() {
        const {bottom} = this.state;
        const {classes} = this.props;
        return (
            <Drawer
                open={bottom}
                onClose={this.toggleDrawer('bottom', false)}
                anchor="bottom">
                <div
                    role="button"
                    onClick={this.toggleDrawer('bottom', false)}
                    onKeyDown={this.toggleDrawer('bottom', false)}>
                    <List >
                        <Link to="/settings/locationSettings" className={classes.a}>

                            <ListItem button>

                                <MyLocationIcon/>

                                <ListItemText primary="Change Locations"/>
                            </ListItem>
                        </Link>
                        <Link to="/settings/fontSettings" className={classes.a}>
                            <ListItem button>

                                <FontDownloadIcon/>

                                <ListItemText primary="Font Settings"/>
                            </ListItem>
                        </Link>
                        <Link to="/settings/credits" className={classes.a}>
                            <ListItem button>

                                <GroupIcon/>

                                <ListItemText primary="Credits"/>
                            </ListItem>
                        </Link>
                        <Link to="/settings/license" className={classes.a}>
                            <ListItem button>

                                <LocalLibraryIcon/>

                                <ListItemText primary="Licenses"/>
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
        )
    }
}

export default withStyles(styles)(BottomDrawer);