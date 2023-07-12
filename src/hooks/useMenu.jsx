import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoaing] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoaing(false);
      });
  }, []); // Add an empty dependency array to useEffect to run it only once
  return [menu, loading];
};
export default useMenu;
