import { Link } from 'react-router-dom'
import * as Styles from './DefaultCard.styles';
import placeholder from '../../assets/placeholder.png';

export const DefaultCard = ({ title, url }: { title: string, url: string }) => {
  return <Styles.Container>
    <Link to={url}>
      <img src={placeholder} alt={title} />
    </Link>
    <Link to={url}>Popular {title}</Link>
  </Styles.Container>
}