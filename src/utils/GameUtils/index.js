const checkForSequence = (option1, option2, option3) => {
    if (option1 === null || option2 === null || option3 === null) {
        return false;
    }
    return option1 === option2 && option2 === option3
};


export const checkForWinner = (board) => {
    // 0 1 2
    // 3 4 5
    // 6 7 8
    let result1;
    let result2;
    
    for (let i = 0; i < 9; i += 3) {
        result1 = checkForSequence(board[i], board[i + 1], board[i + 2]);
        if (result1) {
            console.log("Row Winner")
            return [i, i+1, i+2]
            // return true
        }
        
    }

    for (let i = 0; i < 3; i += 1){
        result2 = checkForSequence(board[i], board[i + 3], board[i + 6])
        if (result2) {
            console.log("Colomn Winner")   
            // return true
            return [i, i+3, i+6]
        }
        
    }
    let result3 = ((board[0] === board[4] && board[4] === board[8]) || (board[1] === board[4] && board[4] === board[7]) || (board[2] === board[4] && board[4] === board[6]))
    if (result3) {
        console.log("We have a Diagonal winner")
        if (result3 === (board[0] === board[4] && board[4] === board[8])) {
            return [0, 4, 8]   
        }
        else if (result3 === (board[1] === board[4] && board[4] === board[7])) {
            return [1, 4, 7]   
        } else if(result3 === (board[2] === board[4] && board[4] === board[6])) {
            return [2, 4, 6]   
        }
        // return true;
    }
    let j = 0;
    for (let i = 0; i < 9; i++) {

        if (isNaN(board[i])) {
            j++;
        }
            
    }
    if (j > 8) {
        return false
    }

}