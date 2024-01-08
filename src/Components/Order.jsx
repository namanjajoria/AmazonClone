import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {  Button, Container, Typography } from "@mui/material";
const Order = () => {
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.orders) {
      setOrders(location.state.orders);
    }
  }, [location.state]);

  return (
    <>
    <div className="cartdiv3 pb-4 pt-5">
        <Container>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "cursive",
              fontSize: "30px",
            }}
          >
            Your Orders
          </Typography>
          {orders.map((order) => (
            <Box key={order.id}>
              <Box
                sx={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={order.image}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                />
                <Box sx={{ marginLeft: "12px" }}>
                  <Typography variant="h6" sx={{ fontWeight: "600" }}>
                    {order.title.length > 20
                      ? order.title.substr(0, 20)
                      : order.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "15px" }}>
                    {order.description.length > 80
                      ? order.description.substr(0, 80)
                      : order.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ marginTop: { xs: "5px", sm: "7px", md: "10px" } }}
                  >
                    $ {order.price * order.quantity}
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gap: "10px",
                      width: "200px",
                      marginTop: "10px",
                    }}
                  >
                    <Button variant="contained" sx={{ backgroundColor: "red" }}>
                      Return
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "grey" }}
                    >
                      Download Invoice
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            sx={{ marginTop: "10px", backgroundColor: "green" }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
      </div>
    </>
  );
};

export default Order;
