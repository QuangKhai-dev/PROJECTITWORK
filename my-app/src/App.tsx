import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.scss';
import './css/main.css'
import UserTemplate from './Templates/UserTemplate/UserTemplate';
import CreateCV from './Pages/User/CreateCV/CreateCV';
import ProfileUser from './Pages/User/ProfileUser/ProfileUser';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route>
        <UserTemplate exact path="/" Component={CreateCV} />
        <UserTemplate exact path="/user" Component={ProfileUser} />
      </Route>
    </BrowserRouter >
  );
}


export default App;
