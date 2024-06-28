import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { ProductPage } from './pages/ProductPage';
import { CountPage } from './pages/CountPage';
import { TodoPage } from './pages/TodoPage';
import { Navigation } from './components/Navigation'



const App: React.FC = () => {
  
 
  return(
    <>
    <Navigation />
 <Routes>
    <Route path="/" element={<TodoPage />}/>
    <Route path="/count" element={<CountPage />}/>
    <Route path="/products" element={<ProductPage />} />
    
  </Routes>
  </>
)


}


export default App;
