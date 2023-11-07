import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtonAppBar from "../../components/Appbar";
import { Container } from "@mui/material";
import Card from "../../components/Card/Card";
import LinearIndeterminate from "../../components/LinearIndeterminate";
import SkeletonLoading from "../../components/SkeletonLoading";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    try {
      const response = await axios("https://api.escuelajs.co/api/v1/products");
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const navigation = useNavigate();
  const navigationHandler = (path) => {
    navigation(path);
  };

  return (
    <>
      <ButtonAppBar
        title={"Products List"}
        onClick={() => navigationHandler("/")}
        buttonText="Homepage"
      />

      {isLoading ? (
        <>
          <LinearIndeterminate color="primary" />
          <SkeletonLoading />
        </>
      ) : (
        <Container>
          <h1>Fake Store products on SALE!</h1>

          {products.map((item, index) => {
            return (
              <Card
                key={item.id}
                image={item.images[0]}
                title={item.title}
                description={item.description.slice(0, 80)}
                category={item.category.name}
                price={item.price}
              />
            );
          })}
        </Container>
      )}
    </>
  );
}
