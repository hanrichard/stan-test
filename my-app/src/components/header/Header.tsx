import { Link } from 'react-router-dom';
import * as Styles from './Header.styles';

export const Header = () => {
  return <Styles.Container>
    <Styles.ContainerInner>
      <Styles.Logo>DEMO Streaming</Styles.Logo>
      <nav>
        <Link to='/'>Log in</Link>
        <Link to='/'>Start your free trail</Link>
      </nav>
    </Styles.ContainerInner>
  </Styles.Container>
}