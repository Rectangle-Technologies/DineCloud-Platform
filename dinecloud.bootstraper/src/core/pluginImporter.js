// import User_management_PluginComponent from "user_management/RemoteComponent"
import State_management_lib_PluginComponent from "state_management_lib/RemoteComponent"

import React from "react"
// const User_management_PluginComponent = React.lazy(() => import("user_management/RemoteComponent"))
// const Layout_PluginComponent = React.lazy(() => import("layout/RemoteComponent"))
// const Authentication_lib_PluginComponent = React.lazy(() => import("authentication_lib/RemoteComponent"))
// const Transaction_list_PluginComponent = React.lazy(() => import("transaction_list/RemoteComponent"))
// const Account_management_PluginComponent = React.lazy(() => import("account_management/RemoteComponent"))

export default {
    // user_management: User_management_PluginComponent,
    // layout: Layout_PluginComponent,
    // authentication_lib: Authentication_lib_PluginComponent,
    // transaction_list: Transaction_list_PluginComponent,
    // account_management: Account_management_PluginComponent,
    state_management_lib: State_management_lib_PluginComponent
}