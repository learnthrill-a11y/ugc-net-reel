import { Composition } from 'remotion';
import { MainReel } from './Composition';

export const Root = () => {
  return (
    <Composition
      id="PaperOneOverview"
      component={MainReel}
      durationInFrames={1800}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
