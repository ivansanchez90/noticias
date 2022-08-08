import { Route, Routes } from "react-router-dom"
import AppNoticias from "./components/AppNoticias"
import NoEncontrado from "./components/NoEncontrado"
import NoticiaDetail from "./components/NoticiaDetail"
import {NoticiasProvider} from './context/NoticiasProvider'

function App() {
  

  return (
    <NoticiasProvider>
      <Routes>
      <Route path="/" element={<AppNoticias />} />
      <Route path="/description/:publishedAt" element={<NoticiaDetail />} />
      <Route path="*" element={<NoEncontrado />}/>
      </Routes>
      
    </NoticiasProvider>
  )
}

export default App
