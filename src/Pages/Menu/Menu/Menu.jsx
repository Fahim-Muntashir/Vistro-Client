import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>

      {/* main cover */}

      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>

      {/* offered Menu items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert Menu Item */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title="Desert"
      ></MenuCategory>
      <MenuCategory items={pizza} img={pizzaImg} title="Pizza"></MenuCategory>
      <MenuCategory items={salad} img={pizzaImg} title="Salad"></MenuCategory>
      <MenuCategory items={soup} img={pizzaImg} title="Soup"></MenuCategory>
    </div>
  );
};

export default Menu;
