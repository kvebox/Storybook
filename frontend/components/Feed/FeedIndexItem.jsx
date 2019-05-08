import React from 'react';



export default ({post}) => {
    

    // let date = post.created_at;
    // let year = date.slice(0, 4);
    // let month = date.slice(5,7);
    
    return (
        <li className="posts">
            <div>
                <a href={`#/users/${post.author.id}`}>{`${post.author.first_name} ${post.author.last_name}`}</a>
            </div>
            
            <div>{post.body}</div>

            <div>
                <button>Like</button>
                <button>Comment</button>
                <button>Delete</button>
            </div>

            <form>
                <input type="text" 
                       placeholder="Write a comment..."/>
            </form>

        </li>
    );
};
// Time.zone = 'Central Time (US & Canada)'
// {/* {Time.at(1364046539).in_time_zone("Eastern Time (US & Canada)").strftime("%m/%d/%y %I:%M %p")} */}