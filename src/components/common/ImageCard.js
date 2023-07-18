import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import "./ImageCard.scss";

const ImageCard = ({ src, poolData }) => {
  let status = "";
  if (poolData.status === 0) status = "Published";
  if (poolData.status === 1) status = "Drafts";
  if (poolData.status === 2) status = "Closed";
  console.log(poolData.drawDate);
  return (
    <div className="image-card">
      {/* customizing style css */}
      <style type="text/css">
        {`
                #view_btn{
                    font-size: 14px;
                    line-height: 17px;
                    margin-top:20px;
                    font-weight: 500;
                    width:100%;
                    background-color:transparent;
                    border: 1px solid rgba(140, 144, 183, 0.2);
                    border-radius: 5px;
                    box-shadow: none;
                }
                #view_btn:hover{
                    font-size: 14px;
                    line-height: 17px;
                    margin-top:20px;
                    font-weight: 500;
                    width:100%;
                    background-color:#F16922;
                    border-color:#F16922;
                    border-radius: 5px;
                }
                `}
      </style>

      <div>
        <div id="image_tag">
          <h5>{status}</h5>
        </div>
        <div id="image_setting">
          <img src="/assets/image/icons/image_setting.svg" />
        </div>
      </div>
      <Carousel variant="light">
        <Carousel.Item>
          <img className="d-block w-100" src={src} alt={poolData.title} />
          {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={src} alt={poolData.title} />
          {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={src} alt={poolData.title} />
          {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <div className="img-heading">
        <h3>{poolData.title}</h3>
        <h6>{poolData.description}</h6>
        <div id="divider"></div>
        <div className="justify-content-between d-flex" id="value">
          <h6>Ticket Value</h6>
          <h6 className="text-white">{`$ ${Math.floor(
            poolData.ticketValue / 1000
          )} K`}</h6>
        </div>
        <div className="justify-content-between d-flex" id="value">
          <h6>Draw Date</h6>
          <h6 className="text-white">{poolData.drawDate}</h6>
        </div>
        <Button className="text-white" id="view_btn" variant="warning">
          <span>View Details</span>
        </Button>
      </div>
    </div>
  );
};

export default ImageCard;
