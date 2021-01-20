import React from 'react';
import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, useTheme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const  = ({ ,  }) => {
  const classes = useStyles();
  const theme = useTheme();
  const labels = [];
  const schoolData = [];
  const totalData = [];
  const barOptions = { 
    barThickness: 25,
    maxBarThickness: 25,
    barPercentage: 0.5,
    categoryPercentage: 0.5
  };

  for (let i = 0; i < .length; i++) {
    const weekForSchool = JSON.parse([i][0].stringValue);
    const weekForTotal = JSON.parse([i][0].stringValue);

    labels.push(weekForSchool.f1);
    schoolData.push(weekForSchool.f2);
    totalData.push(weekForTotal.f2);
  }

  const yAxisMax = () => {
    let max = Math.max(...schoolData, ...totalData);
    max = Math.ceil(max / 10) * 10;
    return max;
  };

  const data = {
    datasets: [
      {
        backgroundColor: '#007360',
        data: schoolData.slice(0, 6).reverse(),
        label: '',
        ...barOptions
      },
      {
        backgroundColor: '#3c3c3d',
        data: totalData.slice(0, 6).reverse(),
        label: '',
        ...barOptions
      }
    ],
    labels: labels.slice(0, 6).reverse()
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: true },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: true,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            max: yAxisMax(),
            min: 0,
            stepSize: yAxisMax() / 10
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
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

  return (
    <Card className={clsx(classes.root)}>
      <CardHeader className="cardTitle" title="" />
      <Divider />
      <CardContent>
        <Box height={450} position="relative">
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ;
