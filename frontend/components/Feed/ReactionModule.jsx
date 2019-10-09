import React from 'react';

const ReactionModule = (props) => {

    const findReactions = () => {
        if (props.likes.length === 1 && props.likes[0].author.email === props.currentUser.email){
            return 'You like this';
        } 
        for (let i = 0; i < props.likes.length; i++){
            if (props.likes[i].author.email === props.currentUser.email){
                return `You and ${props.likes.length - 1} others`;
            }
        }
        return props.likes.length;
    };


    return (
        <>
        <div className='reactionContainer'>
            <img className='reactionImg' src='/images/react_like.png' />
            <span className='reactionCount'>{findReactions()}</span>
        </div>
        </>
    )

};



export default ReactionModule;