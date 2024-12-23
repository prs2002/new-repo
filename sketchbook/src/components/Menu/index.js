import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft, faRotateRight, faPencil, faEraser, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'

const menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faPencil} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faEraser} />
      </div>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} />
      </div>
    </div>
  )
}

export default menu