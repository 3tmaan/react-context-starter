// Externals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
// Internals
import AppContext from '../contexts/AppContext';

const propTypes = {
    children: PropTypes.node.isRequired,
};

class AppProvider extends Component {
    state = {
        isPending: true,
        posts: [],
    };

    componentDidMount() {
        this.fetchPosts('https://jsonplaceholder.typicode.com/posts?_limit=5');
    }

    async fetchPosts(url) {
        try {
          const result = await axios.get(url);

          this.setState({
                posts: result.data,
                isPending: false
          });

          return result;
        } catch (error) {
            throw new Error(`API ${error}`);
        }
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    ...this.state,
                }}>
                { this.props.children }
            </AppContext.Provider>
        );
    }
}

AppProvider.propTypes = propTypes;

export default AppProvider;
