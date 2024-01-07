import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import StateManagementService from "./StateManagementService"
import { connect } from "react-redux"
import StateManagementContext from "./context/StateManagementService"
import sampleReducer from "./sampleReducer"
import { addStoreReducer } from "./store"

const dispatchFunction = () => (dispatch) => {
  console.log("dispatch function called")
  setTimeout(() => {
    console.log("dispatch function called after 5 seconds")
    dispatch({ type: "SAMPLE_ACTION", payload: "Completed" })
  }, 5000)
}

const TestComponent = (props) => {
  const StateManagementContextValue = React.useContext(StateManagementContext)

  React.useEffect(() => {
    addStoreReducer("test", sampleReducer)
    if (!props.test?.sample) {
      props.dispatchFunction()
    }
  }, [props.auth])

  return (
    <>
    <h1>State Test: </h1>
    <p>{props.test?.sample}</p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    test: state.test
  }
}

const StoreEnabled = connect(mapStateToProps, {dispatchFunction})(TestComponent)

const App = (props) => {
  return (
    <div className="naman-khater_state-management">
      <StateManagementService>
        <StoreEnabled/>
      </StateManagementService>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"))
