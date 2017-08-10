import React from 'react';


class Comments extends React.Component {

  renderComment(comment, i) {
      return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button onClick={() => {this.props.removeComment(this.props.match.params.postId, i)}} className="remove-comment">&times;</button>
          </p>
        </div>
      )
  }

  handleSubmit(e){
    e.preventDefault();
    const { postId } = this.props.match.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render(){
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;
