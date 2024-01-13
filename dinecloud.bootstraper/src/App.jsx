import "./index.css";
import { connect } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import RouterService from "./core/router";
import State_management_lib_PluginComponent from "state_management_lib/RemoteComponent";
import store, { addStoreReducer } from "state_management_lib/store";
import theme from "./core/theme";
import ThemeContext from "./core/ThemeContext";
import OverlayLoader from "./core/loader";

class ThemeService extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
      addStoreReducer("theme", (state = theme, action) => {
          return state;
      });
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevProps.theme !== this.props.theme) {
          this.setState({
              theme: this.props.theme,
          });
      }
  }

  render() {
      return (
          <ThemeProvider theme={theme}>
              <ThemeContext.Provider value={theme}>
                  {this.props.children}
              </ThemeContext.Provider>
          </ThemeProvider>
      );
  }
}

const themeStateToProp = (state) => {
  return {
      theme: state.theme,
  };
};

const ThemeStateService = connect(themeStateToProp)(ThemeService);

class StateManagementService extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
      return (
          <React.Suspense fallback={<OverlayLoader />}>
              <State_management_lib_PluginComponent>
                  {this.props.children}
              </State_management_lib_PluginComponent>
          </React.Suspense>
      );
  }
}
class App extends React.Component {
  render() {
      return (
          <div className="dinecloud-app">
              <StateManagementService>
                  <ThemeStateService>
                      <RouterService />
                  </ThemeStateService>
              </StateManagementService>
          </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("dinecloud-application"));
