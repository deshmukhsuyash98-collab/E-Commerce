import './App.css'
import Home from './Screen/Home'
import ThemeProvider from './Store/ThemeProvider'
import {Routes,Route} from 'react-router-dom'
import Pdp from './Screen/Pdp'
import Category from './Screen/Category'
function App() {
  return (
      <ThemeProvider>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<Pdp/>}/>
        <Route path="/category/:category" element={<Category/>}></Route>
        </Routes>
        </ThemeProvider>
  )
}
export default App
