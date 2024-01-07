import React from 'react'
import StateManagementService from './StateManagementService' 

const RemoteComponent = (props) => {
    return (
            <StateManagementService>
                {props.children}
            </StateManagementService>
    )
}

export default RemoteComponent