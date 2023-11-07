import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtonAppBar from "../../components/Appbar";
import { Alert, Container } from "@mui/material";
import Card from "../../components/Card/Card";
import LinearIndeterminate from "../../components/LinearIndeterminate";
import SkeletonLoading from "../../components/SkeletonLoading";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsData = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const navigation = useNavigate();
  const navigationHandler = (path) => {
    navigation(path);
  };

  return (
    <>
      <ButtonAppBar
        title={"Homepage"}
        onClick={() => navigationHandler("/products")}
        buttonText="Products"
      />

      {isLoading && !isError && (
        <>
          <LinearIndeterminate color="primary" />
          <SkeletonLoading />
        </>
      )}

      {!isLoading && !isError && (
        <Container>
          <h1>Welcome! Fake Store products are live...</h1>

          {products.map((item, index) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                title={item.title.slice(0, 30)}
                description={item.description.slice(0, 70)}
                category={item.category.name}
                price={item.price}
              />
            );
          })}
        </Container>
      )}

      {!isLoading && isError && (
        <Container sx={{ p: 5 }}>
          <Alert severity="error">
            Error fetching data! Please reload page...
          </Alert>
        </Container>
      )}
    </>
  );
}
