import React from 'react'
import { createContext, useState } from "react";


export const GameContext = createContext({});


export const GameContextProvider = (props) => {
        const [game, setGame] = useState({
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            player1: {
                choice: "X",
                name: "Smokey",
                score: 0
            },
            player2: {
                choice: "O",
                name: "Ntuthuko",
                score: 0
            },
            turn: "X",
            roundWinner: ""
        })
    
    const resetBoard = () => {
        setGame({
            ...game,
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            turn: "X",
        })
    };

    const toggleChoice = (choice) => choice === "X" ? "O" : "X";

    const switchTurn = () => {
        setGame(prevGame => ({
            ...prevGame,
            player1: {
                ...prevGame.player1,
                choice: toggleChoice(prevGame.player1.choice)
            },
            player2: {
                ...prevGame.player2,
                choice: toggleChoice(prevGame.player2.choice)
            },
            turn: "X"

        }))
    }
        
    const updateBoard = (index) => {
        let updatedBoard = game.board;
        updatedBoard[index] = game.turn;
        setGame({
            ...game,
            board: updatedBoard,
            turn: game.turn === "X" ? "O" : "X"
        });
    };

    const updateBoardDraw = (index) => {
        let updatedBoard = game.board;
        updatedBoard[index] = game.turn;
        setGame({
            ...game,
            board: updatedBoard,
            turn: "DRAW"
        });
    };

    
    const updateScore = (winner) => {
        setGame(prevGame => ({
            ...prevGame,
            [winner]: {
                ...prevGame[winner],
                score: prevGame[winner].score + 1,
            },
            roundWinner: prevGame[winner]
        }));
    };
    const updateScoreDraw = (winner1, winner2) => {
        setGame(prevGame => ({
            ...prevGame,
            [winner1]: {
                ...prevGame[winner1],
                score: prevGame[winner1].score + 0.5,
            },
            [winner2]: {
                ...prevGame[winner2],
                score: prevGame[winner2].score + 0.5,
            },
            roundWinner: `${prevGame[winner1]} and ${prevGame[winner2]}`
        }));
    };
    


    const roundComplete = () => {
        if (game.turn === game.player1.choice) {
            console.log("PLAYER 1 wins")
            updateScore("player1");
        }
        else if (game.turn === game.player2.choice) {
            console.log("PLAYER 2 wins")
            updateScore("player2");
        } else {
            console.log("draw");
            updateScore("player1");
            updateScore("player2");
        }
        switchTurn();
    };

    const roundCompleteDraw = () => {
        
        console.log("Draw");
        updateScoreDraw("player1", "player2");
        switchTurn();
    };

        
    
    return (
        <GameContext.Provider value={{ game, updateBoard, resetBoard, roundComplete, updateBoardDraw, roundCompleteDraw }}>
            { props.children}
        </GameContext.Provider>
    )
}