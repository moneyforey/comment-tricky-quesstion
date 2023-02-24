import "./styles.css";
import data from "./data.json";
import Comment from "./Comment";
export default function App() {
  return (
    <div className="App">
      <h1>{data.post.title}</h1>
      <h4>{data.post.content}</h4>
      <h5>Author:{data.post.author}</h5>
      <h5>Date:{data.post.date}</h5>
      {data.post.comments.map((el) => (
        <Comment key={el.id} {...el} />
      ))}
    </div>
  );
}
