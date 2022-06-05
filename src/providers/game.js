
import React, { useState, useEffect } from "react";

export const GameContext = React.createContext({})

export const GameProvider = (props) => {
    const [game, setGame] = useState(['', '', '', '', '', '', '', '', ''])
    const [turn, setTurn] = useState('x')
    const [result, setResult] = useState({ winner: "none", state: "none" });
    useEffect(() => {
        checkIfTie()
    }, [turn])
    useEffect(() => {
        console.log(result)
    }, [result])

    let lastPlayer = () => {
        if (turn === 'x') {
            return ('o')
        } else {
            return ('x')
        }
    }
    const checkWin = () => {
        let player = lastPlayer()
        if (game[0] != '' && game[0] === game[1] && game[1] === game[2]
            || game[3] != '' && game[3] === game[4] && game[4] === game[5]
            || game[6] != '' && game[6] === game[7] && game[7] === game[8]
            || game[0] != '' && game[0] === game[3] && game[3] === game[6]
            || game[4] != '' && game[4] === game[1] && game[1] === game[7]
            || game[2] != '' && game[2] === game[5] && game[5] === game[8]
            || game[0] != '' && game[0] === game[4] && game[4] === game[8]
            || game[2] != '' && game[2] === game[4] && game[4] === game[6]) {
            setResult({ winner: player, state: player + " WINS" })
            return(true)
        }else{return(false)}
    };
    const checkIfTie = () => {
        let fill = true
        let status = checkWin()
        for (var i = 0; i < 9; i++) {
            if (game[i] === '') {
                fill = false
            }
        }
        if (fill&&!status) {
            setResult({ winner: "none", state: "TIE" })
        }

    };
    const restart=()=>{
        setGame(['', '', '', '', '', '', '', '', ''])
        setResult({ winner: "none", state: "none" })
        setTurn('x')
    }
    return (
        <GameContext.Provider value={{ game, setGame, turn, setTurn, result, setResult, restart }}>
            {props.children}
        </GameContext.Provider>
    )
}