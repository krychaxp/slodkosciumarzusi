import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home lang="pl" />} />
      <Route path="/de" element={<Home lang="de" />} />
    </Routes>
  )
}
