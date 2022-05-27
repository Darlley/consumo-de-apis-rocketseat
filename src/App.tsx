import { useEffect, useState } from "react"
import axios from "axios"

type Repository = {
  full_name: string,
  description: string,
  html_url: string
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    axios.get('https://api.github.com/users/Darlley/repos').then(response => {
      setRepositories(response.data)
    })
  }, [])

  return (
    <div className="App">
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
