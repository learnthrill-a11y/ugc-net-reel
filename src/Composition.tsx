import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { BackgroundGrid } from './components/BackgroundGrid';
import { SceneCards } from './components/SceneCards';
import { SceneCTA } from './components/SceneCTA';
import { SceneHook } from './components/SceneHook';

export const MainReel = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#07090E' }}>
      <BackgroundGrid />
      <Audio src={staticFile('voiceover.mp3')} />

      {/* 0s - 4.5s: Hook (135 ഫ്രെയിംസ്) */}
      <Sequence from={0} durationInFrames={135}>
        <SceneHook />
      </Sequence>

      {/* 4.5s - 9.0s: Higher Education (135 ഫ്രെയിംസ്) */}
      <Sequence from={135} durationInFrames={135}>
        <SceneCards
          unit="Higher Education"
          topic="Universities & Regulatory Bodies"
          count={37}
          rank={1}
          color="#38BDF8"
        />
      </Sequence>

      {/* 9.0s - 13.5s: ICT (135 ഫ്രെയിംസ്) */}
      <Sequence from={270} durationInFrames={135}>
        <SceneCards
          unit="ICT"
          topic="Hardware, Memory & Generations"
          count={36}
          rank={2}
          color="#A855F7"
        />
      </Sequence>

      {/* 13.5s - 18.0s: Communication (135 ഫ്രെയിംസ്) */}
      <Sequence from={405} durationInFrames={135}>
        <SceneCards
          unit="Communication"
          topic="Media Effects & Mass Comm Theories"
          count={33}
          rank={3}
          color="#F59E0B"
        />
      </Sequence>

      {/* 18.0s - 22.5s: Indian Logic (135 ഫ്രെയിംസ്) */}
      <Sequence from={540} durationInFrames={135}>
        <SceneCards
          unit="Logical Reasoning"
          topic="Hetvabhasa (Fallacies) & Pramanas"
          count={28}
          rank={4}
          color="#EF4444"
        />
      </Sequence>

      {/* 22.5s - 28.0s: Outro / CTA (165 ഫ്രെയിംസ്) */}
      <Sequence from={675} durationInFrames={165}>
        <SceneCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
