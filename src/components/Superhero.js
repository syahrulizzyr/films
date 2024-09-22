import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ANT-MAN</Card.Title>
                  <Card.Text className="text-left">
                    Ant-Man adalah orang Amerika tahun 2015 film pahlawan super berdasarkan Marvel 
                    Cosmics karakter dengan nama yang sama.
                  </Card.Text>
                  <Card.Text className="text-center">
                    17 JULI 2015
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGERS: Endgame</Card.Title>
                  <Card.Text className="text-left">
                    Melanjutkan Avengers Infinity War, dimana kejadian setelah Thanos berhasil mendapatkan 
                    semua infinity stones dan memusnahkan 50% semua...
                  </Card.Text>
                  <Card.Text className="text-center">
                    26 APRIL 2019
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THE DARK KNIGHT</Card.Title>
                  <Card.Text className="text-left">
                    The Dark Knight adalah film superhero 2008 yang disutradarai, diproduksi, dan 
                    ditulis bersama oleh Christoper Nolan
                  </Card.Text>
                  <Card.Text className="text-center">
                    18 JULY 2008
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={robinhoodImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                  <Card.Text className="text-left">
                    Robin Hood sebagai tentara salib kembali ke negerinya dalam keadaan yang berbeda. 
                    Ia menemukan pejabat korup dan menghabiskan uang kerajaan sementara rakyat...
                  </Card.Text>
                  <Card.Text className="text-center">
                    21 NOVEMBER 2018
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDER-MAN: No Way Home</Card.Title>
                  <Card.Text className="text-left">
                    Pertama kalinya dalam sejarah layar lebar Spider-man, identitas asli dari pahlawan 
                    nan ramah ini terbongkar, sehingga membuat tanggung jawabnya sebagai pahlawan.
                  </Card.Text>
                  <Card.Text className="text-center">
                    16 DESEMBER 2021
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MAN OF STEEL</Card.Title>
                  <Card.Text className="text-left">
                    Man of Steel adalah film pahlawan super Amerika tahun 2013 yang disutradarai oleh 
                    Zack Snyder, Film ini menceritakan karakter DC Cosmics, Superman dalam film bermain bersama Amy Adams
                  </Card.Text>
                  <Card.Text className="text-center">
                    14 JUNI 2013
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero