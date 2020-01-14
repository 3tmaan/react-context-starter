// Externals
import React from 'react';
// Internals
import AppContext from '../contexts/AppContext';

function withAppContext(Component) {
    function WrapperComponent(props) {
        return (
            <AppContext.Consumer>
                {state => <Component {...props} context={ state } />}
            </AppContext.Consumer>
        );
    };

    const wrappedComponentName = Component.displayName
    || Component.name
    || 'Component';

    WrapperComponent.displayName = `WrapperComponent(${wrappedComponentName})`;

    return WrapperComponent;
}

export default withAppContext;