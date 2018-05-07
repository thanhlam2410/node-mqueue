let socketio = require("socket.io")();

function main(port, cacheDir) {
    socketio.on("connection", onConnection);
    socketio.listen(port);
}

function onConnection(socket) {
    socket.on("subcribe", onSubcribe);

}

function onSubcribe(data) {
    console.log(this);
    console.log(data);
}

module.exports = {
    main
}