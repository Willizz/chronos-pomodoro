import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <div className='form'>
          <div className='formRow'>
            <label htmlFor='meuImput'>Task</label>
            <input id='meuImput' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos:</p>
            <p>0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </div>
      </Container>
    </>
  );
}
