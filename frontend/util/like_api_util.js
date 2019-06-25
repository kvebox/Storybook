export const fetchPostLikes = post => $.ajax({
    method: 'GET',
    url: `/api/posts/${post.id}/likes`
});

export const deletePostLike = (post, like) => $.ajax({
    method: 'DELETE',
    url: `/api/posts/${post.id}/likes/${like.id}`
});