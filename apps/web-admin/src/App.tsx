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
        <Route path="/realtormanage/enroll" Component={router.enrollRealtor}/>
        <Route path="/realtormanage/list" Component={router.partnerRealtorList}/>
      </Routes>
    </>
  )
}

export default App
