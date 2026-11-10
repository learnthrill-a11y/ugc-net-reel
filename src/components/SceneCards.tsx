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

  // കാർഡിന്റെ മെയിൻ സ്പ്രിംഗ് എൻട്രി
  const cardScale = spring({
    frame,
    fps,
    config: { damping: 11, mass: 0.5, stiffness: 180 },
  });

  // കാർഡിന് മുകളിലൂടെ ഓടുന്ന ലേസർ ലൈറ്റ്
  const laserMove = interpolate(frame, [0, 80], [-100, 200], {
    extrapolateRight: 'clamp',
  });

  // പ്രോഗ്രസ് ബാർ അനിമേഷൻ (0% മുതൽ 100% വരെ)
  const progressWidth = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  // നമ്പർ കൗണ്ടർ (0 മുതൽ ടാർഗെറ്റ് വരെ)
  const animatedNumber = Math.round(
    interpolate(frame, [8, 30], [0, count], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  // വാക്കുകൾ ഓരോന്നായി പൊങ്ങി വരാനുള്ള അനിമേഷൻ (Word-by-word)
  const words = topic.split(' ');

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '48px',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          transform: `scale(${cardScale})`,
          width: '100%',
          background: 'radial-gradient(ellipse at top, #141B2D 0%, #080B11 100%)',
          border: `2px solid ${color}4D`,
          borderRadius: '36px',
          padding: '50px 44px',
          boxShadow: `0 30px 80px -10px ${color}33, 0 0 50px rgba(0,0,0,0.9)`,
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ലേസർ സ്കാനർ ബീം */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: `${laserMove}%`,
            width: '120px',
            height: '4px',
            background: `linear-gradient(90deg, transparent, ${color}, #ffffff, ${color}, transparent)`,
            boxShadow: `0 0 15px ${color}`,
          }}
        />

        {/* മുകളിലെ ബാഡ്ജുകൾ */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '100px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: color,
                boxShadow: `0 0 8px ${color}`,
              }}
            />
            <span
              style={{
                color: '#CBD5E1',
                fontSize: '24px',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {unit}
            </span>
          </div>

          <span
            style={{
              fontSize: '26px',
              fontWeight: 900,
              color,
              letterSpacing: '1.5px',
              background: `${color}1A`,
              padding: '8px 20px',
              borderRadius: '12px',
              border: `1px solid ${color}55`,
            }}
          >
            PRIORITY #{rank}
          </span>
        </div>

        {/* വാക്ക്-ബൈ-വാക്ക് പൊങ്ങിവരുന്ന ടോപ്പിക് ടൈറ്റിൽ */}
        <h2
          style={{
            color: '#FFFFFF',
            fontSize: '56px',
            margin: '36px 0 28px',
            lineHeight: 1.25,
            fontWeight: 900,
            letterSpacing: '-1px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
          }}
        >
          {words.map((word, index) => {
            const wordDelay = index * 3;
            const wordY = interpolate(frame - wordDelay, [0, 8], [35, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            const wordOpacity = interpolate(frame - wordDelay, [0, 6], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });

            return (
              <span
                key={index}
                style={{
                  display: 'inline-block',
                  transform: `translateY(${wordY}px)`,
                  opacity: wordOpacity,
                }}
              >
                {word}
              </span>
            );
          })}
        </h2>

        {/* ആനിമേഷൻ പ്രോഗ്രസ് ലൈൻ */}
        <div
          style={{
            width: '100%',
            height: '8px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: `${Math.min(progressWidth * 100, 100)}%`,
              height: '100%',
              background: `linear-gradient(90deg, ${color}88, ${color})`,
              boxShadow: `0 0 12px ${color}`,
            }}
          />
        </div>

        {/* കൗണ്ടറും ഡീറ്റെയിലും */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '110px',
                fontWeight: 900,
                color,
                lineHeight: 0.9,
                fontVariantNumeric: 'tabular-nums',
                filter: `drop-shadow(0 0 25px ${color}66)`,
              }}
            >
              {animatedNumber}
            </div>
            <div
              style={{
                fontSize: '30px',
                color: '#94A3B8',
                fontWeight: 700,
                marginTop: '12px',
              }}
            >
              Questions Repeated
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '12px 24px',
              borderRadius: '16px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '20px', color: '#64748B', fontWeight: 600 }}>FREQUENCY</div>
            <div style={{ fontSize: '28px', color: '#FFFFFF', fontWeight: 800 }}>VERY HIGH</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
