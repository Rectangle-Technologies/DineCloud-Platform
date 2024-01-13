import React from "react"
import ImportPlugin from "./pluginImporter"
import OverlayLoader from "./loader"

class PluginInjector extends React.Component {
    constructor(props) {
        super(props)
        this.pluginName = props.pluginName
    }

    renderPlugin() {
        const PluginComponent = ImportPlugin[this.pluginName]
        return <PluginComponent>{this.props.children}</PluginComponent>
    }
    
    render() {
        return (
            <React.Suspense fallback={<OverlayLoader />}>
                {this.renderPlugin()}
            </React.Suspense>
        )
    }
}

export default PluginInjector