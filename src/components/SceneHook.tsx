import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const SceneHook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({
    frame,
    fps,
    config: { damping: 10, mass: 0.4, stiffness: 200 },
  });

  const glitchTranslate = interpolate(frame, [5, 8, 11, 14], [0, -6, 6, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          transform: `scale(${pop}) translateX(${glitchTranslate}px)`,
          border: '2px solid #00FFAA',
          background: 'rgba(11, 15, 24, 0.96)',
          padding: '60px 44px',
          borderRadius: '36px',
          textAlign: 'center',
          boxShadow: '0 0 60px rgba(0, 255, 170, 0.25)',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            color: '#00FFAA',
            fontSize: '30px',
            fontWeight: 800,
            letterSpacing: '4px',
            background: 'rgba(0, 255, 170, 0.1)',
            padding: '8px 24px',
            borderRadius: '100px',
            border: '1px solid rgba(0, 255, 170, 0.3)',
          }}
        >
          NTA UGC NET PAPER 1
        </span>
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: '84px',
            fontWeight: 900,
            lineHeight: 1.1,
            margin: '32px 0 20px',
            textShadow: '0 0 30px rgba(255,255,255,0.3)',
          }}
        >
          961 QUESTIONS ANALYSED
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '34px', margin: 0, fontWeight: 600 }}>
          Most Repeated Core Topics (2024–2025)
        </p>
      </div>
    </AbsoluteFill>
  );
};
