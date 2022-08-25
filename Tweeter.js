// The module that manages our posts logic
// Storing all our twits (not the same as tweets)
// Posting a twit
// Commenting on twits
// Removing twits
// Removing comments
//Down!

// A module that manages our rendering - displaying things on the page
// Creating HTML for a twit dynamically
// Creating HTML for comments dynamically
// Rendering all our twits and their comments
// Something that glues both of the above

const Tweeter = function () {
  let _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let nextFreePostId = 3;
  let nextFreeCommentId = 7;
  const getPosts = () => _posts;
  const newFreePostId = () => "p" + nextFreePostId++;
  const newFreeCommentId = () => "c" + nextFreeCommentId++;
  //   const

  //if we get id as a number or as a string it will fit it to be strung
  const fixPostId = (postId) =>
    Number.isInteger(postId) ? `p${postId}` : postId;

  //if we get id as a number or as a string it will fit it to be strung
  const fixCommentId = (commentId) =>
    Number.isInteger(commentId) ? `p${commentId}` : commentId;

  const addPost = (text) =>
    _posts.push({ text: text, id: newFreePostId(), comments: [] });

  const removePost = function (postId) {
    let posts = _posts.filter((post) => post.id != postId);
    _posts = posts;
  };

  const addComment = function (postId, text) {
    const pId = fixPostId(postId);
    for (let index = 0; index < _posts.length; index++) {
      if (_posts[index].id === pId) {
        return _posts[index].comments.push({
          id: newFreeCommentId(),
          text: text,
        });
      }
    }
  };

  const removeComment = function (postId, commentId) {
    const pId = fixPostId(postId);
    const cId = fixCommentId(commentId);
    // console.log(pId);
    // const fixPostId = `p${postId}`;
    // const fixCommentId = `c${commentId}`;
    for (let index in _posts) {
      if (_posts[index].id === pId) {
        const post = _posts[index];
        for (let indexComm in _posts[index].comments) {
          if (post.comments[indexComm].id === cId) {
            post.comments.splice(indexComm, 1);
          }
        }
      }
    }
  };
  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};

// const tweeter = Tweeter();

// const tweets = TweeterLogic();
// console.log(tweets.getPosts());
// tweets.addPost("Eden is the King!!");
// console.log(tweets.getPosts());
// tweets.removePost(3);
// console.log(tweets.getPosts());
// tweets.addPost("Eden is the King!!");

// tweets.addComment(2, "I also think that he really is a king");
// tweets.addComment(2, "I also think that he really is a king");
// // add comment Not work for new posts!!
// tweets.addComment(3, "I also think that he really is a king");
// console.log(tweets.getPosts());
// console.log(tweets.getPosts());
// tweets.removeComment(3, 8);

// tweeter.addPost("This is my own post!");
// tweeter.addPost("2");
// tweeter.addPost("3");
// tweeter.addPost(4);
// tweeter.addPost("5");
// console.log(tweeter.getPosts());
// tweeter.removePost(2);
// tweeter.removePost(3);
// console.log(tweeter.getPosts());

// tweeter.addComment(1, "aiiiii");
// tweeter.addComment(1, "biiiii");
// // tweeter.addComment(2, "ciiiii");
// tweeter.addComment(4, "diiiii");
// tweeter.addComment(5, "eiiiii");
// console.log(tweeter.getPosts());
// tweeter.removeComment(1, 1);
// tweeter.removeComment(4, 3);
// console.log(tweeter.getPosts());
