import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

let teaData = [];
let nextId = 1;

// add a new tea
app.post("/teas", (req, res) => {
  const {name, price} = req.body;
  const newTea = {
    id: nextId++,
    name,
    price,
  };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// get all teas
app.get("/teas", (req, res) => {
  res.send(teaData);
});

// get a particular tea by id
app.get("/teas/:id", (req, res) => {
  const {id} = req.params;
  const tea = teaData.find((tea) => tea.id === parseInt(id));
  if (!tea) {
    res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});

// update a particular tea by id
app.put("/teas/:id", (req, res) => {
  const {id} = req.params;
  const {name, price} = req.body;
  const tea = teaData.find((tea) => tea.id === parseInt(id));
  if (!tea) {
    res.status(404).send("Tea not found");
  }
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

// delete a particular tea by id
app.delete("/teas/:id", (req, res) => {
  const {id} = req.params;
  const index = teaData.findIndex((tea) => tea.id === parseInt(id));
  if (index === -1) {
    res.status(404).send("Tea not found");
  }
  teaData.splice(index, 1);
  res.status(204).send();
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
