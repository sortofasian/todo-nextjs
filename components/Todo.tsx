import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import { Todo } from '../types/api'
import styles from './Todo.module.css'

type Props = {
    todo: Todo
}

const Todo = ({ todo }: Props) => {
    const url = `/api/todos/${todo.id}`

    const { mutate } = useSWRConfig()
    const handleStatus = async () => {
        await axios(url, { method: 'PUT', data: { complete: !todo.complete } })
        mutate('/api/todos')
    }
    const handleDelete = async () => {
        await axios(url, { method: 'DELETE' })
        mutate('/api/todos')
    }

    return (
        <div className={'container'}>
            <div className={styles.header + ' ' + styles.complete}>
                <p className={styles.name}>{todo.name}</p>

                <div className={styles.status}>
                    <FontAwesomeIcon
                        icon={todo.complete ? faCheck : faXmark}
                        className={todo.complete ? styles.complete : styles.incomplete}
                    />
                </div>
            </div>

            <p className={styles.description}>{todo.description}</p>

            <div className={styles.controls}>
                <button onClick={handleStatus} className={styles.control_status}>
                    {todo.complete ? 'Mark Incomplete' : 'Mark Complete'}
                </button>

                <button onClick={handleDelete} className={styles.control_delete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Todo
