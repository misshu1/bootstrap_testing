import React from "react";
import "./App.css";
import {
    Card,
    Container,
    Row,
    Col,
    Button,
    FormControl,
    Form
} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Card>
                <Card.Header as="h3">Zoe Scot</Card.Header>
                <Card.Body>
                    <Container>
                        <Row className="mt-2">
                            <Col sm={8}>
                                <Card.Title>Influencer fee</Card.Title>
                                <Card.Text>
                                    How much are you paying Zoe for the agreed
                                    deliverables?
                                </Card.Text>
                            </Col>
                            <Col sm={4}>
                                <FormControl placeholder="$" size="lg" />
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm={8}>
                                <Card.Title>Usage fee</Card.Title>
                                <Card.Text>
                                    Are you paying Zoe a usage fee for this
                                    content?
                                </Card.Text>
                            </Col>
                            <Col sm={4}>
                                <FormControl placeholder="$" size="lg" />
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm={8}>
                                <Card.Title>Total fee</Card.Title>
                            </Col>
                            <Col sm={4}>
                                <h2>$ 0</h2>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm={8}>
                                <Card.Title>Social deliverables</Card.Title>
                                <Card.Text>
                                    What posts have you asked Zoe to do?
                                </Card.Text>
                            </Col>
                        </Row>
                        <Card.Title className="mt-5">Instagram</Card.Title>
                        <Row className="mt-3">
                            <Col>
                                <select className="custom-select">
                                    <option defaultValue>Post</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col>
                                <FormControl
                                    type="date"
                                    min="1000-01-01"
                                    max="3000-12-31"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <select className="custom-select">
                                    <option defaultValue>Post</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col>
                                <FormControl
                                    type="date"
                                    min="1000-01-01"
                                    max="3000-12-31"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <select className="custom-select">
                                    <option defaultValue>Post</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col>
                                <FormControl
                                    type="date"
                                    min="1000-01-01"
                                    max="3000-12-31"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <select className="custom-select">
                                    <option defaultValue>Post</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col>
                                <FormControl
                                    type="date"
                                    min="1000-01-01"
                                    max="3000-12-31"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    variant="light"
                                    className="text-danger font-weight-bold mt-2"
                                >
                                    + Add post
                                </Button>
                            </Col>
                        </Row>
                        <Card.Title className="mt-5">Youtube</Card.Title>
                        <Row className="mt-3">
                            <Col>
                                <select className="custom-select">
                                    <option defaultValue>Post</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col>
                                <FormControl
                                    type="date"
                                    min="1000-01-01"
                                    max="3000-12-31"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Card.Title className="mt-5">Facebook</Card.Title>
                        <Row className="mt-3">
                            <Col>
                                <select className="custom-select">
                                    <option defaultValue>Post</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col>
                                <select className="custom-select">
                                    <option defaultValue>Post</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    variant="light"
                                    className="text-danger font-weight-bold mt-2"
                                >
                                    + Add post
                                </Button>
                            </Col>
                        </Row>
                        <Card.Title className="mt-5">
                            Other Social Media
                        </Card.Title>
                        <Row className="mt-3">
                            <Col>
                                <select className="custom-select">
                                    <option defaultValue>Post</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Col>
                            <Col className="text-muted">
                                *We're unable to track these social networks at
                                the moment, but we will take those into account
                                when we break down campaign spend.
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    variant="light"
                                    className="text-danger font-weight-bold mt-2"
                                >
                                    + Add Social network
                                </Button>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <Card.Title>Other paid content</Card.Title>
                                <Card.Text>
                                    Have you asked Zoe to create any futher
                                    content?
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col sm={0}>
                                <Form.Check
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                />
                            </Col>
                            <Col>
                                <Card.Text>Event</Card.Text>
                            </Col>
                            <Col sm={0}>
                                <Form.Check
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                />
                            </Col>
                            <Col>
                                <Card.Text>Influencer blog content</Card.Text>
                            </Col>
                            <Col sm={0}>
                                <Form.Check
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                />
                            </Col>
                            <Col>
                                <Card.Text>Brand Website content</Card.Text>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col sm={0}>
                                <Form.Check
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                />
                            </Col>
                            <Col>
                                <Card.Text>Newsletter</Card.Text>
                            </Col>
                            <Col sm={0}>
                                <Form.Check
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                />
                            </Col>
                            <Col>
                                <Card.Text>In-store appearence</Card.Text>
                            </Col>
                            <Col sm={0}>
                                <Form.Check
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                />
                            </Col>
                            <Col>
                                <Card.Text>Other</Card.Text>
                            </Col>
                        </Row>
                        <Row className="m-4">
                            <Col className="text-right">
                                <Button
                                    variant="light"
                                    className="font-weight-bold m-2"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="danger"
                                    className="font-weight-bold m-2"
                                >
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default App;
