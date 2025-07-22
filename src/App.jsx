import { Routes, Route } from 'react-router-dom'
import ConversationPage from './components/ConversationPage.jsx'
import HomePage from './components/HomePage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/conversation/:id" element={<ConversationPage />} />
    </Routes>
  )
}

export default App
