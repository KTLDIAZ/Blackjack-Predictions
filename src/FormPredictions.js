import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography, Card } from "antd";
import "./App.css";
import axios from "axios";
import { useForm } from "./useForm";

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Predictions = () => {
  const [formState, handleChange, reset] = useForm({
    card1: "",
    card2: "",
    sum: "",
  });

  const [visible, setVisible] = useState({
    show_r1: false,
    show_r2: false,
    show_r3: false,
  });
  const [results, setResults] = useState({
    result1: {},
    result2: {},
    result3: {},
  });

  const { card1, card2, sum } = formState;
  const { result1, result2, result3 } = results;
  const { show_r1, show_r2, show_r3 } = visible;

  const getCards = async () => {
    await axios.get(`/2cards?card1=${card1}&card2=${card2}`).then((res) => {
      reset();
      setResults({ ...results, result1: res.data });
      setVisible({ ...visible, show_r1: true });
    });
  };

  const getSum = async () => {
    await axios.get(`/sum?x=${sum}`).then((res) => {
      reset();
      setResults({ ...results, result2: res.data });
      setVisible({ ...visible, show_r2: true });
    });
  };

  const getBlackjack = async () => {
    await axios.get(`/bljk`).then((res) => {
      setResults({ ...results, result3: res.data });
      setVisible({ ...visible, show_r3: true });
    });
  };

  return (
    <>
      <Row>
        <Form {...layout} name="basic">
          <Col xs={{ span: 8, offset: 1 }} lg={{ span: 5, offset: 2 }}>
            <Title className="tittle" level={4}>
              Win rate with 2 firsts cards
            </Title>

            <Form.Item
              label="Card 1"
              rules={[
                {
                  required: true,
                  message: "Please input your card1!",
                },
              ]}
            >
              <Input onChange={handleChange} value={card1} name="card1" />
            </Form.Item>

            <Form.Item
              label="Card 2"
              name="card2"
              rules={[
                {
                  required: true,
                  message: "Please input your card2!",
                },
              ]}
            >
              <Input onChange={handleChange} value={card2} name="card2" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" onClick={getCards}>
                Predict
              </Button>
            </Form.Item>
          </Col>
          <Col xs={{ span: 8, offset: 1 }} lg={{ span: 5, offset: 2 }}>
            <Title className="tittle" level={4}>
              Win rate with sum of cards
            </Title>
            <Form.Item
              label="Sum of cards"
              rules={[
                {
                  required: true,
                  message: "Please input your sum of cards!",
                },
              ]}
            >
              <Input onChange={handleChange} value={sum} name="sum" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" onClick={getSum}>
                Predict
              </Button>
            </Form.Item>
          </Col>
          <Col xs={{ span: 8, offset: 1 }} lg={{ span: 5, offset: 2 }}>
            <Title className="tittle" level={4}>
              Win rate with Blackjack
            </Title>
            <Form.Item {...tailLayout}>
              <Button type="primary" onClick={() => getBlackjack()}>
                Predict
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </Row>
      <Row>
        <Form {...layout} name="second">
          <Col xs={{ span: 8, offset: 1 }} lg={{ span: 5, offset: 2 }}>
            {show_r1 && (
              <Card title="Results" bordered={false} style={{ width: 300 }}>
                <p>
                  {"Win percentage: " + result1.win_percentaje.toFixed(2) + "%"}
                </p>
                <p>
                  {"Loss percentage: " +
                    result1.loss_percentaje.toFixed(2) +
                    "%"}
                </p>
                <p>
                  {"Push percentage: " +
                    result1.push_percentaje.toFixed(2) +
                    "%"}
                </p>
              </Card>
            )}
          </Col>
          <Col xs={{ span: 8, offset: 1 }} lg={{ span: 5, offset: 2 }}>
            {show_r2 && (
              <Card title="Results" bordered={false} style={{ width: 300 }}>
                <p>
                  {"Win percentage: " + result2.Win_percentage.toFixed(2) + "%"}
                </p>
                <p>
                  {"Loss percentage: " +
                    result2.Loss_percentage.toFixed(2) +
                    "%"}
                </p>
                <p>
                  {"Push percentage: " +
                    result2.Push_percentage.toFixed(2) +
                    "%"}
                </p>
              </Card>
            )}
          </Col>
          <Col xs={{ span: 8, offset: 1 }} lg={{ span: 5, offset: 2 }}>
            {show_r3 && (
              <Card title="Results" bordered={false} style={{ width: 300 }}>
                <p>
                  {"Win blackjack percentage: " +
                    result3.win_blackjack_percentaje.toFixed(2) +
                    "%"}
                </p>
                <p>
                  {"Loss blackjack percentage: " +
                    result3.loss_blackjack_percentaje.toFixed(2) +
                    "%"}
                </p>
                <p>
                  {"Push blackjack percentage: " +
                    result3.push_blackjack_percentaje.toFixed(2) +
                    "%"}
                </p>
              </Card>
            )}
          </Col>
        </Form>
      </Row>
    </>
  );
};

export default Predictions;
