import React from 'react';
import clsx from 'clsx';
import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, colors, makeStyles, useTheme } from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const ExposureOverview = ({ ,  }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [, ],
        backgroundColor: [
          '#007360',
          '#005f85'
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['', '']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const positiveCases = [
    {
      title: '',
      value: ,
      icon: SupervisorAccountIcon,
      color: '#007360'
    },
    {
      title: '',
      value: ,
      icon: PeopleAltIcon,
      color: '#005f85'
    }
  ];

  return (
    <Card className={clsx(classes.root)}>
      <CardHeader className="cardTitle" title="" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={data} options={options} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {positiveCases.map(({ color, icon: Icon, title, value }) => (
            <Box key={title} p={1} textAlign="center">
              <Icon color="action" />
              <Typography className="cardSubtitle" variant="body1">
                {title}
              </Typography>
              <Typography className="KPI" style={ { color } } variant="h2">
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExposureOverview;
