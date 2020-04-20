import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Rabbit from "../../utils/rabbit";
import { AppCompatToolbar } from "components";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import BottomDrawer from "../../components/BottomDrawer";
import Typography from "@material-ui/core/Typography";
import {
  isLocalStorageSupported,
  MockStorage,
  isZawgyi
} from "../../utils/utils";
import {
  getTimetableList,
  getOfflineTimetableList
} from "./actions/TimetableListAction";
import { getCountryList } from "../settings/actions/SettingsAction";
import { STATE_ID, STATE_NAME } from "../../constants/ActionTypes";
const storage = isLocalStorageSupported() ? localStorage : new MockStorage();
const styles = theme => ({
  progress: {
    top: `calc(100vh/2)`,
    left: `calc(100vw/2.1)`,
    position: `fixed`
  },
  a: {
    textDecoration: `inherit`,
    color: `inherit`
  }
});

export class TimetableList extends React.Component {
  state = {
    days: [],
    bottom: false,
    loading: true
  };
  componentWillMount() {
    this.props.getCountryList(50, 1);
    this.props.getOfflineTimetableList(
      30,
      1,
      !storage.getItem(STATE_ID)
        ? "c408c7a32f1c45e4ae7f1acc8237eac6"
        : storage.getItem(STATE_ID)
    );
  }

  componentWillReceiveProps(props) {
    const { items, isLoading } = props;
    if (items) {
      if (items.length === 0 && isLoading) {
        this.props.getTimetableList(
          30,
          1,
          !storage.getItem(STATE_ID)
            ? "c408c7a32f1c45e4ae7f1acc8237eac6"
            : storage.getItem(STATE_ID)
        );
      } else if (items.length !== 0 && isLoading) {
        this.setState({ days: items, loading: false });
      }
    }
  }

  onCardClick = (e, b) => {
    this.props.history.push(b);
  };

  onMenuClick = () => {
    //TODO implement OnMenu click Here
    this.setState({ bottom: true });
  };

  render() {
    const { bottom, loading } = this.state;
    const { classes } = this.props;
    let list = this.state.days.map((items, index) => {
      return (
        <Card
          key={index}
          onClick={e => this.onCardClick(e, "/details/" + items.objectId)}
          className="time-table-card"
        >
          <CardContent className="card-content">
            <Typography className="card-day" component="div">
              Day {items.day}
            </Typography>
            <Typography
              className="sehri-container"
              color="textSecondary"
              component="div"
            >
              <Typography className="sehri-description">
                {items.sehriTimeDesc}
              </Typography>
              <Typography className="sehri-time">{items.sehriTime}</Typography>
            </Typography>

            <Typography
              className="iftari-container"
              color="textSecondary"
              component="div"
            >
              <Typography className="iftari-description">
                {items.iftariTimeDesc}
              </Typography>
              <Typography className="iftari-time">
                {items.iftariTime}
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      );
    });

    return (
      <div>
        <AppCompatToolbar
          onMenuClick={this.onMenuClick}
          hasMenuButton={true}
          title={
            isZawgyi()
              ? `${
                  !storage.getItem(STATE_NAME)
                    ? "ရန်ကုန်တိုင်း"
                    : storage.getItem(STATE_NAME)
                } အချိန်ဇယား`
              : Rabbit.uni2zg(
                  `${
                    !storage.getItem(STATE_NAME)
                      ? "ရန်ကုန်တိုင်း"
                      : storage.getItem(STATE_NAME)
                  }: အချိန်ဇယား`
                )
          }
        />{" "}
        {loading && (
          <CircularProgress
            className={classes.progress}
            color="secondary"
            size={50}
          />
        )}
        {!loading && <div>{list}</div>}
        <BottomDrawer history={this.props.history} isOpen={bottom} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTimetableList,
      getOfflineTimetableList,
      getCountryList
    },
    dispatch
  );
}

export default connect(
  state => ({
    items: state.TimetableListReducer.items,
    isLoading: state.TimetableListReducer.isFetching,
    paging: state.TimetableListReducer.paging,
    error: state.TimetableListReducer.error
  }),
  mapDispatchToProps
)(withStyles(styles)(TimetableList));
