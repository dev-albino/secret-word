import React from 'react'
import "../CSS/StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para iniciar!</p>
      <button onClick={startGame}>Iniciar o Jogo</button>
    </div>
  )
}

export default StartScreen
