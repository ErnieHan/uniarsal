import React, { Component } from "react";
import { Content, BoxContent, Title, Body } from "./css";

class Box extends Component {
  render() {
    return (
      <Content>
        <BoxContent>
          <Title>
            <h3>Boltenstern 18K</h3>
          </Title>
          <Body>
            In the course of the course of the Institute of Finance and Economics, a computer-assembled e-commerce
            website co-produced by a group of four was named "PC COOKER" Different from the computer component website
            on the market, it has multiple categories and multiple choices, but it makes consumers unable to compare. We
            emphasize Screen out the most suitable computers with the highest CP values ​​for each consumer's different
            needs. Easy to use Assisted by the operation process, so that consumers who know the computer can find the
            products they need faster and easier.
          </Body>
        </BoxContent>
        <BoxContent>Box</BoxContent>
        <BoxContent>Box</BoxContent>
      </Content>
    );
  }
}

export default Box;
