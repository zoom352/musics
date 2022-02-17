import { Button, Grid, Card, Box } from "@mui/material"
import { useRouter } from "next/router"
// import Card from '@mui/material/Card';
import React from "react"
import TrackList from "../../components/TrackList"
import MainLayout from "../../layouts/MainLayout"
import { ITrack } from "../../types/track"

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'track 1', artist: 'исполнитель 1', text: 'something text', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhost:5000/image/avat.jpg', comments: []},
        {_id: '2', name: 'track 2', artist: 'исполнитель 2', text: 'something text', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhost:5000/image/avat.jpg', comments: []}
    ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{ width: 900 }}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>список треков</h1>
                            <Button onClick={() => router.push('tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index