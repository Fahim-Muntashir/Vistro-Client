import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/authProviders";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, data: cart = [] } = useQuery({
    query: ["cart", user.Email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?emaiil=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, isLoading];
};

export default useCart;
