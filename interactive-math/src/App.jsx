import './App.css'
import Add from './components/examples/Add'
import CiculoTrigonometrico from './components/examples/CiculoTrigonometrico'
import Pitagoras from './components/examples/Pitagoras'
import Senoide from './components/examples/Senoide'
import Vector from './components/examples/Vector'

export default function App() {

  return (
    <>
      <div className='flex bg-gray-100 py-24'>
        <div className='flex flex-col gap-8 m-auto'>
          <div>
            <h1 className='text-xl mb-2'>1. Círculo Trigonométrico</h1>
            <div className='bg-white'>
              <CiculoTrigonometrico />
            </div>
          </div>

          <div>
            <h1 className='text-xl mb-2'>2. Função Seno</h1>
            <div className='bg-white'>
              <Senoide />
            </div>
          </div>

          <div>
            <h1 className='text-xl mb-2'>3. Teorema de Pitágoras</h1>
            <div className='bg-white'>
              <Pitagoras />
            </div>
          </div>

          <div>
            <h1 className='text-xl mb-2'>4. Espaço Vetorial</h1>
            <div className='bg-white'>
              <Vector />
            </div>
          </div>

          <div>
            <h1 className='text-xl mb-2'>5. Adicionar e deletar pontos</h1>
            <div className='bg-white'>
              <Add />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}