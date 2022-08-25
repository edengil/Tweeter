
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
      }
      div = `<div class=post-container>${postBox}${commentBox}</div>`;
      $("#posts").append(div);
    }
  };
  return {
    render: Render,
  };
};
// render();
