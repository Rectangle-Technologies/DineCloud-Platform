import React from "react"
import { createBrowserRouter, RouterProvider, Link, useNavigate } from 'react-router-dom'
import routes from "./routes"
import ErrorBoundary from "../handlers/ErrorBoundary"

class RouterService extends React.Component {
    render() {
        return <ErrorBoundary>
                <RouterProvider router={createBrowserRouter(routes)} />
            </ErrorBoundary>
    }
}

export const LinkURL = Link;

export const useNavigateCore = useNavigate;

export default RouterService
