import React, { Component } from "react";
import { Content, BoxContent, Title, Body } from "./css";
import Masonry from "react-masonry-component";

class Box extends Component {
  render() {
    const masonryOptions = {
      transitionDuration: 500,
    };
    const imagesLoadedOptions = { background: ".my-bg-image-el" };
    return (
      <>
        <Content>
          <Masonry
            className={"my-gallery-class"}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            imagesLoadedOptions={imagesLoadedOptions}
          >
            <BoxContent>
              <Title>
                <h3>Boltenstern 18K</h3>
              </Title>
              <Body>
                In the course of the course of the Institute of Finance and Economics, a computer-assembled e-commerce
                website co-produced by a group of four was named "PC COOKER" Different from the computer component
                website on the market, it has multiple categories and multiple choices, but it makes consumers unable to
                compare. We emphasize Screen out the most suitable computers with the highest CP values ​​for each
                consumer's different needs. Easy to use Assisted by the operation process, so that consumers who know
                the computer can find the products they need faster and easier.
              </Body>
            </BoxContent>
            <BoxContent>
              <Title active>
                <h3>Boltenstern 18K</h3>
              </Title>
              <Body>
                In the course of the course of the Institute of Finance and Economics, a computer-assembled e-commerce
                website co-produced by a group of four was named "PC COOKER" Different from the computer component
                website on the market, it has multiple categories and multiple choices, but it makes consumers unable to
                compare. We emphasize Screen out.
              </Body>
            </BoxContent>
            <BoxContent>
              <Title>
                <h3>Boltenstern 18K</h3>
              </Title>
              <Body>
                In the course of the course of the Institute of Finance and Economics, a computer-assembled e-commerce
                website co-produced by a group of four was named "PC COOKER" Different from the computer component
                website on the market, it has multiple categories and multiple choices, but it makes consumers unable to
                compare. We emphasize Screen out the most suitable computers with the highest CP values ​​for each
                consumer's different needs. Easy to use Assisted by the operation process, so that consumers who know
                the computer can find the products they need faster and easier.
              </Body>
            </BoxContent>
            <BoxContent>
              <Title active>
                <h3>DINOSAUR</h3>
              </Title>
              <Body>
                In the process of studying the UX of website design, I used Mobirise software to initially create the
                basic structure of an e-commerce website for skin care products. I designed the products in Photoshop
                and presented the design drafts with Mockup's product samples.
              </Body>
            </BoxContent>
            <BoxContent>
              <Title>
                <h3>Boltenstern 18K</h3>
              </Title>
              <Body>
                In the course of the course of the Institute of Finance and Economics, a computer-assembled e-commerce
                website co-produced by a group of four was named "PC COOKER" Different from the computer component
                website on the market, it has multiple categories and multiple choices, but it makes consumers unable to
                compare. We emphasize Screen out the most suitable computers with the highest CP values ​​for each
                consumer's different needs. Easy to use Assisted by the operation process, so that consumers who know
                the computer can find the products they need faster and easier.
              </Body>
            </BoxContent>
            <BoxContent>
              <Title>
                <h3>Boltenstern 18K</h3>
              </Title>
              <Body>
                In the course of the course of the Institute of Finance and Economics, a computer-assembled e-commerce
                website co-produced by a group of four was named "PC COOKER" Different from the computer component
                website on the market, it has multiple categories and multiple choices, but it makes consumers unable to
                compare. We emphasize Screen out the most suitable computers with the highest CP values ​​for each
                consumer's different needs. Easy to use Assisted by the operation process, so that consumers who know
                the computer can find the products they need faster and easier.
              </Body>
            </BoxContent>
            <BoxContent>
              <Title>
                <h3>Boltenstern 18K</h3>
              </Title>
              <Body>
                In the course of the course of the Institute of Finance and Economics, a computer-assembled e-commerce
                website co-produced by a group of four was named "PC COOKER" Different from the computer component
                website on the market, it has multiple categories and multiple choices, but it makes consumers unable to
                compare. We emphasize Screen out the most suitable computers with the highest CP values ​​for each
                consumer's different needs. Easy to use Assisted by the operation process, so that consumers who know
                the computer can find the products they need faster and easier.
              </Body>
            </BoxContent>
          </Masonry>
        </Content>
      </>
    );
  }
}

export default Box;
