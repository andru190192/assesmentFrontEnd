import React, { useState, useEffect } from "react";

import {
  character,
  location,
  episode,
} from "../comunication/comunicationPaginator";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Container = () => {
  const [busqueda, setBusqueda] = useState("");
  const [listaPers, setlistaPers] = useState(undefined);
  const [index, setIndex] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await character(index);
        console.log("data", responseData);
        setlistaPers(responseData);
      } catch (error) {}
    };
    fetchData();
  }, [index]);

  const CardComponent = (value) => {
    console.log(value.value);
    console.log(value.value.gender);
    return (
      <Paper className={classes.paper}>
        <div style={{ flex: 1, flexDirection: "row" }}>
          <div>
            <img src={value.value.image} />
          </div>
          <div>
            Nombre
            <br />
            {value.gender}
          </div>
        </div>
      </Paper>
    );
  };

  const FormRow = () => {
    return (
      <React.Fragment>
        {/* {listaPers.forEach((item) => {
          return (
            <Grid item xl={4}>
              <Paper className={classes.paper}>
                
                item
              </Paper>
            </Grid>
          );
        })}   */}

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <CardComponent value={listaPers[0]} />;{/* {listaPers[0].gender} */}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  };

  if (listaPers === undefined) {
    return <div> Cargando Personajes.....</div>;
  }

  return (
    <div className={classes.root}>
      <div>Rick y Morty </div>
      <br />
      <br />
      <br />

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default Container;
