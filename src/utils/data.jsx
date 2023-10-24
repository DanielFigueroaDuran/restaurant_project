import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from "../assets/icons/recipe1.jpg";
import recipe2 from "../assets/icons/recipe3.jpg";
import recipe3 from "../assets/icons/recipe3.jpg";
import recipe4 from "../assets/icons/recipe4.jpg";
import recipe5 from "../assets/icons/recipe5.jpg";
import recipe6 from "../assets/icons/recipe6.jpg";

import payment1 from "../assets/icons/payment4.png";
import payment2 from "../assets/icons/payment2.png";
import payment3 from "../assets/icons/payment3.png";
import payment4 from "../assets/icons/payment4.png";

export const heroIcons = [
    <CiBurger />,
    <FaIceCream />,
    <GiCakeSlice />,
    <GiBowlOfRice />,
];

export const menus = [
    {
        id: 1,
        image: recipe1,
        name: "Title",
        price: "20 €",
    },
    {
        id: 2,
        image: recipe2,
        name: "Title",
        price: "13 €",
    },
    {
        id: 3,
        image: recipe3,
        name: "Title",
        price: "17 €",
    },
    {
        id: 4,
        image: recipe4,
        name: "Title",
        price: "22 €",
    },
    {
        id: 5,
        image: recipe5,
        name: "Title",
        price: "14 €",
    },
    {
        id: 6,
        image: recipe6,
        name: "Title",
        price: "20 €",
    },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
    {
        id: 1,
        icon: <HiOutlinePhone />,
        text: "+959-883-271-929",
    },
    {
        id: 2,
        icon: <HiOutlineMail />,
        text: "abee2002@gmail.com",
    },
    {
        id: 3,
        icon: <BiMap />,
        text: "16 Road TharkayTha,Yangon",
    },
];

export const mainMenu = [
    {
        id: 1,
        href: "home",
        text: "Home",
        icon: <AiFillHome />,
    },
    {
        id: 2,
        href: "about",
        text: "About",
        icon: <MdExplore />,
    },
    {
        id: 3,
        href: "recipe",
        text: "Recipe",
        icon: <GiBowlOfRice />,
    },
    {
        id: 4,
        href: "contact",
        text: "Contact",
        icon: <MdContactPage />,
    },
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];
