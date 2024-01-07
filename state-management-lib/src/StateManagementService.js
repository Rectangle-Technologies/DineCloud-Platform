import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import StateManagementContext from "./context/StateManagementService"

class StateManagementService extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <StateManagementContext.Provider value={{addStoreReducer: this.addStoreReducer}}>
    <Provider store={store}>{this.props.children}</Provider>
  </StateManagementContext.Provider>
  }
}

export default StateManagementService
