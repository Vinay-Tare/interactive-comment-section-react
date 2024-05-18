import './App.css';
import CommentList from './components/CommentList';
import data from "./data.json";

function App() {
  const currentUser = data.currentUser;

  return (
    <div className="App">
      <CommentList currentUser={currentUser} />
    </div>
  );
}

export default App;
