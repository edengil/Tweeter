const tweeter = Tweeter();
const renderer = Renderer();
renderer.render(tweeter.getPosts());
const rend = () => renderer.render(tweeter.getPosts());

const post = function () {
  const text = $("#input").val();
  tweeter.addPost(text);
  renderer.render(tweeter.getPosts());
  // rend();
};
// #postComment
$("#posts").on("click", ".postComment", function () {
  const text = $(this).closest(".display").find("input").val();
  const id = $(this).closest(".post").attr("id");
  console.log(id, text);
  tweeter.addComment(id, text);
  renderer.render(tweeter.getPosts());
});

$("#posts").on("click", "button.delete", function () {
  let divPost = $(this).closest(".post");
  let id = divPost.attr("id");
  tweeter.removePost(id);
  // renderer.render(tweeter.getPosts());
  // console.log(id);
  renderer.render(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  let divPost = $(this).closest(".post-container").find(".post");
  let pId = divPost.attr("id");
  let divComment = $(this).closest(".comments");
  let cId = divComment.attr("id");
  console.log(pId, cId);
  tweeter.removeComment(pId, cId);
  renderer.render(tweeter.getPosts());
});
