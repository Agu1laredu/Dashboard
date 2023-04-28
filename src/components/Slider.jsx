import React from "react";
import Slider from "react-slick";

function SampleSlider() {
  const cards = [
    {
      ticket: "total",
      totalTickets: "$145,000",
      text: "Total quantity",
      texto: "Donations received",
    },
    {
      ticket: "pending",
      totalTickets: "50.000,0",
      text: "Total quantity",
      texto: "Employees",
    },
    {
      ticket: "inProcess",
      totalTickets: "130.000",
      text: "Total quantity",
      texto: "Clients",
    },
    {
      ticket: "close",
      totalTickets: "125.000",
      text: "Total quantity",
      texto: "Finishing projects",
    },
    {
      ticket: "total",
      totalTickets: "$145,000",
      text: "Total quantity",
      texto: "Donations received",
    },
    {
      ticket: "inProcess",
      totalTickets: "130.000",
      text: "Total quantity",
      texto: "Clients",
    },
    {
      ticket: "pending",
      totalTickets: "50.000,0",
      text: "Total quantity",
      texto: "Employees",
    },
    {
      ticket: "total",
      totalTickets: "$145,000",
      text: "Total quantity",
      texto: "Donations received",
    },
    {
      ticket: "close",
      totalTickets: "125.000",
      text: "Total quantity",
      texto: "Finishing projects",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <CardTicket
          key={card.ticket}
          ticket={card.ticket}
          totalTickets={card.totalTickets}
          text={card.text}
          texto={card.texto}
        />
      ))}
    </Slider>
  );
}

export default SampleSlider;
