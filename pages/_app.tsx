import 'normalize.css/normalize.css'
import './styles/_globals.css'
import './styles/_classes.css'

import axios from 'axios'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
    const request = async (url: any, init: any) => {
        const response = await axios(url, init)
        return response.data
    }

    return (
        <SWRConfig value={{ fetcher: request, refreshInterval: 5000 }}>
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp
