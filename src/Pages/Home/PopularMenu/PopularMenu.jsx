import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []); // Add an empty dependency array to useEffect to run it only once

  return (
    <section className="mb-12">
      <SectionTitle subHeading={"Popular Item"} heading={"From Our Menu"} />
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
