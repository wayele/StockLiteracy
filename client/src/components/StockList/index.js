import React, { useState } from "react";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  ButtonGroup,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Card
} from "reactstrap";
import API from "../../utils/API";
import ScoreBadge from "../ScoreBadge";
import { Line } from "react-chartjs-2";
import "./style.css";

function StockList(props) {
  console.log(props)
  const [selectStock, setSelectStock] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [modal, setModal] = useState(false);
  const [stockInfo, setStockInfo] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = selectStock.indexOf(selected);
    if (index < 0) {
      selectStock.push(selected);
    } else {
      selectStock.splice(index, 1);
    }
    setSelectStock([...selectStock]);
  };


  const toggle = () => {
    console.log("TOGGLE")
    // console.log(props);
    setModal(!modal);
  };

  const handleInfo = (stock) => {
    console.log(stock);
    setStockInfo(stock);
    toggle();
  }

  // CSS for shadow effect on card
  const well = {
    boxShadow: "3px 3px 3px #9E9E9E",
  };
  // CSS for list header
  const listHeader = {
    fontWeight: "550",
    fontFamily: "Georgia",
    color: "rgb(37, 28, 28)",
    textAlign: "center",
    fontSize: "25px",
    backgroundColor: "opaque",
  };
  const listHeaderP = {
    fontWeight: "550",
    textAlign: "center",
    fontFamily: "Georgia",
    fontSize: "20px",
    backgroundColor: "opaque",
  };

  const submitStocks = (event) => {
    event.preventDefault();
    const stockIds = [];
    selectStock.forEach((stock) => {
      stockIds.push(stock._id);
    });
    API.resetStocks()
      .then((res) => {
        console.log(res.data);
        return API.submitStocks(stockIds);
      })
      .then((res) => {
        console.log(res.data);
        return API.getPopulated();
      })
      .then((res) => {
        console.log(res.data[0].stocks);
        const newChartData = res.data[0].stocks.map((stock) => {
          console.log(stock);
          return {
            _id: stock._id,
            symbol: stock.symbol,
            historical: stock.historical,
          };
        });
        setChartData(newChartData);
      }).then(() => {
        setShowScore(!showScore);
      });
  };
  const clearStocks = (event) => {
    event.preventDefault();
    setSelectStock([]);
    setChartData([])
    setShowScore(!showScore)
    API.resetStocks().then((res) => {
      console.log(res.data);
    });
  };

  let scoreArray = [];
  selectStock.map((stock) =>
    scoreArray.push([parseFloat(stock.performance).toFixed(2)])
  );


  return (
    <Container>
      <h2 style={listHeader}>STOCK LIST</h2>
      <p style={listHeaderP}>Do your research, pick 5, and submit!</p>
      <Row>
        <Col lg="3" xs="12" md="3" s="12">
          <ListGroup
            className="flex-column nav"
            className="scrollable"
            style={well}
          >
            {props.stocks.map((stock) => (
              <ListGroupItem key={stock.symbol} className="justify-content-between">
                {stock.symbol}
                <ButtonGroup id="buyBtn">
                  <Button
                    outline
                    color="success"
                    onClick={() => onCheckboxBtnClick(stock)}
                    active={selectStock.includes(stock)}
                  >
                    Buy
                  </Button>
                  <Button
                    outline
                    color="secondary"
                    onClick={() => handleInfo(stock)}
                  >
                    Info
                  </Button>

                </ButtonGroup>
              </ListGroupItem>
            ))}
            {stockInfo ? (
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader id="modalHeader">
                  Information
                  </ModalHeader>
                <ModalBody >
                  {stockInfo.symbol}
                  <br></br>
                  <br></br>
                  {stockInfo.description}
                  <br></br>
                  <br></br>
                    Price: ${stockInfo.historical[0].open}
                </ModalBody>
              </Modal>) : null
            }
          </ListGroup>
          <ButtonGroup id="underButtons">
            <Button
              onClick={clearStocks}
              className="float"
              outline
              color="secondary"
            >
              Reset
            </Button>

            <Button
              onClick={submitStocks}
              className="float"
              outline
              color="success"
            >
              Submit
            </Button>
          </ButtonGroup>
        </Col>
        <Col lg="9" xs="12" md="9" s="12">
          <Card className="chartParent" style={well}>
            <Card id="chartCont">
              <div className="chart">
                {chartData[0] && (
                  <Line id="chart"
                    data={{
                      datasets: chartData.map((c) => ({
                        label: c.symbol,
                        data: c.historical.map((h) => h.close),
                        fill: false,
                        borderColor:
                          "#" +
                          (0x1000000 + Math.random() * 0xffffff)
                            .toString(16)
                            .substr(1, 6),
                        backgroundColor: "rgba(146, 126, 120, 0.87)",
                      })),
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "June",
                        "July",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                    }}
                    options={{
                      title: {
                        display: true,
                        text: "Your Stocks",
                        fontSize: 25,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                )}
                {showScore && <div id="scoreBadgeDiv">
                  <ScoreBadge scores={scoreArray}></ScoreBadge>
                </div>}
              </div>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default StockList;
