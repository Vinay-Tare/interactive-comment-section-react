import Comment from "./Comment";
import NewComment from "./NewComment";
import { useState } from "react";
import data from "../data.json";
import { v4 as uuid } from "uuid";

function CommentList({ currentUser }) {
  const allData = data;
  const [commentsData, setCommentsData] = useState(allData.comments);
  const [activeComment, setActiveComment] = useState(null);

  const createComment = async (text) => {
    return {
      content: text,
      createdAt: "Just now",
      id: uuid(),
      replies: [],
      score: 1,
      user: currentUser,
    };
  };

  const addComment = (text) => {
    createComment(text).then((comment) => {
      setCommentsData([...commentsData, comment]);
    });
  };

  const deleteComment = (commentId) => {
    for (let i = 0; i < commentsData.length; i++) {
      let updatedCommentsData;
      if (commentsData[i].id === commentId) {
        updatedCommentsData = commentsData.filter(
          (backendComment) => backendComment.id !== commentId
        );
      }
      setCommentsData(updatedCommentsData);
    }
  };

  const updateComment = (text, commentId) => {
    const updatedCommentsData = commentsData.map((backendComment) => {
      if (backendComment.id === commentId) {
        return { ...backendComment, content: text }
      }
      return backendComment
    })
    setCommentsData(updatedCommentsData)
    setActiveComment(null)
  }

  return (
    <main>
      {commentsData.map((comment) => (
        <Comment
          key={comment.id}
          currentUser={currentUser}
          replies={comment.replies}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          deleteComment={deleteComment}
          addComment={addComment}
          updateComment={updateComment}
          {...comment}
        />
      ))}
      <NewComment currentUser={currentUser} handleSubmit={addComment} initialText='' buttonText='send' />
    </main>
  );
}

export default CommentList;
