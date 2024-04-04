const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
const port = 3000;
app.post("/pedido", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json(body);
});

app.listen(port, () => {
  console.log(`Server ligado e escutando na porta ${port}.`);
});
