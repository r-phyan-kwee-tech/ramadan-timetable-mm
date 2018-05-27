import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

export default class BottomDrawer extends React.Component {
    state = {
        bottom: false
    }

    componentWillReceiveProps(props) {
        this.setState({ bottom: props.isOpen })
    }

    toggleDrawer = (side, open) => () => {
        this.setState({ [side]: open });
    };

    render() {
        const { bottom } = this.state;
        return (<Drawer
            open={bottom}
            onClose={this.toggleDrawer('bottom', false)}
            anchor="bottom">
            <div
                role="button"
                onClick={this.toggleDrawer('bottom', false)}
                onKeyDown={this.toggleDrawer('bottom', false)}>
                <List >
                    <ListItem button>

                        <MyLocationIcon />

                        <ListItemText primary="Change Locations" />
                    </ListItem>

                    <ListItem button>

                        <FontDownloadIcon />

                        <ListItemText primary="Font Settings" />
                    </ListItem>
                    <ListItem button>

                        <GroupIcon />

                        <ListItemText primary="Credits" />
                    </ListItem>
                    <ListItem button>

                        <LocalLibraryIcon />

                        <ListItemText primary="Licenses" />
                    </ListItem>
                </List>
            </div>
        </Drawer>)
    }
}