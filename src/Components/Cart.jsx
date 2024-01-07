import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import {
  cleanCart,
  decrementCart,
  incrementCart,
  removeFromCart,
} from "../Slices/ProductSlice";
import { ToastContainer, toast } from "react-toastify";
import EmptyCart from "./EmptyCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import myTune from "../Tunes/tune1.wav";

const Cart = () => {
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = [...cart];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    // border: "2px solid black",
    borderRadius: "10px",
    padding: "30px 30px 10px 0px",
  }));

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementCart(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementCart(item));
  };

  const totalPrice = Math.ceil(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  const discount = 5;
  const grandTotal = totalPrice - discount;

  const handlePlace = () => {
    toast.success("Order Placed Succesfully", {
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

    setTimeout(() => {
      navigate("/orders", {
        state: {
          orders: orders,
        },
      });
    }, 2500);

    setTimeout(() => {
      dispatch(cleanCart());
    }, 3000);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {cart.length < 1 ? (
        <EmptyCart />
      ) : (
        <div className="cartdiv pt-4 pb-5">
          <h1 className="text-light text-center me-4">Your Cart</h1>
          <br></br>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} className="ps-5 pe-5">
              <Grid sm={7} >
                <Item >
                  {cart.map((item) => {
                    const { id, image, title, description, price, quantity } =
                      item;
                    return (
                      <div className="row mb-5 grid1" key={id}>
                        <div className="col-sm-12 col-md-3 d-flex justify-content-center align-items-center">
                          <img
                            src={image}
                            width={"150px"}
                            height={"150px"}
                          ></img>
                        </div>
                        <div className="col-sm-12 col-md-9 ">
                          <h5>{title}</h5>
                          <h6>Price: $ {price}</h6>
                          <h6>Description: {description}</h6>
                          <div>
                            <Button
                              variant="contained"
                              className="me-3"
                              color="success"
                              onClick={() => handleDecrement(item)}
                            >
                              -
                            </Button>
                            {quantity}
                            <Button
                              variant="contained"
                              className="ms-3"
                              color="success"
                              onClick={() => handleIncrement(item)}
                            >
                              +
                            </Button>
                          </div>
                          <h6 className="mt-3">
                            Total Price: $ {price * quantity}
                          </h6>
                          <Button
                            variant="contained"
                            className="bg-danger mt-2"
                            onClick={() => handleDelete(item)}
                          >
                            REMOVE FROM CART
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </Item>
              </Grid>
              <Grid sm={5}>
                <Item className="pb-4">
                  <div className="ps-4">
                    <h1 className="text-danger text-center fw-bold">
                      Checkout
                    </h1>
                    <span className="me-2">
                      <AccountBalanceWalletIcon />
                      Select/Apply Coupons
                    </span>
                    <p className="mt-2">
                      Apply coupons to avail offers on the products
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-9">
                      <ul className="ul fs-3 ">
                        <li>Total price :</li>
                        <li>Discount: </li>
                        <li>Grand Total: </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3">
                      <h3>$ {totalPrice}</h3>
                      <h3>$ {discount}</h3>
                      <h3>$ {grandTotal}</h3>
                    </div>
                  </div>
                  <center>
                    <Button
                      variant="contained"
                      className="bg-success mt-2"
                      onClick={handlePlace}
                    >
                      Place Order
                    </Button>
                  </center>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </>
  );
};

export default Cart;
