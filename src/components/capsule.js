import React, { useEffect } from "react";
import { GameContext } from '../providers/game'

const Capsule = (props) => {
    const i = props.i
    const { game, setGame, turn, setTurn, result } = React.useContext(GameContext)
    const handleClick = () => {
        var tempGame = game
        if (game[i] === ''&&result.state==='none') {
            if (turn === 'x') {
                tempGame[i] = 'x'
                setGame(tempGame)
                setTurn('o')
            }
            else {
                tempGame[i] = 'o'
                setGame(tempGame)
                setTurn('x')
            }
        }
    }
    return (
        <div className="Capsule" onClick={handleClick}>
            <h1 className="play">{game[i]}</h1>
        </div>
    )
}
export default Capsule