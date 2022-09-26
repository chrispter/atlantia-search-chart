import { FC } from 'react';
import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={ styles.header }>
        <div className={ styles.content }>
          <img src="/atlantiasearch.png" className={ styles.logo } alt="Atlantia Search" />
        </div>
    </header>
  )
};
