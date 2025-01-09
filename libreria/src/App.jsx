import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import books from './data/scifi.json';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <MyNav />

      <BookList scifi={books} />
      <Welcome />
      <AllTheBooks />



      <MyFooter />
    </>
  )
}

export default App
