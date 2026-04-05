import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ANIMATION_PRESETS from '../assets/particlesPresets';

const particlesInit = async (main) => {
  await loadFull(main);
};

const particlesLoaded = () => {};

export default function ParticlesBackdrop({ bodyAnimationStyle }) {
  const preset = ANIMATION_PRESETS[bodyAnimationStyle];
  if (!preset) {
    return null;
  }
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{ ...preset, autoplay: true }}
      style={{ height: '100vh', width: '100vw' }}
    />
  );
}
