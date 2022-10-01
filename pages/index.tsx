import { NextPage } from 'next'
import useSWR from 'swr'

import Todo from '../components/Todo'
import { GetTodos } from '../types/api'

const Home: NextPage = () => {
    const data = useSWR<GetTodos>('/api/todos').data

    return (
        <div>
            {data ? (
                data.todos.map(({ name, complete }, i) => {
                    return <Todo name={name} complete={complete} key={i} />
                })
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export default Home
