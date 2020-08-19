import styles from '../css/Index.module.css';
import cx from 'classnames';

export default function Home() {
  return (
    <div className={cx(styles.home)}>
      <div className={cx(styles['title-wrapper'])}>
        <div className={cx(styles.title)}>we're hangry</div>
        <div className={cx(styles.subtitle)}>work in progress</div>
      </div>
    </div>
  )
}
