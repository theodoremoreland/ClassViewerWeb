import React from 'react';
import clsx from 'clsx';
import { Box, Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: '#007360',
    height: 56,
    width: 56
  },
  negativeIcon: {
      color: '#007360'
  },
  negativeValue: {
    color: '#007360',
    marginRight: theme.spacing(1) 
  },
    positiveIcon: {
      color: '#a51417'
  },
  positiveValue: {
    color: '#a51417',
    marginRight: theme.spacing(1) 
  }
}));

const  = ({ , ,  }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography className="cardTitle" gutterBottom variant="h6">
              
            </Typography>
            <Typography className="KPI" variant="h3">
              {}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
            {
               === 0
                ? <>
                    <AddIcon className={classes.negativeIcon} style={{"fontSize": "12px", "marginLeft": "12px"}}/>
                    <Typography className={classes.negativeValue} variant="body2">
                      {}
                    </Typography>
                  </>
                : <>
                    <AddIcon className={classes.positiveIcon} style={{"fontSize": "12px", "marginLeft": "12px"}}/>
                    <Typography className={classes.positiveValue} variant="body2">
                      {}
                    </Typography>
                  </>
            }
          <Typography className="cardCaption" variant="caption">
            
          </Typography>
        </Box>
        <Box mt={2} display="flex" alignItems="center">
        {
             < 0
              ? <>
                  <ArrowDownwardIcon className={classes.negativeIcon} />
                  <Typography className={classes.negativeValue} variant="body2">
                    {Math.abs()}
                  </Typography>
                </>
              : ( === 0
                  ? <>
                      <ArrowDownwardIcon className={classes.positiveIcon} />
                      <Typography className={classes.positiveValue} variant="body2">
                        {Math.abs()}
                      </Typography>
                    </>
                  : <>
                      <ArrowUpwardIcon className={classes.positiveIcon} />
                      <Typography className={classes.positiveValue} variant="body2">
                        {Math.abs()}
                      </Typography>
                    </>
                )
          }
          <Typography className="cardCaption" variant="caption">
            
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};


export default ;
