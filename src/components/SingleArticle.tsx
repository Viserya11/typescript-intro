import { ListGroup } from 'react-bootstrap'
import { SpaceArticle } from '../types'
import {Row, Col, Card} from 'react-bootstrap'

interface ArticleProps {
  article: SpaceArticle
}

const SingleArticle = ({ article }: ArticleProps) => {
    return (
        <Row className="flex-direction-row">
            <Col md={3}>
        <Card>
        <Card.Img variant="top" src={article.imageUrl} />
        <Card.Body>
          <Card.Title>{article.title} <hr></hr></Card.Title>
          <Card.Text>
            {article.summary}
          </Card.Text>
          <div className="btn btn-primary"> Read Article </div>
        </Card.Body>
        <p> Media -  {article.newsSite}</p>
      </Card>
      </Col>
      </Row>
    )
}

export default SingleArticle