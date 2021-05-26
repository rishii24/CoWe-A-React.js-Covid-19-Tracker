import React from 'react';
import style from './cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

import { Card, CardContent, Typography, Grid } from '@material-ui/core'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={style.container}>

            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.infected)}> {/* cx as function call for multiple styling for using .module file*/ }
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varient="h5"><CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                        /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography varient="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varient="h5"><CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                        /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography varient="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varient="h5"><CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                        /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toString()}</Typography>
                        <Typography varient="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards
