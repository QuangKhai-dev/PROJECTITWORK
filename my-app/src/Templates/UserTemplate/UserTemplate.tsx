import React from 'react'
import { Route } from 'react-router-dom';

interface routeComponent {
    Component: React.FC<any>;
    exact: boolean;
    path: any;
}

const UserTemplate: React.FC<routeComponent> = ({ Component, ...props }) => {
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                return (
                    <Component {...propsComponent} />
                )
            }}
        />
    )
}

export default UserTemplate;