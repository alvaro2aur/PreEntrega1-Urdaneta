import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'


const ItemList = ({products}) => {
    return ( 
    <div className='flex-container'>
        {products.length > 0 && products.map( x => {
          return (
          <Card key={x.id} style={{ width: "18rem" }} className='flex-item'>
            <Card.Img variant="top" src={x.image} />
            <Card.Body>
              <Card.Title>{x.name}</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          )
        }) 
      }
    </div> 
    );
}
 
export default ItemList;