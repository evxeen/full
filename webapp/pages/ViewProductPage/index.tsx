import { useParams } from 'react-router-dom'

export const ViewProductPage = () => {
  const { itemNumber } = useParams() as { itemNumber: string }
  return (
    <div>
      <h1>{itemNumber}</h1>
      <p>Description of products 1...</p>
      <div>
        <p>Text paragrph 1 of idea 1...</p>
        <p>Text paragrph 2 of idea 1...</p>
        <p>Text paragrph 3 of idea 1...</p>
      </div>
    </div>
  )
}
