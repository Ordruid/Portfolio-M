import React from 'react'
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
  <>
    <div className="App">
      <header className="App-header">
        Brian Hobby, Junior Software Engineer
      </header>
    </div><div className="Body">
        <Card className="Body">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </div>
    <div className="Footer">
      Footer
    </div>
  </>
  )
}

export default Home