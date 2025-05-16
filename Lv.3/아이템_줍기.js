function solution(rectangle, characterX, characterY, itemX, itemY) {
    let board = Array.from({length: 12}, () => Array(12).fill(0));
    for(square of rectangle){
        fillSquare(square, board);
    }

    function fillSquare(coordinates, arr){
        for(let i=coordinates[1]; i<= coordinates[3]; i++){
            for(let j=coordinates[0]; j<=coordinates[2]; j++){
                arr[i][j] = 1;
            }
        }
    }
    
    function removeExceptEdges(coordinates, arr){
        for(let i=coordinates[1]+1; i<= coordinates[3]-1; i++){
            for(let j=coordinates[0]+1; j<=coordinates[2]-1; j++){
                arr[i][j] = 0;
            }
        }
    }
    
    board.forEach(row => console.log(row.join(' ')));
    return null;
}

const rectangle = [[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]];
const characterX = 1;
const characterY = 3;
const itemX = 7;
const itemY = 8;

solution(rectangle, characterX, characterY, itemX, itemY);