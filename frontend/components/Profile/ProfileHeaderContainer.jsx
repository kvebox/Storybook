import React from 'react';
import { connect } from 'react-redux';
import ProfileHeader from './ProfileHeader';


const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);