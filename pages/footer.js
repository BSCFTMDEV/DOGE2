/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-spacing */
/* eslint-disable key-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import 'sf-font';
import { Text, Row, Spacer, Container, Col } from '@nextui-org/react';

export default function Footer () {

    const footer1 = [
        {
            id: 1,
            img: "discord.png",
            url: "https://discord.com/"
        },
        {
            id: 2,
            img: "youtube.png",
            url: "https://www.youtube.com/"
        },
        {
            id: 3,
            img: "twitter.png",
            url: "https://twitter.com/"
        }
    ]

    const footer2 = [
        {
            id: 1,
            img: "bsc.png"
        },
        {
            id: 2,
            img: "polygonwhite.png"
        },
        {
            id: 3,
            img: "ethereumlogo.png"
        }
    ]


return (
    <div>
    <Spacer></Spacer>
<Container style={{borderTop:'1px solid #B22222'}}>
    <Container md gap={3}>
    <Spacer></Spacer>
                <Row gap={3}>
                    <Col>
                            <a href="/">
                            <Text h2 style={{color:"#fff",fontSmooth:"always",textShadow:"-0px 0px 3px #ffffff",fontFamily:"SF Pro Display",fontWeight:"700"}}>DogeBox</Text>
                            </a>
                            <Text style={{color:"#fff",fontSmooth:"always",fontFamily:"SF Pro Display"}}>Mint,Farm and Sale!!!</Text>
                       </Col>
                    </Row>
                    <Row gap={3}>
             
                    
                    <Col style={{marginLeft:'5px'}}>
                            <Text h4>Our Partners</Text>
                               <a href=""><img src="discordlogo.png"
                               style={{
                                   width:"200px"
                               }}
                               /></a>
                    </Col>
                </Row>
               <Row gap={3}>
                            <Text>©2022 NFTDOGE, All Rights Reserved.</Text>
                </Row>
    </Container>
    </Container>
    </div>
);

}