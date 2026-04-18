import { Rcon } from "rcon-client";
import http from "http";

const server = http.createServer(async (req, res) => {
  try {
    const rcon = await Rcon.connect({
      host: "91.197.6.19:28146",
      port: 25575,
      password: ":8znvvR4zW_nAc8"
    });

    const output = await rcon.send("baltop");
    await rcon.end();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ output }));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(process.env.PORT || 3000);
