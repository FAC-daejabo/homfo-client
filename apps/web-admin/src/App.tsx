import './App.css'
import {Routes, Route} from 'react-router-dom'
import * as router from './routes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={router.home}/>
        <Route path="/login" Component={router.login}/>
        <Route path="/register" Component={router.register}/>
        <Route path="/usermanage/employee" Component={router.employee}/>
      </Routes>
    </>
  )
}

export default App
