var WebSocketServer = require('websocket').server;
var http = require('http');

var game = require("./game");

//Global variable
var history = {}

var server = http.createServer(function(request, response) {
  //WebSockets Server
});
server.listen(8081, function() { });

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);

  // This is the most important callback for us, we'll handle
  // all messages from client here.
  connection.on('message', function(message) {
      console.log("Received: " + JSON.stringify(message));

      //THERE HAS TO BE A BETTER WAY TO EXTRACT PAYLOAD AS JSON
      /* Extracting Payload Data and sending response based on message type */
      var messageData = JSON.stringify(message);
      var data = JSON.parse(messageData);
      var payload = JSON.parse(data.utf8Data);
      /* End of Payload extraction*/

    if (payload.msg === 'INITIALIZE') {
        console.log("INITIALIZE");
        game.initializeNewGame();
      //THE RESPONSE OBJECT
      var reply = {
        "id": 1,
        "msg": "INITIALIZE",
        "body": {
            "newLine": null,
            "heading": "Player 1",
            "message": "Awaiting Player 1's Move"
        }
    };
    }

    else if(payload.msg === 'NODE_CLICKED') {
        //Start Nodes have id 2
        if(payload.id == 2) {
        if(game.IsValidStartNode(payload.body)) {
            var reply = {
                "id": 2,
                "msg": "VALID_START_NODE",
                "body": {
                    "newLine": null,
                    "heading": "Player 2",
                    "message": "Select a second node to complete the line."
                }
            };
        }
        else {
            var reply = {
                "id": 2,
                "msg": "INVALID_START_NODE",
                "body": {
                    "newLine": null,
                    "heading": "Player 2",
                    "message": "Not a valid starting position."
                }
            }
        }

        }
        //End nodes have id 3
        else if(payload.id == 3) {
            var reply = {
                "id": 3,
                "msg": "VALID_END_NODE",
                "body": {
                    "newLine": {
                        "start": {
                            "x": 0,
                            "y": 0
                        },
                        "end": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "heading": "Player 1",
                    "message": null
                }
            };
        }
    }

    else if(payload.msg === 'ERROR') {
    }

    console.log("REPLY: " + JSON.stringify(reply));
    connection.send(JSON.stringify(reply));
  });

  connection.on('close', function(connection) {
    // close client connection
    connection.close();
  });
});
