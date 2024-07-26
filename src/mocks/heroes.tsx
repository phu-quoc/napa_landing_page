import { Hero } from "../types/hero";
import IMAGES from "../constants/image";

export const HEROES: Hero[] = [
  {
    block: (
      <svg
        width="64px"
        height="64px"
        strokeWidth="0.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
      >
        <path
          d="M6.74534 4H17.3132C17.3132 4 16.4326 17.2571 12.0293 17.2571C9.87826 17.2571 8.56786 14.0935 7.79011 10.8571C6.97574 7.46844 6.74534 4 6.74534 4Z"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.3132 4C17.3132 4 18.2344 3.01733 19 2.99999C20.5 2.96603 20.7773 4 20.7773 4C21.0709 4.60953 21.3057 6.19429 19.8967 7.65715C18.4876 9.12 16.9103 10.4 16.2684 10.8571"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.74527 4.00001C6.74527 4.00001 5.78547 3.00614 4.99995 3.00001C3.49995 2.9883 3.22264 4.00001 3.22264 4.00001C2.92908 4.60953 2.69424 6.19429 4.1033 7.65715C5.51235 9.12001 7.14823 10.4 7.79004 10.8572"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.50662 20C8.50662 18.1714 12.0292 17.2571 12.0292 17.2571C12.0292 17.2571 15.5519 18.1714 15.5519 20H8.50662Z"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: IMAGES.HERO1,
    title: "Nibh viverra",
    content:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam.\n" +
      "              Consequat turpis natoque leo, massa.",
  },
  {
    block: (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        strokeWidth="0.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
      >
        <path
          d="M21 20L3 14"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16 10V11"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M12 9V10"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M8 8V9"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M3 21H21V12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12V21Z"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: IMAGES.HERO2,
    title: "Cursus amet",
    content:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam.\n" +
      "              Consequat turpis natoque leo, massa.",
  },
  {
    block: (
      <svg
        width="64px"
        height="64px"
        strokeWidth="0.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
      >
        <path
          d="M2 20V9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z"
          stroke="#000000"
          strokeWidth="0.5"
        ></path>
        <path
          d="M8.5 2.5L12 6L15.5 2.5"
          stroke="#000000"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: IMAGES.HERO3,
    title: "Ipsum fermentum",
    content:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam.\n" +
      "              Consequat turpis natoque leo, massa.",
  },
];
