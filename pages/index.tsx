import axios from 'axios'
import { NextPage } from 'next'
import { useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import Form from '../components/Form'
import Loading from '../components/Loading'
import Todo from '../components/Todo'
import Types from '../types/api'

const Home: NextPage = () => {
    const { mutate } = useSWRConfig()
    const todos = useSWR<Types.Todo[]>('/api/todos').data
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')

    const createTodo = async () => {
        await axios('/api/todos', {
            method: 'POST',
            data: { name: name, description: desc }
        })
        mutate('/api/todos')
    }

    return (
        <div>
            {todos ? (
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} />
                })
            ) : (
                <Loading />
            )}

            <Form name={name} setName={setName} buttonName='Create' handleClick={createTodo}>
                <textarea
                    role='textbox'
                    placeholder='Description'
                    value={desc}
                    onChange={(e) => {
                        e.target.style.height = ''
                        e.target.style.height = e.target.scrollHeight + 'px'
                        setDesc(e.target.value)
                    }}
                />
            </Form>
        </div>
    )
}

export default Home
