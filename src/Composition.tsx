import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { BackgroundGrid } from './components/BackgroundGrid';
import { SceneCards } from './components/SceneCards';
import { SceneCTA } from './components/SceneCTA';
import { SceneHook } from './components/SceneHook';

export const MainReel = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#0A0C10' }}>
      <BackgroundGrid />
      <Audio src={staticFile('voiceover.mp3')} />

      <Sequence from={0} durationInFrames={240}>
        <SceneHook />
      </Sequence>

      <Sequence from={240} durationInFrames={300}>
        <SceneCards
          unit="Higher Education"
          topic="Universities & Regulatory Bodies"
          count={37}
          rank={1}
          color="#38BDF8"
        />
      </Sequence>

      <Sequence from={540} durationInFrames={300}>
        <SceneCards
          unit="ICT"
          topic="Hardware, Memory & Generations"
          count={36}
          rank={2}
          color="#A855F7"
        />
      </Sequence>

      <Sequence from={840} durationInFrames={300}>
        <SceneCards
          unit="Communication"
          topic="Media Effects & Mass Comm Theories"
          count={33}
          rank={3}
          color="#F59E0B"
        />
      </Sequence>

      <Sequence from={1140} durationInFrames={300}>
        <SceneCards
          unit="Logical Reasoning"
          topic="Hetvabhasa (Fallacies) & Pramanas"
          count={28}
          rank={4}
          color="#EF4444"
        />
      </Sequence>

      <Sequence from={1440} durationInFrames={360}>
        <SceneCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
