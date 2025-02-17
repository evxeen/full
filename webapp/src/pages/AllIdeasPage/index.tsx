import { trpc } from '../../lib/trpc.tsx'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Some Error...{error.message}</span>
  }

  return (
    <div>
      <h1>All Ideas</h1>
      {data.ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  )
}
