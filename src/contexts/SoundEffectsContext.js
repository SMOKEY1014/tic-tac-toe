import { createContext } from "react";
import useSound from "../hooks/useSounds";


export const SfxContext = createContext({});

const SfxContextProvider = ({ children }) => {
    const options = {
    volume: 0.05,
    timeout: 200
  }
  const hoverPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
  const clickedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
  const winnerPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
  const completedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";

  const hoverSfx = useSound(hoverPath, options);
  const clickSfx = useSound(clickedPath, options);
    const winSfx = useSound(winnerPath, {
        ...options, volume: 0.5,
            timeout: 1000    });
  const completedSfx = useSound(completedPath, {...options, volume: 0.5, timeout: 2000});


    return (
        <SfxContext.Provider value={{hoverSfx, clickSfx, winSfx, completedSfx}}>
            {children}
        </SfxContext.Provider>
    )
};

export default SfxContextProvider