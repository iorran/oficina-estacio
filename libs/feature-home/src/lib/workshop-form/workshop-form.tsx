import React from 'react';

import { useForm } from "react-hook-form";
import { Button, TextField } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { api, Speech } from '@estacio/data-acess';

/* eslint-disable-next-line */
export interface WorkshopFormProps {}

interface Inputs {
  title: string;
  speaker: string;
}

export const WorkshopForm = (props: WorkshopFormProps) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  function onSubmit (data: Speech) {
    console.log("onSubmit -> data", data);
  }

  function handleClick() {
    handleSubmit(onSubmit)();
  }
  return (
    <form>
      <div>
        <TextField inputRef={register({ required: true })} name="title"/>
        {errors.title && <span>Title is required</span>}
      </div>
      <div>
        <TextField inputRef={register({ required: true })} name="speaker"/>
        {errors.speaker && <span>Speaker is required</span>}
      </div>
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={handleClick}
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default WorkshopForm;


