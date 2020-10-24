import React, { useEffect, useState } from 'react';

import { Speech, useSpeech } from "@estacio/data-acess";
import { WorkshopForm } from "./workshop-form/workshop-form";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/Inbox';
import { IconButton, makeStyles, Paper } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

/* eslint-disable-next-line */
export interface FeatureHomeProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const FeatureHome = (props: FeatureHomeProps) => {
  const classes = useStyles();
  const [newSpeech, setNewSpeech] = useState<Speech>();
  const [filteredSpeeches, setFilteredSpeeches] = useState<Speech[]>([]);
  const { data: speeches } = useSpeech<Speech[]>('speeches');

  useEffect(() => {
    setFilteredSpeeches(speeches)
  }, [speeches]);

  if (!speeches) return <div>loading...</div>

  function handleClick() {
    setNewSpeech({} as Speech);
  }

  function handleFilter(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const valueToFilter = e.target.value;
    if(!valueToFilter){
      setFilteredSpeeches(speeches);
    } else {
      const filtered = speeches.filter(speech => speech.title.includes(valueToFilter));
      setFilteredSpeeches(filtered);
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Nova Palestra
      </Button>
      <br/>
      {newSpeech && <WorkshopForm />}
      <br />
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Filtrar workshop"
          onChange={(e) => handleFilter(e)}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <br/>
      <List component="nav" aria-label="main mailbox folders">
        {filteredSpeeches && filteredSpeeches.map(speech => {
          return (
            <ListItem button key={speech.id}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={speech.title} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default FeatureHome;
