import { useState } from 'react'
import Board from './Board'
import './App.css'

function App() {
  return (
    <div className="game">
      <h1>Tic-Tac-Toe App</h1>
      <Board />
    </div>
  )
}

export default App

