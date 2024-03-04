import { PreguntaCard } from '@/components/PreguntaCard';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <>
      <Slider />
      <div className='mt-16'>
        <h2 className='text-6xl font-bold text-center'> PREGUNTAS FRECUENTES </h2>
        <div className='h-screen grid grid-cols-3 grid-rows-2 mt-16 gap-y-40'>
          <PreguntaCard />
          <PreguntaCard />
          <PreguntaCard />
          <PreguntaCard />
          <PreguntaCard />
          <PreguntaCard />
        </div>
      </div>
      <div>
        {/* <formulario /> */}
      </div>
    </>
  );
}
