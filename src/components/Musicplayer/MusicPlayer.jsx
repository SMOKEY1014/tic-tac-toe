import React, { useContext, useEffect, useRef, useState } from 'react'
import { MusicPlayerWrapper } from './MusicPlayer.styled'
import randomizeIndex from "../../utils/MusicUtils"
import playList from '../../utils/MusicUtils/playlist'
import { PlayIcon,PauseIcon,NextIcon } from './MusicPlayer.styled'
import { SfxContext } from '../../contexts/SoundEffectsContext'
import { SubTitle } from '../../styles/General.styled'

const MusicPlayer = () => {
    const {hoverSfx, clickSfx } = useContext(SfxContext)
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
    const playerRef = useRef(null);
    const [playPromise, setPlayPromise] = useState(null);
 
  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
        setPlayPromise(promise);
        if (playerRef.current?.volume) {
            playerRef.current.volume = 0.1;
        }
    }
    playerRef.current?.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
      clickSfx();
      setIsPlaying(false);
 
    await playPromise?.then(() => {
        playerRef.current?.pause();
    });

    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
  };
    const displaySong = playList[currentSong].split("/")[6] || playList[currentSong];
  return (
      <MusicPlayerWrapper>
          {isPlaying ? (<PauseIcon onMouseEnter={() => hoverSfx()} onClick={() => { clickSfx(); setIsPlaying(false) }} />) : (<PlayIcon onMouseEnter={() => hoverSfx()} onClick={() => { clickSfx(); setIsPlaying(true)}} />) }
          <NextIcon onMouseEnter={() => hoverSfx()}
              onClick={shuffleHandler} />
          
          <audio
              ref={playerRef}
              src={playList[currentSong]}
              onEnded={shuffleHandler}></audio>
          <SubTitle>{displaySong}</SubTitle>
      </MusicPlayerWrapper>
  )
}

export default MusicPlayer