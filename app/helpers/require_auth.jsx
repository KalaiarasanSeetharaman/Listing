import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {

  // If user not authenticated render out to root

  class Authentication extends Component {
    

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        alert("HI");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.loginReducer.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}