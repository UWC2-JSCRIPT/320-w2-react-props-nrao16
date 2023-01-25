import logo from './logo.svg';
import './App.css';
//import Picture from './Picture';
import TodoListApp from './TodoListApp/TodoListApp';

function App() {
  return (
    <div className="App">
      <TodoListApp />
      {/* <TodoListForm /> */}
      {/* <h1>Picture</h1>
      <Picture 
      imgUrl='https://media.giphy.com/media/l0MYrokk2rXUsebKw/giphy.gif'
      altTag='Fractal'
      /> */}
    </div>
  );
}

export default App;
