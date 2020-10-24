import React, { useEffect, useState } from 'react';

import { api, Speech } from "@estacio/data-acess";
import { WorkshopForm } from "./workshop-form/workshop-form";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/Inbox';

/* eslint-disable-next-line */
export interface FeatureHomeProps {}

export const FeatureHome = (props: FeatureHomeProps) => {
  const [speechs, setSpeechs] = useState<Speech[]>([]);
  const [speech, setSpeech] = useState<Speech>();

  async function load() {
    const { data } = await api.get<Speech[]>('speeches');
    console.log("load -> response", data);
    setSpeechs(data);
    return data;
  }

  useEffect(() => {
    load();
  }, []);

  // function ListItemLink(props) {
  //   return <ListItem button component="a" {...props} />;
  // }

  function handleClick() {
    setSpeech({} as Speech);
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Nova Palestra
      </Button>
      {speech && <WorkshopForm />}
      <List component="nav" aria-label="main mailbox folders">
        {speechs.map(speech => {
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
