import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from "react"
import PastOrders from "./components/PastOrders/PastOrders"
import Create from "./components/CreateOrder/Create.jsx"
import Register from "./components/Register/Register.jsx"
import Signin from "./components/Signin/Signin.jsx"
import PrivateRoute from './routes/PrivateRoute';
import NoFoundComponent from './components/NoPageFound/NoFoundComponent';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Signin />}>
          

        </Route>
        <Route path="/register" element={<Register />}>
          
        </Route>

        <Route path="/create" element={<Create />}>
          
        </Route>

        <Route path="/orders" element={<PastOrders />}>
          
        </Route>

        {/* <Route path="*">
          <NoFoundComponent />
        </Route> */}


        {/* <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/orders">
            <PastOrders />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/">
            <Signin />
          </Route>
        </Switch> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
