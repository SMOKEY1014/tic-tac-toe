import React from 'react'
import { createContext, useState } from "react";
import { genConfig } from 'react-nice-avatar'


export const GameContext = createContext({});


export const GameContextProvider = (props) => {
        const [game, setGame] = useState({
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            player1: {
                choice: "X",
                name: "Player 1",
                score: 0,
                color: "#8437f9",
                avatarConfig: genConfig()
            },
            player2: {
                choice: "O",
                name: "Player 2",
                score: 0,
                color: "#f9c811",
                avatarConfig: genConfig()
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

    const restartGame = () => { 

        setGame({
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            player1: {
                choice: "X",
                name: "Player 1",
                score: 0,
                color: "#8437f9",
                avatarConfig: genConfig()
            },
            player2: {
                choice: "O",
                name: "Player 2",
                score: 0,
                color: "#f9c811",
                avatarConfig: genConfig()
            },
            turn: "X",
            roundWinner: ""
        })
    }
    const updateScore = (winner) => {
        if (winner === false) {
            setGame(prevGame => ({
            ...prevGame,
            player1: {
                ...prevGame.player1,
                score: prevGame.player1.score + 0.5,
            },
            player2: {
                ...prevGame.player2,
                score: prevGame.player2.score + 0.5,
            },
            roundWinner: "draw",
            
            // roundWinner: `${prevGame.player1} and ${prevGame.player2}`
        }));
        } else {

            setGame(prevGame => ({
                ...prevGame,
                [winner]: {
                    ...prevGame[winner],
                    score: prevGame[winner].score + 1,
                },
                // roundWinner: null
                roundWinner: prevGame[winner]
            }));
        }
    };
    // const updateScoreDraw = (winner1, winner2) => {
        
    // };
    


    const roundComplete = (result) => {
        if ((game.turn === game.player1.choice) && result) {
            console.log("PLAYER 1 wins")
            updateScore("player1");
        }
        else if ((game.turn === game.player2.choice) && result) {
            console.log("PLAYER 2 wins")
            updateScore("player2");
        } else {
            console.log("draw");
            // updateScore("player1");
            // updateScore("player2");
            updateScore(result);
        }
        switchTurn();
    };

    const roundCompleteDraw = () => {
        
        console.log("Draw");
        // updateScoreDraw("player1", "player2");
        switchTurn();
    };

        
    
    return (
        <GameContext.Provider value={{ game, restartGame, updateBoard, resetBoard, roundComplete, updateBoardDraw, roundCompleteDraw }}>
            { props.children}
        </GameContext.Provider>
    )
}