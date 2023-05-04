import React, { useState } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from "@mui/material";
import EditDialog from "./Dialog";

export const ItemList = ({ item, deleteItem, editItem }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List sx={{ width: '100%', maxWidth: '100%' }}>
      <Paper>
        <ListItem sx={{ padding: '9px' }}
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={() => deleteItem(item._id)}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} onClick={handleClickOpen} dense >
            <ListItemText primary={`Nome: ` + item.name} />
            <ListItemText primary={`Idade: ` + item.age} />
            <ListItemText primary={`Email: ` + item.email} />
          </ListItemButton>

          <EditDialog open={open} handleClose={handleClose} item={item} editItem={editItem} />
          
        </ListItem>
      </Paper>
    </List>
  );
};