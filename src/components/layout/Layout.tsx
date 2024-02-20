import type { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';

const Layout = ({ children, layoutSize, className }: LayoutProps) => {
  return (
    <div className={[styles['layout'], className].join(' ')}>
      <div
        className={[
          styles['container'],
          styles[!layoutSize ? 'container--large' : `container--${layoutSize}`],
        ].join(' ')}
      >
        <header>
          <h1 className={styles['title']}>SPLI<br/>TTER</h1>
        </header>
        <main>
          <div className={styles['content-wrapper']}>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
