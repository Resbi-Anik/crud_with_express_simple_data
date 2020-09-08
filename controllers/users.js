import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUsers = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("post request okay");
};

export const getSpecificUser = (req, res) => {
  console.log(req.params.id);
  const specificUsers = users.find((user) => user.id === req.params.id);
  res.send(specificUsers);
};

export const updateSpecificUsers = (req, res) => {
  const specificUsers = users.find((user) => user.id === req.params.id);
  const newAge = req.body.age;
  specificUsers.age = newAge;
  res.send(specificUsers);
};

export const deleteSpecificUsers = (req, res) => {
   users = users.filter((user) => user.id !== req.params.id);
  res.send(users);
};
