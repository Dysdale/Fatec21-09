
import ButtonFatec from './components/ButtonFatec/ButtonFatec'
import './app.css'
import InputFatecExercicio from './components/inputs/InputFatecExercicio'
import InputFatec2 from './components/inputs/InputFatecExercicio'

export function App() {

  return (
    <>
     <p>
         Entre em Contato
      </p>
      <p>______________________________</p>
        <InputFatec2 type='string' placeholder='Nome'className="usred-placeholder"/>
        <p>
          <InputFatec2 type='string' placeholder='E-mail'/>
        </p>
          <InputFatec2 type='string' placeholder='Telefone'/>
          <p>

          </p>
        
        <ButtonFatec type='submit' label='Fatec: Enviar mensagem'/>
    </>
  )
}

export default App
