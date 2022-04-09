import React from 'react'
import {Form, FormGroup, Label, Input, Row, Card, CardBody, CardTitle, CardImg,CardText, Button, Container} from 'reactstrap'
import {Link, Outlet} from 'react-router-dom'


export default function ListCari ({data, handleSearch}) {

    return(
        <div>
          {/* <Card style={{backgroundColor:"#F1F3FF", height:"20px"}}></Card> */}
          <Card style={{margin:"60px", padding:"20px"}}>
          <Form>
            <Row xs="4">
            <FormGroup>
              <Label for="exampleSelect">
               Tipe Driver
              </Label>
              <Input
                id={data.status}
                name="select"
                type="select"
                onChange={(event) => handleSearch(event)}
              >
                <option>
                  true
                </option>
                <option>
                  false
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleTime">
                Time
              </Label>
              <Input
                id="exampleTime"
                name="time"
                placeholder="time placeholder"
                type="time"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">
                Date
              </Label>
              <Input
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="date"
              />
            </FormGroup>
            </Row>
          </Form>
          </Card>
          <Container style={{padding:"20px"}}>
          <Row xs="3">
            {data.map((car, index) => (
                 <Card >
                     <CardBody>
                     <Link to={`/DetailId/${car.id}`}
                     key={car.id}>
                     <CardImg
                        alt="Card image cap"
                        src={car.image}
                        top
                        width="100%"
                      />
                     <CardTitle tag="h6">
                        {car.name} / {car.category}
                     </CardTitle>
                     <CardTitle tag="h5">
                        Rp {car.price} / hari 
                     </CardTitle>
                     <CardText>
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </CardText>
                     <CardText>
                        Manual
                     </CardText>
                      <Button block color="success"
                      >
                          Pilih Mobil
                      </Button>
                     </Link>
                     </CardBody>
                 </Card>
            ))}
          </Row>
          </Container>
          <Outlet/>
        </div>
    )
}

