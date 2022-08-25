// const divPost = (post) =>
//   `<div class=post id=post><p class=name>${post.name}:</p><p class=post-text>${post.text}</p></div>`;
// const divComment = (comment) =>
//   `<div class=comments><p class=name>${comment.text}:</p></div>`;
const Renderer = function () {
  const divPost = (post) =>
    `<div class=post id=${post.id} >
      <p class=post-text>${post.text}</p>
      <div class=display>
        <input type="text" placeholder="Add your comment" id="input" />
        <div class="postComment" >Post comment</div>
      </div>
      <button class=delete >Delete</button>
    </div>`;
  const divComment = (comment) =>
    `<div class=comments id=${comment.id}>
      <p class=name>${comment.text}</p>
      <button class=delete-comment >X</button>
    </div>`;

  const Render = function (posts) {
    $("#posts").empty();

    for (let post of posts) {
      let postBox = divPost(post);
      let comments = post.comments;
      let commentBox = "";
      let div = "";
      for (let comment of comments) {
        commentBox += divComment(comment);
        // $("#posts").append(commentBox);
      }
      div = `<div class=post-container>${postBox}${commentBox}</div>`;
      $("#posts").append(div);
      // $("#posts").append(commentBox);
    }
  };
  return {
    render: Render,
  };
};
// render();
