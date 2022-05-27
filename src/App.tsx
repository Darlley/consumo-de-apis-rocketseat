import { useFetch } from "./hooks/useFetch"

type Repository = {
  full_name: string,
  description: string,
  html_url: string
}

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>('https://api.github.com/users/Darlley/repos')

  return (
    <div className="App">
      {isFetching && <p>Carregando...</p>}
      <ul>
        {repositories?.map((repo) => {
          return (
            <li key={repo.full_name}><a href={repo.html_url} target="_blank">{repo.full_name}</a></li>
          )
        })}
      </ul>
    </div>
  )
}

export default App