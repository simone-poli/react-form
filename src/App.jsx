import { useState } from 'react'

const initialArticles = [
  {
    title: 'Article 1',
    content: 'This is the content of article 1.'
  },
  {
    title: 'Article 2',
    content: 'This is the content of article 2.'
  },
  {
    title: 'Article 3',
    content: 'This is the content of article 3.'
  },
  {
    title: 'Article 4',
    content: 'This is the content of article 4.'
  },
  {
    title: 'Article 5',
    content: 'This is the content of article 5.'
  }
]

function App() {
  const [newArticle, setNewArticle] = useState('')
  const [articles, setArticles] = useState(initialArticles)





  function handleSubmit(e) {
    e.preventDefault()
    // articles.push(newArticle)
    setArticles((prev) => [
      ...prev,
      {
        title: newArticle,
        content: 'Lorem ipsum...'
      }
    ])

    setNewArticle('')
  }



  const removeTask = index => {
    const updatesTask = articles.filter((articles, i) => {
      return i !== index
    })
    setArticles(updatesTask)
  }

  return (
    <>
      <div className="container mt-4">
        <ul className="list-group">
          {
            articles.map((articles, index) => {
              return (
                <li key={index} className="list-group-item d-flex justify-content-between">
                  <p>{articles.title}</p>
                  <button onClick={() => removeTask(index)}><i class="fa-solid fa-trash-can"></i></button>
                </li>

              )
            })

          }
        </ul>



        <form onSubmit={handleSubmit}>
          <input className="form-control" type="text" placeholder='insert new article title' value={newArticle} onChange={e => setNewArticle(e.target.value)} />
          <button className="btn" type="submit">Insert</button>
        </form>
      </div>
    </>
  )
}

export default App
