import './App.css'
import Home from './Screen/Home'
import ThemeProvider from './Store/ThemeProvider'
function App() {
  return (
      <ThemeProvider>
        <Home/>
        </ThemeProvider>
  )
}
export default App
