import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ message: "Hello Fam from Coffe and Code" });
});
app.get("/coffee", (req, res) => {
  res.send({ message: "Hello Fam from Coffe and Code" });
});

app.listen(PORT, () => {
  console.log(`Server is running on local host at http://localhost:${PORT}`);
});