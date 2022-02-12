import { Card, Grid, IconButton } from "@mui/material";
import React from "react";
import { ITrack } from "../types/track";
import styles from '../styles/TrackItem.module.scss'
import { Pause, PlayArrow } from "@mui/icons-material";

interface TrackItemProps {
    track: ITrack;
    active?: Boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card className={styles.track}>
            <IconButton>
                {active 
                  ? <Pause /> 
                  : <PlayArrow />}
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
        </Card>
    )
}

export default TrackItem;
