import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text className="text-left">
                    Perjalanan pahlawan mistis dan emosional, DUNE menceritakan kisah Paul Atreides, 
                    Seorang pemuda cerdas dan berbakat yang lahir dalam takdir besar diluar pemahamannya
                  </Card.Text>
                  <Card.Text className="text-center">
                    22 OKTOBER 2021 DI BIOSKOP TERDEKAT
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    EVERYTHING EVERYWHERE
                  </Card.Title>
                  <Card.Text className="text-left">
                    Everything EveryWhere All At Once adalah petualangan yang penuh aksi, sci-fi yang 
                    lucu dan berjiwa besar tentang seorang Wanita Cina-Amerika, Seorang imigran Tiongkok
                  </Card.Text>
                  <Card.Text className="text-center">
                    22 JUNI 2022 DI BIOSKOP TERDEKAT
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE STROM</Card.Title>
                  <Card.Text className="text-left">
                    infinite Strom adalah sebuah film petualangan drama Amerika Serikat tahun 2022 yang 
                    disutradarai oleh Matgorzata Szumowska, dengan skenario oleh Josh Rollins, berdasarkan.
                  </Card.Text>
                  <Card.Text className="text-center">
                    25 MARET 2022 DI BIOSKOP TERDEKAT
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">
                    Joker adalah film cerita seru/Kejahatan psikologis Amerika Serikat tahun 2019 yang disutradarai oleh Todd Phillips dan diproduseri oleh Todd Phillip
                  </Card.Text>
                  <Card.Text className="text-center">
                    4 OKTOBER 2019 DI BIOSKOP TERDEKAT
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TOY STORY 3</Card.Title>
                  <Card.Text className="text-left">
                    Toy Story 3 adalah film komedi animasi komputer Amerika 2010 yang diproduksi oleh pixar Animation Studios untuk Walt Disney Pictures.
                  </Card.Text>
                  <Card.Text className="text-center">
                    18 JUNI 2022 DI BIOSKOP TERDEKAT
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS</Card.Title>
                  <Card.Text className="text-left">
                    Ahli biokimia Michael Morbius mencoba menyembuhkan dirinya sendiri dari penyakit darah langka.
                  </Card.Text>
                  <Card.Text className="text-center">
                    1 APRIL 2022 DI BIOSKOP TERDEKAT
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

export default Trending