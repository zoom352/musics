import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
    const track: ITrack = {_id: '1', name: 'track 1', artist: 'исполнитель 1', text: 'something text', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhost:5000/image/avat.jpg', comments: []}
    const router = useRouter()
    return(
        <MainLayout>
          <Button onClick={() => router.push('/tracks')}>
            Track Page
          </Button>
          <Grid container style={{margin: '20px 0'}}>
              <img src={track.picture} width={200} height={200}/>
              <div style={{marginLeft: 30}}>
                  <h1>название трека {track.name}</h1>
                  <h1>{track.artist}</h1>
                  <h1>кол-во прослушиваний {track.listens}</h1>
              </div>
          </Grid>
          <h1>Слова в треке</h1>
          <p>{track.text}</p>
          <h1>Comments</h1>
          <Grid container>
              <TextField
                label=''
                fullWidth
              />
              <TextField
                label=''
                fullWidth
                multiline
                rows={4}
              />
              <Button>Send</Button>
          </Grid>
          <div>
              {track.comments.map(comment => {
                  <div>
                      <div>автор - {comment.username}</div>
                      <div>Коментарий - {comment.text}</div>
                  </div>
              })}
          </div>
        </MainLayout>
    )
}

export default TrackPage;
