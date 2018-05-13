import React from 'react'
import './App.scss'
import {Alert, Nav, Navbar, NavItem} from 'react-bootstrap'
import {Redirect, Route, Switch} from 'react-router'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {defaultPath} from '../../configurations/routes'
import GithubImage from './images/github.png'

export class App extends React.Component {
    render() {
        const {routes, navigate, currentLocation, error} = this.props;
        const isCurrentRoute = (path) => currentLocation && currentLocation.pathname === path;
        const clickMenuItem = ({path}) => {
            if (!isCurrentRoute(path)) {
                navigate(path);
            }
        };

        return (
            <div className="App">
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                                <span
                                    className="App-title"
                                    onClick={() => clickMenuItem(routes[0])}
                                >
                                    Euromoney test
                                </span>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {routes.map((route, i) => (
                            <NavItem
                                key={`menu-item-${i}`}
                                eventKey={1}
                                href={`#${route.path}`}
                                active={isCurrentRoute(route.path)}
                                onClick={() => clickMenuItem(route)}
                            >
                                {route.menu}
                            </NavItem>
                        ))}
                    </Nav>
                    <a
                        href="https://github.com/Koeroesi86"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="App-github-link"
                        title="Visit my Github"
                    >
                        <img
                            src={GithubImage}
                            className="App-github-link-image"
                            alt="Github"
                        />
                    </a>
                </Navbar>
                <section className="App-contents">
                    <div className="container">
                        {error && (
                            <Alert bsStyle="danger">
                                An error occured: {error}. Please try again later.
                            </Alert>
                        )}

                        <Switch>
                            {routes.map((route, i) => (
                                <Route
                                    exact
                                    key={`route-item-${i}`}
                                    path={route.path}
                                    component={route.component}
                                />
                            ))}
                            <Redirect exact from="/" to={defaultPath}/>
                        </Switch>
                    </div>
                </section>
                <footer>
                    <a
                        href="https://github.com/Koeroesi86"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="App-github-link"
                        title="Visit my Github"
                    >
                        <img
                            src={GithubImage}
                            className="App-github-link-image"
                            alt="Github"
                        />
                    </a>
                </footer>
            </div>
        );
    }
}

App.defaultProps = {
    routes: [],
    navigate: () => {
    },
};

App.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        component: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.object
        ]),
        menu: PropTypes.string,
        navigate: PropTypes.func,
    })),
    navigate: PropTypes.func,
    error: PropTypes.string,
    currentLocation: PropTypes.shape({
        pathname: PropTypes.string
    }),
};

function mapStateToProps(state) {
    return {
        routes: state.app.routes,
        error: state.app.error,
        currentLocation: state.router.location
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navigate: route => dispatch(push(route))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
