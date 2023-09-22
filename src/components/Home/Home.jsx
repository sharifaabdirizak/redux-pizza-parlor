import { Link, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="images/pizza_photo.png"
          title="pizza home"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Prime Pizza
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Prime Pizza is the best pizza around! Enjoy our great dishes!
          </Typography>
        </CardContent>
        <CardActions>
            <ButtonLink to="/selectPizza" variant="contained"> View Pizzas </ButtonLink>
        </CardActions>
      </Card>
    </Box>
  );
}
