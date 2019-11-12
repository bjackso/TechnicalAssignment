/*
GAME RULES:

1. The game is played on a 4x4 grid of 16 nodes.
2. Players take turns drawing octilinear lines connecting nodes.
3. Each line must begin at the start or end of the existing path, so that all lines form a continuous path.
4. The first line may begin on any node.
5. A line may connect any number of nodes.
6. Lines may not intersect.
7. No node can be visited twice.
8. The game ends when no valid lines can be drawn.
9. The player who draws the last line is the loser.
*/

/*
 ************ GLOBAL VARIABLES ************
*/

//Maintain a list of all visited nodes to make sure no node is visited twice
var visitedNodes
//Current lines drawn on the grid
var lines
//Maintain start and end of the existing path, to determine validity of node clicks
var endOfPaths
//Current nodes to send on VALID_END_NODE
var currentStartNode
var currentEndNode
//Current Player, 1 by default, at the beginning of the game
var currentPlayer

var initializeNewGame = function() {
    visitedNodes = []
    lines = []
    endOfPaths = []
    currentStartNode = {}
    currentEndNode = {}
    currentPlayer = 1;
}
/*
 ************ END GLOBAL VARIABLES ************
*/

//Check if newLine instersects with existing lines
var checkIntersection = function(newLine, lines) {
    /*
    ALGORITHM TO DETERMINE POINT OF INTERSECTION BETWEEN 2 LINES
    */
}

var arrayContainsObject = function(stateArray, obj){
    var valid = false;
    for(var i = 0; i < stateArray.length; i++) {
        var element = stateArray[i];
        if((element.x == obj.x) && (element.y == obj.y))
        {
            valid = true;
            break;
        }
    }
    return valid;
}

//Check if it is a valid start node
var IsValidStartNode = function(node) {
    if(arrayContainsObject(endOfPaths, node)) {
        return true;
    }
    else {
        return false;
    }
}

//Check if it is a valid end node
var IsValidEndNode = function(node) {
    /*
    1. End node not visited
    2. Line doesn't intersect with existing lines
    3. Check if end of game
    4. Send appropriate response
    */
}

var isGameOver = function() {
    /*1. Determine if game's over after each validEndNode
      2. The player who draws the last line is the loser
      3. Return winner player number
    */
}

module.exports.initializeNewGame = initializeNewGame;
module.exports.IsValidStartNode = IsValidStartNode;
module.exports.IsValidEndNode = IsValidEndNode;
