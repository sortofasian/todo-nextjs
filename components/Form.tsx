import { ReactNode } from 'react'

import styles from './Form.module.css'

type Props = {
    handleClick: () => void
    name: string
    setName: (name: string) => void
    buttonName?: string
    children: ReactNode
}

const Form = ({ handleClick, name, setName, buttonName, children }: Props) => {
    return (
        <div className={'container'}>
            <div className={styles.header}>
                <input
                    className={styles.name}
                    placeholder='Type something...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {children}

            <button onClick={handleClick} className={styles.button}>
                {buttonName ? buttonName : 'Submit'}
            </button>
        </div>
    )
}

export default Form
