import {useState, useEffect} from 'react';

const usePlayer = (playerRef, currentTrack) => {

  const [isLoaded, setLoadedState] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  const playHandle = () => {
    setPlaying(!isPlaying);
    isPlaying ? playerRef.current.pause() : playerRef.current.play();
  }

  const loadHandle = () => {
    setDuration(playerRef.current.duration);
    setCurrentTime(playerRef.current.currentTime);
    setLoadedState(true);
  }

  const timeUpdHandle = () => setCurrentTime(playerRef.current.currentTime);

  const trackEndHandle = () => {
    setDuration(playerRef.current.duration);
    setCurrentTime(0);
    playHandle();
  }

  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
    setLoadedState(false);
  }, [currentTrack])

  useEffect(() => {
    if (clickedTime && clickedTime !== currentTime) {
      playerRef.current.currentTime = clickedTime;
      setClickedTime(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedTime])



  return {
    isPlaying,
    isLoaded,
    duration,
    currentTime,
    playHandle,
    loadHandle,
    timeUpdHandle,
    trackEndHandle,
    setClickedTime,
    setPlaying,
  }
}

export default usePlayer;