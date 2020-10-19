import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import '../styles/style.css';

export default class Cards extends Component {

  render(){
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.imagePath} />
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
                {this.props.description}
            </Card.Text>
            <Button variant="outlined" href={this.props.url} target="_blank" >More Info</Button>
        </Card.Body>
        </Card>
    )
  }
}
