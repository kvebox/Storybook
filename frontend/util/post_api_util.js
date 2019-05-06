export const fetchPosts = () => $.ajax({
    method: 'GET',
    url: '/api/posts'
});

export const fetchPost = id => $.ajax({
    method: 'GET',
    url: '/api/posts'
});