import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import SingleArticle from './SingleArticle'
import { SpaceArticle } from '../types'

const FetchComponent = () => {
  const [spaceArticles, setSpaceArticles] = useState<SpaceArticle[]>([])

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        'https://api.spaceflightnewsapi.net/v3/articles'
      )
      console.log('RESPONSE', response)
      if (response.ok) {
        let data = await response.json()
        console.log('DATA', data)
        setSpaceArticles(data)
      } else {
        console.log('error from the server')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      
      <ListGroup className="text-dark">
        {spaceArticles.map((article) => (
          <SingleArticle article={article} key={article.id} />
        ))}
      </ListGroup>
    </div>
  )
}

export default FetchComponent