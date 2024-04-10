import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css';

import Layout from './Layout';
import Home from './comps/Home';
import About from './comps/About';
import Contect from './comps/Contect';
import Achivements from './comps/Achivements';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='achives' element={<Achivements/>}/>
      <Route path='contect' element={<Contect/>}/>
      
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
