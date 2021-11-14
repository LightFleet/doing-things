let maze = [
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0]
];

function checkPath(start, end) {
    maze[start.y][start.x] = 5;

    const sibs = getValidSibs(start);

    if (sibs.length > 0){
        for (let i=0; i<sibs.length; i++){
            let current = sibs[i]

            let isSolved = sibs[i].x === end.x && sibs[i].y === end.y

            if (isSolved || checkPath(current, end)){
                return true
            }
        }
    }

    return false;
}

function getValidSibs(cord){
    let {x, y} = cord

    let cords = []

    if (maze[y+1] !== undefined){
        if(maze[y+1][x] !== 5 && maze[y+1][x] !== 1){
            cords.push({x: x, y: y+1, val: maze[y+1][x]})
        }
    }
    if (maze[y-1] !== undefined){
        if(maze[y-1][x] !== 5 && maze[y-1][x] !== 1){
            cords.push({x: x, y: y-1, val: maze[y-1][x]})
        }
    }
    if (maze[y][x+1] !== undefined){
        if (maze[y][x+1] !== 5 && maze[y][x+1] !== 1){
            cords.push({x: x+1, y: y, val: maze[y][x+1]})
        }
    }
    if (maze[y][x-1] !== undefined){
        if (maze[y][x-1] !== 5 && maze[y][x-x] !== 1){
            cords.push({x: x-1, y: y, val: maze[y][x-1]})
        }
    }
    return cords
}

console.log(checkPath({x: 3, y: 0}, {x: 5, y: 5}))