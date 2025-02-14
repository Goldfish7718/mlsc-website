import { Cover } from './ui/cover';
import { FlipWords } from './ui/flip-words';

const Hero = () => {
  const words = ['build', 'explore', 'create'];

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-neutral-200">
          <Cover>Microsoft </Cover>
          Learner Student Club
        </h1>

        <h3 className="text-4xl text-neutral-400">
          A Club that inspires to <FlipWords words={words} />
        </h3>
      </div>
    </section>
  );
};

export default Hero;
