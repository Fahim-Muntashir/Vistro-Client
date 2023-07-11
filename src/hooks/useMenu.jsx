import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoaing] = useState(true);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
        setLoaing(false);
      });
  }, []); // Add an empty dependency array to useEffect to run it only once
  return [menu, loading];
};
export default useMenu;
