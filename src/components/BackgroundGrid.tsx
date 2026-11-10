import { AbsoluteFill } from 'remotion';

export const BackgroundGrid = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  );
};
