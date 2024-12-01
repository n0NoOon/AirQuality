import { useEffect } from "react";

export function randomCity() {
  const cities = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Los Angeles",
    "Chicago",
    "Delhi",
    "Mumbai",
    "São Paulo",
    "Mexico City",
    "Shanghai",
    "Cairo",
    "Dhaka",
    "Buenos Aires",
    "Kolkata",
    "Istanbul",
    "Karachi",
    "Moscow",
    "Lagos",
    "Manila",
    "Kyoto",
    "Barcelona",
    "Rome",
    "Amsterdam",
    "Sydney",
    "Toronto",
    "Singapore",
    "Dubai",
    "Berlin",
    "Bangkok",
  ];
  const randomNum = Math.floor(Math.random() * cities.length);
  const firstCity = cities[randomNum];

  return firstCity;
}
