import Rcon from "rcon";

export default async function handler(req, res) {
  const rcon = new Rcon("91.197.6.19:28146", 25575, ":8znvvR4zW_nAc8");

  rcon.on("auth", () => {
    rcon.send("baltop");
  });

  rcon.on("response", (str) => {
    res.status(200).json({ output: str });
    rcon.disconnect();
  });

  rcon.connect();
}
