import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "reactstrap";

export default function Coin() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) =>
        alert(
          "API ma'lumotlarini olishda xatolik yuz berdi, iltimos, dastur yaratuvchisi bilan bog'laning!"
        )
      );
  }, []);

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col md="12">
          <Table className="mt-5" dark hover responsive>
            <thead>
              <tr>
                <th width="10%">Market Cap Rank</th>
                <th width="25%">Crypto Name</th>
                <th width="20%">Current Price</th>
                <th width="20%">Market Cap</th>
                <th width="20%">Market Cap Change</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((crypto, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{crypto.market_cap_rank}</th>
                    <td style={{ textAlign: "left" }}>
                      <img
                        src={crypto.image}
                        alt="Crypto Currency"
                        className="currencyImage"
                      />
                      {crypto.name}
                    </td>
                    <td>{crypto.current_price}</td>
                    <td>
                      {crypto.market_cap
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
                      $
                    </td>
                    {++crypto.market_cap_change_percentage_24h < 0 ? (
                      <td className="red">
                        {crypto.market_cap_change_percentage_24h.toFixed(2)} %
                      </td>
                    ) : (
                      <td className="green">
                        {crypto.market_cap_change_percentage_24h.toFixed(2)} %
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
