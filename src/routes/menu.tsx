import Navbar from "../components/PAGE1/Navbar/navbar";
import ouelmas from "../assets/ouelmes.png";
import ciel from "../assets/ciel-eau-minerale.png";
import oranginaZero from "../assets/orangina-zero.png";
import orangina from "../assets/orangina.png";
import SchweppesTonic from "../assets/Schweppes-Tonic.png";
import SchweppesCitron from "../assets/Schweppes-Citron.png";
import Poms from "../assets/poms-33cl.png";
import Hawai from "../assets/Hawai-tropical.png";
import Sprite from "../assets/Sprite.png";
import CocaZero from "../assets/Coca-Cola-Zero.png";
import Coca from "../assets/Coca-Cola.png";
import React, { useState } from "react";

const items = [
  {
    name: "Chili Cheez Croquette",
    categorie: "Entrées",
    Description:
      "Croustillantes, généreusement garnies de fromage fondant et rehaussées d'une saveur relevée.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/jpohs1y6jzqilexdx69y",
    price: "42,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=entrees-c.766739091 ",
  },
  {
    name: "Mozzarella Sticks",
    categorie: "Entrées",
    Description:
      "Des bâtonnets de mozzarella fondante enrobés d'une fine couche de chapelure dorée, servis avec une sauce aux choix pour une expérience gourmande inoubliable.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/hu7sbz7idjnida5csfxv",
    price: "42,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=entrees-c.766739091 ",
  },
  {
    name: "Chicken Nuggets",
    categorie: "Entrées",
    Description:
      "100% filet de poulet, mariné et pané maison, dans notre mélange d’épices secret.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/bn2tjtdsnfuadv6fbca7",
    price: "38,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=entrees-c.766739091 ",
  },
  {
    name: "Spicy Chicken Nuggets",
    categorie: "Entrées",
    Description:
      "Pour les amateurs de piquant, nos nuggets saupoudrés de notre mélange spicy.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/bn2tjtdsnfuadv6fbca7",
    price: "38,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=entrees-c.766739091 ",
  },
  {
    name: "Spicy Chicken Tender",
    categorie: "Entrées",
    Description:
      "Pour les amateurs de piquant, nos tenders saupoudrés de notre mélange spicy.",
    img: "https://images.deliveryhero.io/image/menus-glovo/products/5bfe5b57be06a958dce764743c52c322876d150cfd06c3a3a077d487e46d5d52?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
    price: "38,00 MAD",
    link: " ",
  },
  {
    name: "Chicken Tenders",
    categorie: "Entrées",
    Description:
      "Aiguillettes de poulet marinées et panées maison, avec notre mélange d’épices secret.",
    img: "https://images.deliveryhero.io/image/menus-glovo/products/5bfe5b57be06a958dce764743c52c322876d150cfd06c3a3a077d487e46d5d52?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo2MDB9fV0=",
    price: "38,00 MAD",
    link: " ",
  },
  {
    name: "Triple Cheez Burger",
    categorie: "Burgers beef",
    Description:
      "Potato bun, triple viande hachée fumée au bois de pommier (300 gr), triple cheddar fumé, oignon blanc, ketchup fumé, moutarde, cornichon, oignon frit",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/eewnjrrfzu4laazi7vr8",
    price: "95,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090",
  },
  {
    name: "Double Baconator",
    categorie: "Burgers beef",
    Description:
      "Potato Bun, Double Bacon de Boeuf, Double viande hachée fumée au bois de pommiers (200gr), Double Cheddar, Oignon frit, Ketchup, Smoked Mayo.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/m0wdq5e1dy3yagy7j1kq",
    price: "90,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090",
  },
  {
    name: "Secret Burger",
    categorie: "Burgers beef",
    Description:
      "Potato Bun, Double Viande hachée fumée au bois de pommier (200 gr), Double Cheddar fumé, Champignon de paris, Mayonnaise à la truffe, Oignon frit.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/llfeieqkmtsy8xrkzaqh",
    price: "85,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090 ",
  },
  {
    name: "Double Cheez Burger",
    categorie: "Burgers beef",
    Description:
      "Potato bun, double viande hachée fumée au bois de pommier (200 gr), double cheddar fumé, oignon blanc, ketchup fumé, moutarde, cornichon.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/qxnt7bjvor1ltbcxalsz",
    price: "75,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090 ",
  },
  {
    name: "Truffle Mushroom",
    categorie: "Burgers beef",
    Description:
      "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, champignons de paris, mayonnaise à la truffe.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/pofdwlszltkuhb4uqfnw",
    price: "70,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090 ",
  },
  {
    name: "Smoky BBQ",
    categorie: "Burgers beef",
    Description:
      "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, tomate, oignon rouge, oignon caramélisé, cornichon, salade iceberg, sauce bbq fumée",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/aiuwcnfsppeqnwpqyy01",
    price: "65,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090 ",
  },
  {
    name: "Spicy Beef",
    categorie: "Burgers beef",
    Description:
      "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, tomate, oignon rouge, oignon frit, pickles de piment, cornichon, salade iceberg, sauce spicy mayo",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/jljqr05wgsw1yqqjwztm",
    price: "65,00 MAD",
    link: " https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090 ",
  },
  {
    name: "Royal Cheez Burger",
    categorie: "Burgers beef",
    Description:
      "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, oignon blanc, cornichon, salade iceberg, oignon frit, tomate, Ketchup, Smoked Mayo.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/fg2chqmhzp7l45g7vgnk",
    price: "60,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090 ",
  },
  {
    name: "Cheez Burger",
    categorie: "Burgers beef",
    Description:
      "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, oignon blanc, Ketchup fumé, moutarde, cornichon",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/u5jh892wtv8k50t68ay9",
    price: "50,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-beef-c.766739090 ",
  },
  {
    name: "Double Chicken Cheez ",
    categorie: "Burgers chiken",
    Description:
      "Potato Bun, Double Filet de poulet pané (200gr), Double Cheddar fumé, oignon blanc, cornichon, Ketchup, Moutarde.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/omwzwz7vueyal3buutom",
    price: "75,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-chicken-c.766739085 ",
  },
  {
    name: "Chicken Truffle Mushroom ",
    categorie: "Burgers chiken",
    Description:
      "Potato bun, filet de poulet pané, Cheddar Fumé, Champignon de Paris sauté, Mayonnaise à la Truffe.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/oqd0dglbnijunqoepdgp",
    price: "70,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-chicken-c.766739085 ",
  },
  {
    name: "Buffalo Smoky Bbq",
    categorie: "Burgers chiken",
    Description:
      "Potato bun, filet de poulet pané, cheddar fumé, tomate, oignon rouge, oignon caramélisé, cornichon, salade iceberg, sauce BBQ fumé.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/oeedsi4kpbq7zqic2p9j",
    price: "65,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-chicken-c.766739085 ",
  },
  {
    name: "Nashville Hot",
    categorie: "Burgers chiken",
    Description:
      "Potato bun, filet de poulet pané, cheddar fumé, tomate, oignon rouge, oignon frit, pickles de piment, cornichon, salade iceberg, sauce spicy mayo",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/lymgytkuonr3tbes5lbn",
    price: "65,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-chicken-c.766739085 ",
  },
  {
    name: "Chicken Cheez",
    categorie: "Burgers chiken",
    Description:
      "Potato bun, filet de poulet pané, cheddar fumé, oignon blanc, ketchup fumé, moutarde, cornichon.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/wg4kwfusqaqe7epalekc",
    price: "50,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-chicken-c.766739085 ",
  },
  {
    name: "Fire Chicken",
    categorie: "Burgers chiken",
    Description:
      "Potato bun, filet de poulet pané, cheddar fumé, pickle de piment, Spicy Smoked Ketchup //!\\ Warning : For spicy lovers only //!\\",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/e4hl7gj1kv8wtwf1azmb",
    price: "50,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-chicken-c.766739085 ",
  },
  {
    name: "Crispy Chicken",
    categorie: "Burgers chiken",
    Description: "Potato bun, filet de poulet pané, Smoked Mayo, cornichon.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/zkw82vkdbym0hngncfxi",
    price: "45,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=burgers-chicken-c.766739085 ",
  },
  {
    name: "Chicken Cheezy Fries",
    categorie: "Frites",
    Description:
      "Nuggets de poulet, oignon frit, Frites, Homemade Cheezy Sauce au Cheddar fumé !",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/yd5gwssz28rypeji286c",
    price: "45,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=frites-c.766739092 ",
  },
  {
    name: "Jalapeños Cheezy Fries",
    categorie: "Frites",
    Description:
      "Jalapeños , oignon frit, Frites, Homemade Cheezy Sauce au Cheddar fumé !",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/ikioksqb3zjf9gxdxbkp",
    price: "40,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=frites-c.766739092 ",
  },
  {
    name: "Cheezy Fries",
    categorie: "Frites",
    Description: "Frites maison ",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/cd4q8dqb8g6f3bdrpor7",
    price: "35,00 MAD",
    link: " https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=frites-c.766739092",
  },
  {
    name: "Fries",
    categorie: "Frites",
    Description: "Frites maison ",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/gayyhqpwowsrswwgdqin",
    price: "20,00 MAD",
    link: " https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=frites-c.766739092",
  },
  {
    name: "Sauce Cheez",
    categorie: "Sauce",
    Description:
      "Découvrez notre irrésistible sauce cheese faite à partir de véritable cheddar, sans additifs ni colorants artificiels.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/f57pt1ws6m1cztes1vdg",
    price: "10,00 MAD",
    link: " https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=sauce-c.1491941035",
  },
  {
    name: "Smoked Ketchup",
    categorie: "Sauce",
    Description:
      "Plongez dans une explosion de saveurs avec notre sauce ketchup fumé. Son goût intense et fumé apportera une touche de caractère à tous vos plats préférés.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/wimn92awu33rpqv6zkyx",
    price: "5,00 MAD",
    link: " https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=sauce-c.1491941035",
  },
  {
    name: "Smoked BBQ",
    categorie: "Sauce",
    Description:
      "Plongez dans une symphonie de saveurs avec notre sauce BBQ fumée, un mélange équilibré de fumée et d'épices qui ravira vos papilles.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/srgmalg1jmn4ckehd4w3",
    price: "5,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=sauce-c.1491941035 ",
  },
  {
    name: "Smoked Mayo",
    categorie: "Sauce",
    Description:
      "Succombez à notre mayonnaise fumée faite maison, sans conservateurs. Une saveur unique et naturelle qui relèvera tous vos plats.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/mmx9ulrcdgvv95i4veml",
    price: "5,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=sauce-c.1491941035 ",
  },
  {
    name: "Mayonnaise à la Truffe ",
    categorie: "Sauce",
    Description:
      "Notre mayonnaise à la truffe noire est une création faite maison, préparée avec des brisures de truffe noire pour une saveur intense et raffinée. ",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/w1jpecbezfoaqdogksxu",
    price: "5,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=sauce-c.1491941035 ",
  },
  {
    name: "Spicy Mayo ",
    categorie: "Sauce",
    Description:
      "Notre Spicy Mayo est une mayonnaise maison épicée, confectionnée à partir d'un mélange d'épices marocaines authentiques. La saveur intense et piquante de cette sauce rehaussera à coup sûr le goût de vos plats préférés.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/slpzpmmgvpdvbuoco7cw",
    price: "5,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=sauce-c.1491941035 ",
  },
  {
    name: "Lucifer 4.000.000 scoville ",
    categorie: "Sauce",
    Description:
      "Attention vraiment vraiment spicy... Ne pas toucher les yeux, ne pas laisser à porter des enfants.",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/xjajeyei15j6gfxebpno",
    price: "10,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=sauce-c.1491941035 ",
  },
  {
    name: "Fondant au Chocolat Noir",
    categorie: "Desserts",
    Description:
      "Avec sa croûte croustillante et son cœur coulant, ce fondant est un véritable délice pour les papilles. Laissez-vous tenter et régalez-vous avec cette gourmandise irrésistible !",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/mwoavawweurytknnphz9",
    price: "40,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=desserts-c.766739089 ",
  },
  {
    name: "Classic Milk Chocolate Chip Cookies ",
    categorie: "Desserts",
    Description:
      "Vous en rêviez, on l'a fait : un délicieux cookie au chocolat au lait ( Weiss ). Attention, c'est addictif ! (Poids du Cookie : Environ 90g - CONTIENT DU GLUTEN)",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/guks0abcuiksbobaiupa",
    price: "25,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=desserts-c.766739089 ",
  },
  {
    name: "Mint Lemonade",
    categorie: "Boissons & Jus",
    Description: "Menthe, citrons jaune et vert, eau",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/vt1x0p2pmdw7olywafqr",
    price: "30,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Jus D'orange",
    categorie: "Boissons & Jus",
    Description: "100 % pur jus d'orange",
    img: "https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/f1huiexyzsjkb85c481a",
    price: "25,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Coca-Cola",
    categorie: "Boissons & Jus",
    Description: " ",
    img: Coca,
    price: "20,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Coca-Cola Zéro",
    categorie: "Boissons & Jus",
    Description: " ",
    img: CocaZero,
    price: "20,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Sprite",
    categorie: "Boissons & Jus",
    Description: " ",
    img: Sprite,
    price: "20,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Hawaï",
    categorie: "Boissons & Jus",
    Description: " ",
    img: Hawai,
    price: "20,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Pom's",
    categorie: "Boissons & Jus",
    Description: " ",
    img: Poms,
    price: "20,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Schweppes Citron",
    categorie: "Boissons & Jus",
    Description: " ",
    img: SchweppesCitron,
    price: "20,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Schweppes Tonic",
    categorie: "Boissons & Jus",
    Description: " ",
    img: SchweppesTonic,
    price: "20,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Orangina",
    categorie: "Boissons & Jus",
    Description: " ",
    img: orangina,
    price: "20,00 MAD",
    link: " https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088",
  },
  {
    name: "Orangina Light",
    categorie: "Boissons & Jus",
    Description: " ",
    img: oranginaZero,
    price: "20,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Eau minérale",
    categorie: "Boissons & Jus",
    Description: " ",
    img: ciel,
    price: "17,00 MAD",
    link: "https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088 ",
  },
  {
    name: "Eau gazeuse",
    categorie: "Boissons & Jus",
    Description: " ",
    img: ouelmas,
    price: "17,00 MAD",
    link: " https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?content=boissons-jus-c.766739088",
  },
];
const menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.categorie === selectedCategory);

  return (
    <>

    <div className="cont">
      <div className="categories flex flex-row gap-10">
          <button onClick={() => setSelectedCategory("All")}>All</button>
          <button onClick={() => setSelectedCategory("Entrées")}>Entrées</button>
          <button onClick={() => setSelectedCategory("Burgers beef")}>
            Burgers beef
          </button>
          <button onClick={() => setSelectedCategory("Burgers chiken")}>
            Burgers chiken
          </button>
          <button onClick={() => setSelectedCategory("Frites")}>Frites</button>
          <button onClick={() => setSelectedCategory("Sauce")}>Sauce</button>
          <button onClick={() => setSelectedCategory("Desserts")}>
            Desserts
          </button>
          <button onClick={() => setSelectedCategory("Boissons & Jus")}>
            Boissons & Jus
          </button>
          {/* Add more category buttons as needed */}
        </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-7 ">

      {filteredItems.map((item) => (
      
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:relative hover:bg-slate-500  transition-all hover:scale-105">
        <a target="_blank" href={item.link}>
        <div className="w-full flex justify-center items-center">
          <img className="h-72 w-full object-cover object-center rounded-t-lg" src={item.img} alt={item.name} />
        </div>
        <div className="p-5 flex flex-col justify-between ">
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</p>
          
          <p className="mb-3 font-normal text-gray-700  dark:text-gray-400 pb-6 hidden sm:block">{item.Description}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white md:absolute bottom-5 right-0 left-0 m-auto text-center">{item.price}</p>
        </div>
        </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default menu;
