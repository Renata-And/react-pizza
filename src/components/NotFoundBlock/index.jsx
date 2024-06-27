import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>Данной страницы нет в нашем магазине</p>
    </div>
  );
}

export default NotFoundBlock;
