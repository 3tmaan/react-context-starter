// Externals
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// Internals
import withAppContext from '../hocs/withAppContext';
// Theming & Styling
import Styles from './app.css';

const propTypes = {
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { context: { isPending, posts } } = this.props;

        return (
            <Fragment>
                <section className={ Styles.container }>
                    <h1>List of posts</h1>
                    <ul>
                    { !isPending && posts.map(post => (
                        <li key={ post.id }>{ post.title }</li>
                    )) }
                    </ul>
                </section>
            </Fragment>
        );
    }
}

App.propTypes = propTypes;

export default withAppContext(App);