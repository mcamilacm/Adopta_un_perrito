import MyCard from './MyCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const MyCardcomponent = ({image,title, description,buttonText,Badgetext}) => {
    return (

<>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Tags color={Badgetext} />
        <Card.Text> {description}
        </Card.Text>
        
        <Button variant="primary"> {buttonText}</Button>
      </Card.Body>
    </Card>
   

</>
    )



}

export default MyCardcomponent; 