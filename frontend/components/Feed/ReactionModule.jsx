import React from 'react';

const ReactionModule = (props) => {

    const findReactions = () => {
        return(
        <div className='reactionContainer'>
            <img className='reactionImg' src='/images/react_like.png' />
            <span className='reactionCount'>{props.numLikes}</span>
        </div>
        )
    }


    return (
        <>
        {findReactions()}
        </>
    )

};



export default ReactionModule;