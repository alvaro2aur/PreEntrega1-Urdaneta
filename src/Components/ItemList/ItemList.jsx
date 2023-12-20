import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'


const ItemList = ({products}) => {
   return ( 
    <div className='flex-container'>
        {products.length > 0 && products.map( x => {
          return (
          <Card key={x.id} className='flex-item' style={{width: "18rem"}}>
            <Card.Img variant="top" src={x.image} />
            <Card.Body>
              <Card.Title>{x.title}</Card.Title>
              <Card.Text>{x.description}</Card.Text>
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