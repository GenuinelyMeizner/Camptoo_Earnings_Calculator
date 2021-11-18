import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const vehicleTypes = [{title: "Motorhome", value: 300}, {title: "Campervan", value: 150}];
const berths = [{title: "1 berth", value: 45}, {title: "2 berths", value: 90}, {title: "3 berths",value: 135}, {title: "4 berths", value: 180}, {title: "5 berths", value: 225}];
const productionYears = [{title: "Year of build 2021", value: 350}, {title: "Year of build 2020", value: 325}, {title: "Year of build 2019", value: 300}, {title: "Year of build 2018", value: 275}, {title: "Year of build 2017", value:  250}];

function EarningsCalculator() {
  let [vehicleTypeValue, setVehicleTypeValue] = useState("");

  let handleVehicleType = (e: any) => {
    setVehicleTypeValue(e.target.value);
  }

  let [berthValue, setBerthValue] = useState("");

  let handleBerth = (e: any) => {
    setBerthValue(e.target.value);
  }

  let [productionYearValue, setProductionYearValue] = useState("");

  let handleProductionYear = (e: any) => {
    setProductionYearValue(e.target.value);
  }

  return (
    <Card className="m-5" style={{width: '20rem'}}>
      <Card.Body>
        <Card.Title>Calculate what you can earn per week</Card.Title>
          <Form.Select id="vehicleTypeValue" className="mt-3" onChange={handleVehicleType}>
            <option selected disabled hidden>Choose type ...</option>
            {vehicleTypes.map((vehicleType) => <option key={vehicleType.title} value={vehicleType.value}>{vehicleType.title}</option>)}
          </Form.Select>
          <Form.Select className="mt-4" onChange={handleBerth}>
            <option selected disabled hidden>Choose berths ...</option>
            {berths.map((berth) => <option key={berth.title} value={berth.value}>{berth.title}</option>)}
          </Form.Select>
          <Form.Select className="mt-4" onChange={handleProductionYear}>
            <option selected disabled hidden>Choose year ...</option>
            {productionYears.map((productionYear) => <option key={productionYear.title} value={productionYear.value}>{productionYear.title}</option>)}
          </Form.Select>
          <div className="text-center mt-2">
            <p>€{Number(vehicleTypeValue) + Number(berthValue) + Number(productionYearValue)} weekly income</p>
          </div>
          <div className="text-center">
            <Button variant="warning" className=" text-center">List my vehicle</Button>
          </div>
          <div className="text-center my-2">
            <Card.Link href="https://www.camptoo.com/rent-out-my-rv">Read more about renting out</Card.Link>
          </div>
          <div className="text-center mb-2">
            <Card.Link href="https://www.camptoo.com/supply/Netherlands">I want to rent a vehicle</Card.Link>
          </div>
      </Card.Body>
    </Card>
  );
}

export default EarningsCalculator;
