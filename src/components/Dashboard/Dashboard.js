// React 
import React, {useState, useEffect} from 'react';

// Amplify
import { API, Auth } from 'aws-amplify';

// Material UI
import { Container, Grid, Typography } from '@material-ui/core';

// Custom components
import BarGraph from './BarGraph';
import KPI from './KPI';
import DonutChart from './DonutChart';

// Styles
import './Dashboard.css';

function DashboardContainer() {

  const getDashboard = async () => {
    const requestOptions = {
        headers: {
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        },
        response:true
    };
    
    await API.get("API", "dashboard", requestOptions)
        .then(response => {
          console.log(response.data)
          if (response.status !== 200) {
              console.log(response);
              return Promise.reject(`${response.status} ${response.statusText}`);
          }

        })
        .catch(error => {
            const text = `Error receiving dashboard data. ${error.toString()}.`;
            console.log(text);
        });
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
    getDashboard();
  }, []);

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item id="dashboardTitleContainer" xs={12}>

        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>

        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>

        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>

        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>

        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>

        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>

        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardContainer;
