const Comment = ({ content, author, date, replies }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        paddingLeft: "1rem",
        margin: "1rem",
        textAlign: "left"
      }}
    >
      <h4>{content}</h4>
      <h5>{author}</h5>
      <h5>{date}</h5>

      {replies?.map((el) => (
        <Comment key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Comment;
