const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

app.get("/new-game", (req, res) => {
	res.sendFile(__dirname + "/dist/new-game/index.html");
});

app.get("/vote", (req, res) => {
	res.sendFile(__dirname + "/dist/vote/index.html");
});

io.on("connection", (socket) => {
	socket.on("chat message", (msg) => {
		io.emit("chat message", msg);
	});

	socket.on("login", (user) => {
		console.log(user);
		io.emit("login", user);
	});
});

http.listen(port, () => {
	console.log(`Socket.IO server running at http://localhost:${port}/`);
});
