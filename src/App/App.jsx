import Add from '../Components/Container/Add'
import PostContainer from '../Components/Container/PostContainer'
import Header from '../Components/Header'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header/>
      <Add/>
      <hr/>
      <PostContainer/>
    </div>
  )
}

export default App
