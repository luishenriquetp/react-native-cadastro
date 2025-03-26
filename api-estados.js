//api-estados.js
var http = require("http");
const express = require("express");
const app = express();
app.use(require("cors")());

app.get("/", (req, res, next) => {
	res.json({ message: "Tudo ok por aqui!" });
});

app.get("/estados", (req, res, next) => {
	console.log("Retornou todos estados!");
	const ufs = [
		{ id: 1, uf: "AC" },
		{ id: 2, uf: "AL" },
		{ id: 3, uf: "AP" },
		{ id: 4, uf: "AM" },
		{ id: 5, uf: "BA" },
		{ id: 6, uf: "CE" },
		{ id: 7, uf: "DF" },
		{ id: 8, uf: "ES" },
		{ id: 9, uf: "GO" },
		{ id: 10, uf: "MA" },
		{ id: 11, uf: "MT" },
		{ id: 12, uf: "MS" },
		{ id: 13, uf: "MG" },
		{ id: 14, uf: "PA" },
		{ id: 15, uf: "PB" },
		{ id: 16, uf: "PR" },
		{ id: 17, uf: "PE" },
		{ id: 18, uf: "PI" },
		{ id: 19, uf: "RJ" },
		{ id: 20, uf: "RN" },
		{ id: 21, uf: "RS" },
		{ id: 32, uf: "RO" },
		{ id: 33, uf: "RR" },
		{ id: 34, uf: "SC" },
		{ id: 35, uf: "SP" },
		{ id: 36, uf: "SE" },
		{ id: 37, uf: "TO" },
	];
	res.json(ufs);
});

var server = http.createServer(app);
server.listen(3030);
console.log("Servidor escutando na porta 3030...");
