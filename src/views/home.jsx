import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Container fluid className="bg-dark text-white py-5 text-center">
        <h1>Welcome to MAJU Store</h1>
        <p>
          Disini kita menjual berbagai macam produk dengan harga yang murah terjangkau dapat dipercaya keamanan dan tentunya kualitasnya terjamin
        </p>
        <Link to="/product" className="btn btn-primary">
          Cari Product
        </Link>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Product Unggulan</h2>
        <Row className="justify-content-around">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1521765191/gbthbevbpzvufoswup8w.jpg"
                style={{ width: "100px", height: "100px" }} // Mengatur lebar dan tinggi gambar
              />
              <Card.Body>
                <Card.Title>Apple </Card.Title>
                <Card.Text>
                  Apples are a type of fruit, or fruit produced from apple trees. Apples usually have a red skin when ripe and (ready to eat), but can also have a green or yellow skin.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dqaUV7OVjqpqgjAg8mqX8T_iTRpbAeOX6A&usqp=CAU"
                style={{ width: "100px", height: "100px" }} // Mengatur lebar dan tinggi gambar
              />
              <Card.Body>
                <Card.Title>Orange</Card.Title>
                <Card.Text>
                 Orange is the fruit of the citrus species in the Rutaceae family. It refers to Citrus sinensis, which is also called sweet orange and Citrus aurantium, which is called bitter orange
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.astronauts.id/blog/wp-content/uploads/2022/10/Cara-Mematangkan-Pisang-Tanpa-Karbit-1200x900.jpg"
                style={{ width: "100px", height: "100px" }} // Mengatur lebar dan tinggi gambar
              />
              <Card.Body>
                <Card.Title>Banana</Card.Title>
                <Card.Text>
                  Banana is the common name given to large terna plants with large, elongated leaves that grow directly from the stalk.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 2 dan Card 3 dengan pengaturan style yang sama */}
        </Row>
      </Container>
    </div>
  );
};

export default Home;