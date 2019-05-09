import React from 'react';
import { connect } from 'react-redux';
import FeedNavigationBar from './FeedNavigationBar';

const mapStateToProps = state => {
    let users = state.entities.users;
    return {
        currentUser: users[state.session.id],
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedNavigationBar);


