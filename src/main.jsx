import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Sobre from './routes/Sobre.jsx';
import Portifolio from './routes/Portifolio.jsx';
import Contato from './routes/Contato.jsx';
import Error from './routes/Error.jsx';
import Admin from './routes/Admin.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/Home', element: <Home />},
      {path: '/Sobre', element: <Sobre />},
      {path: '/Portifolio', element: <Portifolio />},
      {path: '/Contato', element: <Contato />},
      {path: '/Admin',element:<Admin />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
