import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Container, Paper } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item lg={3} sm={6} xl={3} xs={12} >
                        <Paper>
                            <h1>HI</h1>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        lg={9}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <Paper>
                            <h1>contetn</h1>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;