import { useState } from 'react'


function App() {
  const [newArticle, setNewArticle] = useState('')

  const articles = [
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

  return (
    <>
    <div className="container mt-4">
      <ul className="list-group">
        {
          articles.map((item, index) => {
            return (
              <li key={index} className="list-group-item">{item.title}</li>

            )
          })

        }
      </ul>
      <input type="text" value={newArticle} onChange={e => setNewArticle(e.target.value)} />
      <p>Add new article</p>
      </div>
    </>
  )
}

export default App
