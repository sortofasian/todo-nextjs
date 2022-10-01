import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Todo.module.css'

type Props = {
    name: string
    complete: boolean
}

const Todo = ({ name, complete }: Props) => {
    return (
        <div className={styles.todo}>
            <div className={styles.header + ' ' + styles.complete}>
                <h1 className={styles.name}>{name}</h1>
                <div className={styles.status}>
                    <FontAwesomeIcon
                        icon={complete ? faCheck : faXmark}
                        className={complete ? styles.complete : styles.incomplete}
                    />
                </div>
            </div>
        </div>
    )
}

export default Todo
