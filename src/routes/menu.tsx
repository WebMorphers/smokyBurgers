import Navbar from "../components/PAGE1/Navbar/navbar";

const items = [
    { 
      "name": "Chili Cheez Croquette",
      "categorie": "Entrées",
      "Description": "Croustillantes, généreusement garnies de fromage fondant et rehaussées d'une saveur relevée. Le mariage parfait entre le piquant du chili et l'onctuosité du fromage en fait une expérience gourmande et savoureuse.",
      "img": "Homemadembp",
      "price": "42,00 MAD",
      "link": " "
    },
    { 
        "name": "Mozzarella Sticks",
        "categorie": "Entrées",
        "Description": "Des bâtonnets de mozzarella fondante enrobés d'une fine couche de chapelure dorée, servis avec une sauce aux choix pour une expérience gourmande inoubliable. Parfait pour une collation ou en accompagnement.",
        "img": "Homemadembp",
        "price": "42,00 MAD",
        "link": " "
      },
      { 
        "name": "Chicken Nuggets",
        "categorie": "Entrées",
        "Description": "100% filet de poulet, mariné et pané maison, dans notre mélange d’épices secret.",
        "img": "Homemadembp",
        "price": "38,00 MAD",
        "link": " "
      },
      { 
        "name": "Spicy Chicken Nuggets",
        "categorie": "Entrées",
        "Description": "Pour les amateurs de piquant, nos nuggets saupoudrés de notre mélange spicy.",
        "img": "Homemadembp",
        "price": "38,00 MAD",
        "link": " "
      },
      { 
        "name": "Triple Cheez Burger",
        "categorie": "Burgers beef",
        "Description": "Potato bun, triple viande hachée fumée au bois de pommier (300 gr), triple cheddar fumé, oignon blanc, ketchup fumé, moutarde, cornichon, oignon frit",
        "img": "Homemadembp",
        "price": "95,00 MAD",
        "link": " "
      },
      { 
        "name": "Double Baconator",
        "categorie": "Burgers beef",
        "Description": "Potato Bun, Double Bacon de Boeuf, Double viande hachée fumée au bois de pommiers (200gr), Double Cheddar, Oignon frit, Ketchup, Smoked Mayo.",
        "img": "Homemadembp",
        "price": "90,00 MAD",
        "link": " "
      },
      { 
        "name": "Secret Burger",
        "categorie": "Burgers beef",
        "Description": "Potato Bun, Double Viande hachée fumée au bois de pommier (200 gr), Double Cheddar fumé, Champignon de paris, Mayonnaise à la truffe, Oignon frit.",
        "img": "Homemadembp",
        "price": "85,00 MAD",
        "link": " "
      },
      { 
        "name": "Double Cheez Burger",
        "categorie": "Burgers beef",
        "Description": "Potato bun, double viande hachée fumée au bois de pommier (200 gr), double cheddar fumé, oignon blanc, ketchup fumé, moutarde, cornichon.",
        "img": "Homemadembp",
        "price": "75,00 MAD",
        "link": " "
      },
      { 
        "name": "Truffle Mushroom",
        "categorie": "Burgers beef",
        "Description": "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, champignons de paris, mayonnaise à la truffe.",
        "img": "Homemadembp",
        "price": "70,00 MAD",
        "link": " "
      },
      { 
        "name": "Smoky BBQ",
        "categorie": "Burgers beef",
        "Description": "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, tomate, oignon rouge, oignon caramélisé, cornichon, salade iceberg, sauce bbq fumée",
        "img": "Homemadembp",
        "price": "65,00 MAD",
        "link": " "
      },
      { 
        "name": "Spicy Beef",
        "categorie": "Burgers beef",
        "Description": "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, tomate, oignon rouge, oignon frit, pickles de piment, cornichon, salade iceberg, sauce spicy mayo",
        "img":" Homemadembp",
        "price": "65,00 MAD",
        "link": " "
      },
      { 
        "name": "Royal Cheez Burger",
        "categorie": "Burgers beef",
        "Description": "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, oignon blanc, cornichon, salade iceberg, oignon frit, tomate, Ketchup, Smoked Mayo.",
        "img": "Homemadembp",
        "price": "60,00 MAD",
        "link": " "
      },
      { 
        "name": "Cheez Burger",
        "categorie": "Burgers beef",
        "Description": "Potato bun, viande hachée fumée au bois de pommier (100 gr), cheddar fumé, oignon blanc, Ketchup fumé, moutarde, cornichon",
        "img": "Homemadembp",
        "price": "50,00 MAD",
        "link": " "
      },
      { 
        "name": "Double Chicken Cheez ",
        "categorie": "Burgers chiken",
        "Description": "Potato Bun, Double Filet de poulet pané (200gr), Double Cheddar fumé, oignon blanc, cornichon, Ketchup, Moutarde.",
        "img": "Homemadembp",
        "price": "75,00 MAD",
        "link": " "
      },
      { 
        "name": "Chicken Truffle Mushroom ",
        "categorie": "Burgers chiken",
        "Description": "Potato bun, filet de poulet pané, Cheddar Fumé, Champignon de Paris sauté, Mayonnaise à la Truffe.",
        "img": "Homemadembp",
        "price": "70,00 MAD",
        "link": " "
      },
      { 
        "name": "Buffalo Smoky Bbq",
        "categorie": "Burgers chiken",
        "Description": "Potato bun, filet de poulet pané, cheddar fumé, tomate, oignon rouge, oignon caramélisé, cornichon, salade iceberg, sauce BBQ fumé.",
        "img": "Homemadembp",
        "price": "65,00 MAD",
        "link": " "
      },
      { 
        "name": "Nashville Hot",
        "categorie": "Burgers chiken",
        "Description": "Potato bun, filet de poulet pané, cheddar fumé, tomate, oignon rouge, oignon frit, pickles de piment, cornichon, salade iceberg, sauce spicy mayo",
        "img": "Homemadembp",
        "price": "65,00 MAD",
        "link": " "
      },
      { 
        "name": "Chicken Cheez",
        "categorie": "Burgers chiken",
        "Description": "Potato bun, filet de poulet pané, cheddar fumé, oignon blanc, ketchup fumé, moutarde, cornichon.",
        "img": "Homemadembp",
        "price": "50,00 MAD",
        "link": " "
      },
      { 
        "name": "Fire Chicken",
        "categorie": "Burgers chiken",
        "Description": "Potato bun, filet de poulet pané, cheddar fumé, pickle de piment, Spicy Smoked Ketchup //!\\ Warning : For spicy lovers only //!\\",
        "img": "Homemadembp",
        "price": "50,00 MAD",
        "link": " "
      },
      { 
        "name": "Crispy Chicken",
        "categorie": "Burgers chiken",
        "Description": "Potato bun, filet de poulet pané, Smoked Mayo, cornichon.",
        "img": "Homemadembp",
        "price": "45,00 MAD",
        "link": " "
      },
      { 
        "name": "Veggie Burger",
        "categorie": "Burgers végétariens",
        "Description": "Potato bun, Rösti de pommes de terre, cheddar fumé, oignon blanc, cornichon, salade iceberg, oignon frit, tomate, sauce Mayonnaise fumé",
        "img": "Homemadembp",
        "price": "58,00 MAD",
        "link": " "
      },
      { 
        "name": "Chicken Cheezy Fries",
        "categorie": "Frites",
        "Description": "Nuggets de poulet, oignon frit, Frites, Homemade Cheezy Sauce au Cheddar fumé !",
        "img": "Homemadembp",
        "price": "45,00 MAD",
        "link": " "
      },
      { 
        "name": "Jalapeños Cheezy Fries",
        "categorie": "Frites",
        "Description": "Jalapeños , oignon frit, Frites, Homemade Cheezy Sauce au Cheddar fumé !",
        "img": "Homemadembp",
        "price": "40,00 MAD",
        "link": " "
      },
      { 
        "name": "Fries",
        "categorie": "Frites",
        "Description": "Frites maison ",
        "img": "Homemadembp",
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Sauce Cheez",
        "categorie": "Sauce",
        "Description": "Découvrez notre irrésistible sauce cheese faite à partir de véritable cheddar, sans additifs ni colorants artificiels. Une expérience gustative naturelle et savoureuse à savourer sans modération. ",
        "img": "Homemadembp",
        "price": "10,00 MAD",
        "link": " "
      },
      { 
        "name": "Smoked Ketchup",
        "categorie": "Sauce",
        "Description": "Plongez dans une explosion de saveurs avec notre sauce ketchup fumé. Son goût intense et fumé apportera une touche de caractère à tous vos plats préférés, pour une expérience culinaire inoubliable.",
        "img": "Homemadembp",
        "price": "5,00 MAD",
        "link": " "
      },
      { 
        "name": "Smoked BBQ",
        "categorie": "Sauce",
        "Description": "Plongez dans une symphonie de saveurs avec notre sauce BBQ fumée, un mélange équilibré de fumée et d'épices qui ravira vos papilles. Une explosion de goût authentique qui apportera une touche irrésistible à tous vos plats grillés.",
        "img": "Homemadembp",
        "price": "5,00 MAD",
        "link": " "
      },
      { 
        "name": "Mayonnaise à la Truffe ",
        "categorie": "Sauce",
        "Description": "Notre mayonnaise à la truffe noire est une création faite maison, préparée avec des brisures de truffe noire pour une saveur intense et raffinée. Parfaite pour accompagner vos plats préférés et sublimer leur goût avec une touche d'élégance truffée.",
        "img": "Homemadembp",
        "price": "5,00 MAD",
        "link": " "
      },
      { 
        "name": "Spicy Mayo ",
        "categorie": "Sauce",
        "Description": "Notre Spicy Mayo est une mayonnaise maison épicée, confectionnée à partir d'un mélange d'épices marocaines authentiques. La saveur intense et piquante de cette sauce rehaussera à coup sûr le goût de vos plats préférés.",
        "img": "Homemadembp",
        "price": "5,00 MAD",
        "link": " "
      },
      { 
        "name": "Lucifer 4.000.000 scoville ",
        "categorie": "Sauce",
        "Description": "Attention vraiment vraiment spicy... Ne pas toucher les yeux, ne pas laisser à porter des enfants.",
        "img": "Homemadembp",
        "price": "10,00 MAD",
        "link": " "
      },
      { 
        "name": "Fondant au Chocolat Noir",
        "categorie": "Desserts",
        "Description": "Avec sa croûte croustillante et son cœur coulant, ce fondant est un véritable délice pour les papilles. Laissez-vous tenter et régalez-vous avec cette gourmandise irrésistible !",
        "img": "Homemadembp",
        "price": "40,00 MAD",
        "link": " "
      },
      { 
        "name": "Classic Milk Chocolate Chip Cookies ",
        "categorie": "Desserts",
        "Description": "Vous en rêviez, on l'a fait : un délicieux cookie au chocolat au lait ( Weiss ). Attention, c'est addictif ! (Poids du Cookie : Environ 90g - CONTIENT DU GLUTEN)",
        "img": "Homemadembp",
        "price": "25,00 MAD",
        "link": " "
      },
      { 
        "name": "Mint Lemonade",
        "categorie": "Boissons & Jus",
        "Description": "Menthe, citrons jaune et vert, eau",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/vt1x0p2pmdw7olywafqr',
        "price": "30,00 MAD",
        "link": " "
      },
      { 
        "name": "Jus D'orange",
        "categorie": "Boissons & Jus",
        "Description": "100 % pur jus d'orange",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/f1huiexyzsjkb85c481a',
        "price": "25,00 MAD",
        "link": " "
      },
      { 
        "name": "Coca-Cola",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/vriavt1bb5eyk1ml9hvw',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Coca-Cola Zéro",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/vavvt7c3p7bqjzcsavv7',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Sprite",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/p68co6jycb7fdujccz0l',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Hawaï",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/ma0umck5fdaaijzqa71a',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Pom's",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/xnntmktqwxctzbfyyhxa',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Schweppes Citron",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/vey5qmzl7cl6657dcrjj',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Schweppes Tonic",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/h1dtyporl6tuxbitvfk1',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Orangina",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/nngfs7fl9vzrldpekcqo',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Orangina Light",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/dk7chx8vijrvfufhy1yd',
        "price": "20,00 MAD",
        "link": " "
      },
      { 
        "name": "Eau minérale",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/mkfhwvutqme0rhexa5x0',
        "price": "17,00 MAD",
        "link": " "
      },
      { 
        "name": "Eau gazeuse",
        "categorie": "Boissons & Jus",
        "Description": " ",
        "img": 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto:low/Products/sexr19wxrpkwifpodjnh',
        "price": "17,00 MAD",
        "link": " "
      },
       
       
       
       
       
    
    ];
const menu = () => {

  return (
    <>

    <div className="grid grid-cols-4">
    {items.map((item) => (
        <div className="flex flex-col justify-center items-center">
            <p>{item.name}</p>
            <img src={item.img} alt={item.name} />
            <p>{item.Description}</p>
            <p>{item.price}</p>
            </div>
      ))}
    </div>
<Navbar />

    

    </>
  )
}

export default menu