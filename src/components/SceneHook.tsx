import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const SceneHook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 10, mass: 0.5, stiffness: 120 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          border: '1px solid #00FFAA',
          background: 'rgba(15, 23, 42, 0.95)',
          padding: '60px 40px',
          borderRadius: '32px',
          textAlign: 'center',
          boxShadow: '0 0 50px rgba(0, 255, 170, 0.2)',
        }}
      >
        <span
          style={{
            color: '#00FFAA',
            fontSize: '32px',
            fontWeight: 800,
            letterSpacing: '4px',
          }}
        >
          // NTA UGC NET PAPER 1
        </span>
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: '84px',
            fontWeight: 900,
            lineHeight: 1.1,
            margin: '30px 0 20px',
          }}
        >
          961 QUESTIONS ANALYSED
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '36px', margin: 0, fontWeight: 600 }}>
          Most Repeated Core Topics (2024–2025)
        </p>
      </div>
    </AbsoluteFill>
  );
};
