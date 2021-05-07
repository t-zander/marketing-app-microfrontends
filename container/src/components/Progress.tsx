import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bar: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
}
