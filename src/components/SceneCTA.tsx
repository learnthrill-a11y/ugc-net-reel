import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const SceneCTA = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 10, mass: 0.5 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        padding: '60px',
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          textAlign: 'center',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '2px solid #00FFAA',
          borderRadius: '40px',
          padding: '70px 50px',
        }}
      >
        <span style={{ color: '#00FFAA', fontSize: '32px', fontWeight: 800 }}>
          TOPIC BREAKDOWN SERIES
        </span>
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: '64px',
            fontWeight: 900,
            margin: '24px 0 20px',
            lineHeight: 1.2,
          }}
        >
          Master Paper 1 with Real Questions
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '34px', marginBottom: '44px' }}>
          Follow for daily concept explanations
        </p>
        <div
          style={{
            display: 'inline-block',
            background: '#00FFAA',
            color: '#0A0C10',
            padding: '24px 60px',
            borderRadius: '60px',
            fontSize: '34px',
            fontWeight: 900,
          }}
        >
          SAVE & FOLLOW
        </div>
      </div>
    </AbsoluteFill>
  );
};
