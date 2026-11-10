import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface CardProps {
  unit: string;
  topic: string;
  count: number;
  rank: number;
  color?: string;
}

export const SceneCards = ({ unit, topic, count, rank, color = '#00FFAA' }: CardProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // എൻട്രി സ്പ്രിംഗ് (Elastic Bounce)
  const pop = spring({
    frame,
    fps,
    config: { damping: 11, mass: 0.4, stiffness: 180 },
  });

  // നമ്പർ 0-ൽ നിന്ന് ടാർഗെറ്റ് കൗണ്ടിലേക്ക് അതിവേഗം കൂടുന്നത്
  const animatedNumber = Math.round(
    interpolate(frame, [5, 25], [0, count], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          transform: `scale(${pop})`,
          width: '100%',
          background: 'radial-gradient(circle at top left, #171d2b 0%, #0b0e14 100%)',
          border: `2px solid ${color}40`,
          borderRadius: '32px',
          padding: '50px 40px',
          boxShadow: `0 20px 60px -10px ${color}25, 0 0 30px rgba(0,0,0,0.8)`,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              padding: '8px 18px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              color: '#94A3B8',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            {unit}
          </span>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 900,
              color,
              letterSpacing: '1.5px',
            }}
          >
            ★ PRIORITY #{rank}
          </span>
        </div>

        <h2
          style={{
            color: '#FFFFFF',
            fontSize: '52px',
            margin: '32px 0',
            lineHeight: 1.25,
            fontWeight: 800,
            letterSpacing: '-0.5px',
          }}
        >
          {topic}
        </h2>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'baseline',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontSize: '110px',
              fontWeight: 900,
              color,
              fontVariantNumeric: 'tabular-nums',
              lineHeight: 1,
            }}
          >
            {animatedNumber}
          </span>
          <span style={{ fontSize: '32px', color: '#64748B', fontWeight: 700 }}>
            Questions Asked
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
