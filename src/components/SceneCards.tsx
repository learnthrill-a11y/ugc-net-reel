import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const SceneCards = ({ unit, topic, count, rank, color = '#00FFAA' }: any) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const translateY = spring({
    frame,
    fps,
    from: 100,
    to: 0,
    config: { damping: 12, mass: 0.6 },
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
          transform: `translateY(${translateY}px)`,
          width: '100%',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '36px',
          padding: '50px',
          boxSizing: 'border-box',
          boxShadow: '0 30px 70px rgba(0,0,0,0.6)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              padding: '10px 20px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              color: '#94A3B8',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            {unit}
          </span>
          <span style={{ fontSize: '32px', fontWeight: 900, color }}>
            #{rank} Priority
          </span>
        </div>

        <h2
          style={{
            color: '#FFFFFF',
            fontSize: '54px',
            margin: '36px 0',
            lineHeight: 1.25,
            fontWeight: 800,
          }}
        >
          {topic}
        </h2>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '30px',
            display: 'flex',
            alignItems: 'baseline',
            gap: '16px',
          }}
        >
          <span style={{ fontSize: '88px', fontWeight: 900, color }}>{count}</span>
          <span style={{ fontSize: '36px', color: '#64748B', fontWeight: 700 }}>
            Questions Asked
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
