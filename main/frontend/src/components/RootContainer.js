import React from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {auth} from "./actions/MainAction";

import {HeaderComponent} from './Header';
import {RequirementModelComponent} from './RequirementModel';
import Registration from "./Registration";
import Login from './Login';
import NotFound from './NotFound';


class RootContainerComponent extends React.Component {

  componentDidMount() {
    this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/release-buddy/login" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  };

  render() {
    let {PrivateRoute} = this;
    return (
        <BrowserRouter>
            <HeaderComponent/>
            <Switch>
                <PrivateRoute exact path="/release-buddy/" component={RequirementModelComponent} />
                <Route exact path="/release-buddy/register" component={Registration} />
                <Route exact path="/release-buddy/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    }
  }
};

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);