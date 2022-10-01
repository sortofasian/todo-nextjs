import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Loading.module.css'

const Loading = () => {
    return (
        <h2 className={styles.loading}>
            <FontAwesomeIcon icon={faSpinner} spin />
        </h2>
    )
}

export default Loading
