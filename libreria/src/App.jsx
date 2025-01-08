import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <MyNav />
      <Welcome />
      <MyFooter />
    </>
  )
}

export default App
