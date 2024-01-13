import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { SnackbarProvider } from "notistack";
// import Login from "user_management_bootstraper/Login";
import "./index.css";

class ThemeService extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};

      console.log("ThemeService props", props);
      console.log("ThemeService state", store.getState());
      addStoreReducer("theme", (state = theme, action) => {
          console.log("ThemeService store reducer", state, action);
          return state;
      });
  }

  componentDidUpdate(prevProps, prevState) {
      console.log("ThemeService componentDidUpdate", prevProps, prevState);
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
  console.log("themeStateToProp", state);
  return {
      theme: state.theme,
  };
};

const ThemeStateService = connect(themeStateToProp)(ThemeService);

const App = () => (
  <div className="container">
    HELLO
    {/* <Login callBackIfLoggedIn={() => {console.log("User Already logged in"); alert("User already logged in")}} /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
