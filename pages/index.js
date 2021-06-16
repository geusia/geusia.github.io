import styles from '../css/Index.module.css';
import cx from 'classnames';

export default function Home() {
  return (
    <div className={cx(styles.home)}>
      <div className={cx(styles['title-wrapper'])}>
        <div className={cx(styles.title)}>🥕🥬🥕</div>
        <div className={cx(styles.title)}>🥬🐰🥬</div>
        <div className={cx(styles.title)}>🥕🥬🥕</div>
      </div>
    </div>
  )
}
