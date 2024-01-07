import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Slices/ProductSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myTune from "../Tunes/tune1.wav";
// eslint-disable-next-line react/prop-types
const Products = ({searchTerm}) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const cart = useSelector((state) => {
    return state.cart.cart;
  });

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((response) => {
          // console.log("Api data= ",response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log("Error=", error);
        });
    };
    fetchData();
  }, []);

  const handleAdd = (items) => {
    toast.success("Added to Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      onOpen: () => new Audio(myTune).play(),
    });

    dispatch(addToCart(items));
  };

  const handleDelete = (items) => {
    toast.success("Removed From Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      onOpen: () => new Audio(myTune).play(),
    });

    dispatch(removeFromCart(items));
  };

  const filteredData = data.filter((item) =>
  // eslint-disable-next-line react/prop-types
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className="row justify-content-center productsbox p-5"
        id="/products"
      >
        {filteredData.map((items) => {
          const { id, image, title, description, price } = items;
          return (
            <div
              key={id}
              className="col-sm-12 col-md-3 products bg-light mb-5 me-5 pt-3 pb-4"
            >
              <center>
                <img src={image} width={"250px"} height={"200px"}></img>
              </center>
              <br></br>
              <p>{title.substr(0, 35)}</p>
              <p>Price: $ {price}</p>
              <p>Description: {description.substr(0, 65)}</p>

              {cart.some((item) => item.id === items.id) ? (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    width: "100%",
                  }}
                  onClick={() => handleDelete(items)}
                >
                  Remove From Cart
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    width: "100%",
                  }}
                  onClick={() => handleAdd(items)}
                >
                  Add to Cart
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
