import * as React from "react"
import { useParams } from "react-router-dom"
import ErrorBoundary from "../handlers/ErrorBoundary"
import PluginInjector from "./plugins"
import OverlayLoader from "./loader"

const LandingPage = () => {
    return <div>
        <ErrorBoundary>
            <PluginInjector pluginName={"authentication_lib"}>
            </PluginInjector>
        </ErrorBoundary>
    </div>
}

const Home = () => {
    const { mainAppName } = useParams()
    const [appName, setAppName] = React.useState(mainAppName)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        setAppName(mainAppName)
        setIsLoading(true)
    }, [mainAppName])

    React.useEffect(() => {
        if (isLoading) {
            setIsLoading(false)
        }
    }, [isLoading])

    return <div>
        {isLoading ? <OverlayLoader /> :
        <ErrorBoundary>
            <PluginInjector pluginName={"layout"}>
                <PluginInjector pluginName={appName}>
                </PluginInjector>
            </PluginInjector>
        </ErrorBoundary>}
    </div>
}

const routes = [
    {
        path: "/dashboard/:mainAppName",
        element: <Home />,
    },
    {
        path: "/",
        element: <LandingPage />,
    }
]
export default routes
