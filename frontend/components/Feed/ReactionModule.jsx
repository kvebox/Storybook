import React from 'react';

const ReactionModule = (props) => {

    const findReactions = () => {
        return(
        <div className='reactionContainer'>
            <img className='reaction' src='/images/react_like.png' />
            <span className='reactionCount'>1</span>
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