import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Form, Button } from 'react-bootstrap';
import DistanceResult from './DistanceResult';

function App() {

  interface distanceResult {
    value: number,
    unit: string
  }

  const [result, setResult] = useState<distanceResult | undefined>(undefined);

  const fetchTestResult = async () => { 
    const res = await fetch('http://localhost:8080/add/testresult')
      .then(data => data.json())
      .then(json => setResult(json));
  }

  useEffect(() => {
    fetchTestResult();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <Container>
          <Form className='form rounded p-4'>
          <div>
            <h2>
              Distance Calculator
            </h2>
            <hr></hr>
          </div>
          <Form.Control 
            className="me-auto" 
            placeholder="Enter distance value..."  
          />
          <Form.Select>
            <option value="Select units..."></option>
            <option value="METERS">Meters (m)</option>
            <option value="YARDS">Yards (yd)</option>
          </Form.Select>
          <hr/>

          <Form.Control 
            className="me-auto" 
            placeholder="Enter distance value..." 
          />
          <Form.Select>
            <option value="Select units..."></option>
            <option value="METERS">Meters (m)</option>
            <option value="YARDS">Yards (yd)</option>
          </Form.Select>
          <hr/>

          <div>
            {/*TODO: make a public endpoint for GET requests to get all available units*/}
            <Form.Select>
              <option value="METERS">Meters (m)</option>
              <option value="YARDS">Yards (yd)</option>
            </Form.Select>
            <Button variant="secondary">
              Calculate sum
            </Button>
          </div> 
          <DistanceResult value={result?.value} unit={result?.unit}/>
          </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;
