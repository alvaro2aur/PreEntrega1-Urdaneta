import { Badge } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";

const CardWidget = () => {
    return ( <div>
        <BsCart3 size='1.5em'/>
        <Badge bg="danger">9</Badge>
    </div>
     );
}
 
export default CardWidget;