import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <MyNav />

      <SingleBook img='https://images-na.ssl-images-amazon.com/images/I/91vVbxOztSL.jpg' title='Over the Edge  (Troubleshooters series, Book 3)' price={26.04} category='romance' />
      <Welcome />
      <AllTheBooks />



      <MyFooter />
    </>
  )
}

export default App
