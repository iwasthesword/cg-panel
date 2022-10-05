import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

export default function App() {
  let params = useParams();
  let coins = params.str.split(";");
  coins.forEach(function(element, index) {
    coins[index] = element.split(",");
  });
  return (
    <Container fluid={true}>
      <Row align="center" style={{ height: '100vh' }}>
      {coins.map(function(coin, i){
        return <Col><coingecko-coin-price-chart-widget coin-id={coin[0]} currency={coin[1]} height="300"></coingecko-coin-price-chart-widget></Col>
      })}
      </Row>
    </Container>
  );
}