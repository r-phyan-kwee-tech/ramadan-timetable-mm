import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Rabbit from "../../utils/rabbit";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import DetailHeader from "./DetailHeader";
import DuaInfoTabFragment from "./DuaInfoTabFragment";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
});
class TimeTableDetailsFragment extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { theme, duaMmUni, duaMmZawgyi, duaEn, duaAr, isZawgyi } = this.props;
    return (
      <div className="root-container">
        <DetailHeader isZawgyi={isZawgyi} {...this.props} />
        <div className="tab-container">
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Dua(MM)" />
              <Tab label="EN" />
              <Tab label="دُعَاء‎" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <DuaInfoTabFragment
                duaInfo={isZawgyi ? duaMmUni : duaMmZawgyi}
                title={
                  isZawgyi
                    ? "ယနေ့ ဖတ်ရမည့်ဒိုအာ"
                    : Rabbit.uni2zg("ယနေ့ ဖတ်ရမည့်ဒိုအာ")
                }
              />
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <DuaInfoTabFragment
                duaInfo={duaEn}
                title="Today Dua to ask for"
              />
            </TabContainer>
            <TabContainer dir={theme.direction}>
              <DuaInfoTabFragment
                duaInfo={duaAr}
                title={`اليوم دعاء أن تطلب`}
              />
            </TabContainer>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

export default withStyles(styles, { withTheme: true })(
  TimeTableDetailsFragment
);
