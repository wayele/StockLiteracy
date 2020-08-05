import React, { useState } from "react";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Jumbotron,
  Container,
} from "reactstrap";
import "./style.css";
import API from "../../utils/API";
import ScoreBadge from "../ScoreBadge";
import Card2 from "../Card2";
import { Bar, Line, Pie } from "react-chartjs-2";
function StockList(props) {
  const [selectStock, setSelectStock] = useState([]);
  const [chartData, setChartData] = useState([]);
  const onCheckboxBtnClick = (selected) => {
    const index = selectStock.indexOf(selected);
    if (index < 0) {
      selectStock.push(selected);
    } else {
      selectStock.splice(index, 1);
    }
    setSelectStock([...selectStock]);
  };
  // modal stuff
  // const {
  //  className
  // } = props;
  const [modal, setModal] = useState(false);
  const toggle = (props) => {
    console.log("TOGGLE:" + props);
    setModal(!modal);
  };
  // CSS for shadow effect on card
  const well = {
    boxShadow: "3px 3px 3px #9E9E9E",
  };
  // CSS for list header
  const listHeader = {
    fontWeight: "550",
    textAlign: "center",
    fontSize: "15px",
    backgroundColor: "opaque",
  };
  const listHeaderP = {
    fontWeight: "550",
    textAlign: "center",
    fontSize: "12px",
    textStyle: "italic",
    backgroundColor: "opaque",
  };
  // const chartData = []
  // Changed to take whole stock object rather than just the object id
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
      });
  };
  const clearStocks = (event) => {
    event.preventDefault();
    setSelectStock([]);
    API.resetStocks().then((res) => {
      console.log(res.data);
    });
  };
  // wubUpdates
  // const populatedStocks = (event) => {
  //  event.preventDefault();
  //  API.getPopulated()
  //   .then((res) => console.log(res.data));
  // }
  // Jason trying to create score
  // let score = 0;
  let scoreArray = [];
  selectStock.map((stock) =>
    scoreArray.push([parseFloat(stock.performance).toFixed(2)])
  );
  // console.log("this is the score array:" + scoreArray);
  // const totalScore = array.reduce(function (accumulator, scoreArray) {
  //  return scoreArray
  // }, 0);
  const totalScore = scoreArray.reduce((a, b) => a + b, 0);
  // const totalScore = scoreArray.reduce(
  //  (previousScore, currentScore, index) => previousScore + currentScore,
  //  0);
  // console.log("This is the total SCOREEEEEEE: " + totalScore);
  return (
    <Container>
      <h2 style={listHeader}>STOCK LIST</h2>
      <p style={listHeaderP}>Do your research, pick 5, and submit!</p>
      <Row>
        <Col className="scrollable" id="stockbox" lg="3" xs="12" md="3" s="12">
          <ListGroup className="flex-column nav" style={well}>
            {props.stocks.map((stock) => (
              <>
                <ListGroupItem key={stock} className="justify-content-between">
                  {stock.symbol}
                  <Button
                    id="buyBtn"
                    className="float-right"
                    outline
                    color="success"
                    onClick={() => onCheckboxBtnClick(stock)}
                    active={selectStock.includes(stock)}
                  >
                    Buy
         </Button>
                  <Button
                    key={stock}
                    className="float-right"
                    id="infoBtn"
                    outline
                    color="secondary"
                    onClick={toggle}
                  >
                    Info
         </Button>
                  <Modal key={stock} isOpen={modal} toggle={toggle}>
                    <ModalHeader key={stock} toggle={toggle}>
                      Information
          </ModalHeader>
                    <ModalBody key={stock}>
                      {stock.symbol}
                      <br></br>
                      <br></br>
                      {stock.description}
                      <br></br>
                      <br></br>
           Price: ${stock.historical[0].open}
                    </ModalBody>
                  </Modal>
                </ListGroupItem>
              </>
            ))}
          </ListGroup>
        </Col>
        <Col lg="9" xs="12" md="9" s="12">
          <Jumbotron>
            <div className="chart">
              {chartData[0] && (
                <Line
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
                      text: "Trend",
                      fontSize: 25,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              )}
            </div>
          </Jumbotron>
        </Col>
      </Row>
      <Col>
        <Row>
          <Col>
            <Button
              id="resetBtn2"
              onClick={clearStocks}
              className="float"
              outline
              color="secondary"
            >
              Reset
      </Button>
          </Col>
          <Col>
            <Button
              id="submitBtn2"
              onClick={submitStocks}
              className="float"
              outline
              color="success"
            >
              Submit
      </Button>
          </Col>
          {/* <Col>
      <Button onClick={populatedStocks}>Populate</Button>
     </Col> */}
        </Row>
        <Row>
          <Col>
            <div id="scoreBadgeDiv">
              <ScoreBadge scores={scoreArray}></ScoreBadge>
            </div>
          </Col>
        </Row>
      </Col>
      <Col>
        {/* <Card2> */}
        {/* </Card2> */}
      </Col>
    </Container>
  );
}
export default StockList;