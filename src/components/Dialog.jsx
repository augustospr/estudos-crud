import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function EditDialog({ open, handleClose, item, editItem }) {

  const [newText, setNewText] = useState(item.name);
  const [newAge, setNewAge] = useState(item.age);
  const [newEmail, setNewEmail] = useState(item.email);

  const newItem = () => {
    editItem(newText, newAge, newEmail, item._id);
    handleClose();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edite as informações</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Idade"
            type="number"
            fullWidth
            variant="standard"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={newItem}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}