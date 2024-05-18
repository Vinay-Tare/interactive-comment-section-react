import { useState } from "react";

const NewComment = ({
  currentUser,
  handleSubmit,
  placeholder = "Add comment...",
  initialText = "",
  isEdit = false,
  buttonText
}) => {
  const [text, setText] = useState(initialText);
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form
      className={isEdit ? "edit-comment" : "new-comment-container"}
      onSubmit={onSubmit}
    >
      <textarea
        className="new-comment"
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {!isEdit && (
        <img
          className="new-comment-avatar"
          src={currentUser.image}
          alt={currentUser.username}
        />
      )}
      <button className="submit" type="submit">
        {buttonText}
      </button>
    </form>
  );
}


export default NewComment;
