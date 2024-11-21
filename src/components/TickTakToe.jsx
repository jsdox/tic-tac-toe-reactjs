import React, { useState } from 'react';
import '../board.css';

const initalboard = ['','','','','','','','',''];
const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8]
    
];

const TickTakToe = () => {
    const [board, setBoard] = useState(initalboard);
    const [isNext, setIsNext] = useState(true);
    const [playerWin, setplayerWin] = useState(false);
    let playerX = 'X';
    let player0 = '0';
    const [currentPlayer, setcurrentPlayer] = useState(playerX);

    const handleOnClick = (index) => {
       
        if (playerWin || board[index]) {
            return true;
        }
        
        const newBoard = [...board];
        newBoard[index] = isNext ? playerX : player0;
        setBoard(newBoard);
        setcurrentPlayer(isNext ? player0 : playerX);
        setIsNext(!isNext);
        isWinner(newBoard)
        

        
    }
    const isWinner = (newBoard) => {
        winner.map((win) => {
            const [a, b, c] = win;
            if (
                newBoard[a]
                && newBoard[a] === newBoard[b]
                && newBoard[a] === newBoard[c]
            ) {
                setplayerWin(newBoard[a]);
            }            
        
        });
    }

    const resetBoard = () => {
        setBoard(initalboard);
        setIsNext(true);
        setcurrentPlayer(playerX);
        setplayerWin(false);
    }

    return (
        <div className="game">
            <div className="status">
                {playerWin && "Player " + playerWin + " Won"}
                {!playerWin && "Player " + currentPlayer + " turn" }
                <button className="reset-button" onClick={() => resetBoard()}>Reset</button>
            </div>
            <div className="board">
                {
                    board.map((board, index) => {
                        return <button 
                            className="cell" 
                            key={index}
                            onClick={() => handleOnClick(index)}
                            >{board}
                            </button>
                    })
                }
            </div>
        </div>
    );

}

export default TickTakToe;