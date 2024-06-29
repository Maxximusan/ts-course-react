import React, {lazy} from 'react';
import {Routes, Route} from 'react-router-dom'
// import { ProductPage } from './pages/ProductPage';
import { CountPage } from './pages/CountPage';
import { TodoPage } from './pages/TodoPage';
import { Layout } from './components/Layout'

const ProductPage = lazy(() => import('./pages/ProductPage'))

const App: React.FC = () => {
  
 
  return(
    <>
    
 <Routes>
  <Route path="/" element={<Layout/>}>
    
    <Route index element={<TodoPage />}/>
    
    <Route path="/count" element={<CountPage />}/>
    <Route path="/products" element={<ProductPage />} />
  </Route>
  </Routes>
  </>
)


}


export default App;
