import React, { useState } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from "@mui/material";

export const ItemList = ({ item }) => {

  return (
    <List sx={{ width: '100%', maxWidth: '100%' }}>
      <Paper>
        <ListItem sx={{ padding: '9px' }}
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemText primary={`Nome: ` + item.name} />
            <ListItemText primary={`Idade: ` + item.age} />
            <ListItemText primary={`Email: ` + item.email} />
          </ListItemButton>
        </ListItem>
      </Paper>
    </List>
  );
};