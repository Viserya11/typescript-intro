import './App.css';
import FetchArticles from './components/FetchArticles'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyJumbotron from './components/Jumbotron';

function App() {
  return (
    <div className="App">
      <MyJumbotron/>
     <FetchArticles/>
    </div>
  );
}

export default App;
