import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { withStyles } from "@material-ui/core/styles";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const styles = theme => ({
  a: {
    textDecoration: `inherit`,
    color: `inherit`
  }
});

class BottomDrawer extends React.Component {
  state = {
    bottom: false
  };

  componentWillReceiveProps(props) {
    this.setState({ bottom: props.isOpen });
  }

  toggleDrawer = (side, open) => () => {
    this.setState({ [side]: open });
  };

  onListItemClick = (e, url) => {
    this.props.history.push(url);
  };

  render() {
    const { bottom } = this.state;

    return (
      <Drawer
        open={bottom}
        onClose={this.toggleDrawer("bottom", false)}
        anchor="bottom"
      >
        <div
          role="button"
          onClick={this.toggleDrawer("bottom", false)}
          onKeyDown={this.toggleDrawer("bottom", false)}
        >
          <List>
            <ListItem
              onClick={e =>
                this.onListItemClick(e, "/settings/locationSettings")
              }
              button
            >
              <MyLocationIcon />

              <ListItemText primary="Change Locations" />
            </ListItem>

            <ListItem
              onClick={e => this.onListItemClick(e, "/settings/fontSettings")}
              button
            >
              <FontDownloadIcon />

              <ListItemText primary="Font Settings" />
            </ListItem>

            <ListItem
              onClick={e => this.onListItemClick(e, "/settings/credits")}
              button
            >
              <GroupIcon />

              <ListItemText primary="Credits" />
            </ListItem>

            <ListItem
              onClick={e => this.onListItemClick(e, "/settings/license")}
              button
            >
              <LocalLibraryIcon />

              <ListItemText primary="Licenses" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(BottomDrawer);
