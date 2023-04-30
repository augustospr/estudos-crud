import React, { useEffect, useState } from "react"
import { Button, Container, Grid, TextField } from '@mui/material'
import { ItemList } from "../components/ItemList"
import axios from "axios";
// import { api } from "../provider";

export const Home = () => {

  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    const obj = { name: name, age: age, email: email };
    axios.post('https://crudcrud.com/api/847767ec0afe4a3d96c386e683337d2d/register',
      obj
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getApiData();
  }

  const removeItem = (id) => {
    axios.delete(`https://crudcrud.com/api/847767ec0afe4a3d96c386e683337d2d/register/${id}`);
    getApiData();
  }

  const getApiData = () => {
    try {
      axios.get("https://crudcrud.com/api/847767ec0afe4a3d96c386e683337d2d/register")
        .then((res) => setItems(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getApiData();
  }, [])

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
                onChange={(e) => setName(e.target.value)}
                value={name}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextField
                type="number"
                label="Idade"
                variant="outlined"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={3} >
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
              <Grid item key={item._id} xs={12} lg={8}>
                <ItemList item={item} removeItem={removeItem} />
              </Grid>
            ))}
          </Grid>
        </form>
      </Container>
    </>
  )
}