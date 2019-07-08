# [Storybook][heroku]

[heroku]: https://fsp-storybook.herokuapp.com/
[postCreation]: https://1.bp.blogspot.com/-YH7UQOz1Rgw/XSPH9utzdHI/AAAAAAAABXs/84ZY8UWyuEUpUiI791D0vHwg-VqT1cRIACLcBGAs/s1600/post_creation.gif

Storybook is a two part project: one half a clone of Facebook, the other an eventual redesign of a social media and networking website created with custom icons, illustration, and motion graphics.

## Technologies
* Storybook is written primarily in HTML/CSS/JavaScript with React.js/Redux on the frontend, built on PostgreSQL and Ruby on Rails and hosted on Heroku.

## Features
* Secure frontend to backend user authentication using BCrypt.
* Comment creation and deletion (currently a big buggy).
# Post creation, editing, and deletion
![alt text][postCreation]
Facebook's liberal combination of dropdowns and modals was a bit tricky to navigate when starting out, but could be circumvented with switch case components and event listeners that would check for their respective reference element:
```javascript
let dropdown = null;
switch (this.state.type){
    case 'postComment':
        dropdown = 
            (this.state.dropdown) ?
                <ul ref={this.node} className='postCommentDropdownContainer'>
                    <li className='postCommentDropdownListItem'
                        onClick={() => this.triggerPostCommentEditModal()}>
                        <img className='postCommentIcon'
                        src='/images/comment_edit.png'/>Edit...</li>

                    <li className='postCommentDropdownListItem'
                        onClick={() => this.deletePostComment()}>
                    <img className='postCommentIcon'
                        src='/images/comment_delete.png' />Delete...</li>
                </ul>
                : ''
        return dropdown;
    default: 
        dropdown = 
            (this.state.dropdown) ?
                <ul ref={this.node} className='dropdownContainer'>
                    <li onClick={() => this.triggerEditModal()}
                        className='dropdownListItem'>Edit Post</li>

                    <div className='dropdownSpacer'></div>
                    <li className='dropdownListItem'
                        onClick={() => this.deletePost()}>Delete</li>
                </ul>
                : ''
        return dropdown;
}
```

The modal itself follows a similar idea. As the post creation modal was rendered in different widths and positions on the profile and feed components, it was necessary to have those elements be controlled by the <div> elements that contained them. The solution I ultimately followed was to have the modal be returned and replace the placeholder when it was clicked:
  
```javascript
returnCreate() {
  if (this.state.modal){
      return <div className='postModal'>
          <CreatePostModal currentUser = {this.props.currentUser} 
                           hideModal = {this.hideModal}
                           createPost = {this.props.createPost}/>
      </div> 
  
  } else {
  return <div className='postNormal'
              onClick={() => this.showModal()}><PostCreateWidgetContainer /></div>
  }
}
```


## Future features
* Reskin + redesign
* Expanded post creation that allows uploading of photos
* Liking
* Friending
* Search
* Image upload + avatar editing
* Widgets of all kinds~


## Assets
Recreated FB icons as encountered
<img alt="icons" src="https://1.bp.blogspot.com/-1RFR6u6iU6c/XSNtkkH3-aI/AAAAAAAABWo/f44CjvNw1rssvtp1s1RVOIQ6vfMX_IMzQCLcBGAs/s1600/fb_icons_placeholder.png">
