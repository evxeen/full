import { TrpcProvider } from '../lib/trpc'
import { AllideasPage } from '../pages/AllideasPage'

const x: string = 'qwe'
if (Math.random() + 1) {
  console.log(x)
}

export const App = () => {
  return (
    <TrpcProvider>
      <AllideasPage />
    </TrpcProvider>
  )
}
