import React, { useEffect, useState } from "react"
import { Button, Container, Grid, TextField } from '@mui/material'
import { ItemList } from "../components/ItemList"
import axios from "axios";

export const Home = () => {

  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const getApiData = () => {
    try {
      axios.get(`https://crudcrud.com/api/f979d7afacf644ee98d8f6df27ef98f0/register`)
        .then((res) => setItems(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  const addItem = (e) => {
    e.preventDefault();
    const obj = { name: name, age: age, email: email };
    axios.post(`https://crudcrud.com/api/f979d7afacf644ee98d8f6df27ef98f0/register`, obj);
    getApiData();
  }

  const deleteItem = (id) => {
    axios.delete(`https://crudcrud.com/api/f979d7afacf644ee98d8f6df27ef98f0/register/${id}`);
    getApiData();
  }

  const editItem = (newName, newAge, newEmail, id) => {
    const newObj = { name: newName, age: newAge, email: newEmail };
    axios.put(`https://crudcrud.com/api/f979d7afacf644ee98d8f6df27ef98f0/register/${id}`, newObj);
    getApiData();
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Container>
        <form onSubmit={addItem}>
          <Grid container mt={2} spacing={2} justifyContent="center">
            <Grid item xs={12} lg={12} my={3} textAlign="center">
              <h1>Cadastro</h1>
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextField
                type="text"
                label="Nome"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextField
                type="number"
                label="Idade"
                variant="outlined"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={3} >
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              display="flex"
              justifyContent="center"
            >
              <Button type="submit" variant="outlined">Cadastrar</Button>
            </Grid>
          </Grid>

          <Grid container mt={3} justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <h2>Lista de cadastrados</h2>
            </Grid>
            {items.map((item) => (
              <Grid key={item._id} item xs={12} lg={8}>
                <ItemList item={item} deleteItem={deleteItem} editItem={editItem} />
              </Grid>
            ))}
          </Grid>
        </form>
      </Container>
    </>
  )
}