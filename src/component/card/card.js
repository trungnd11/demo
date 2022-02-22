import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function CardProduct() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setCardData(data.data);
      });
  }, []);
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cardData.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={card.avatar}
                alt="random"
                style={{ height: "258px", objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${card.first_name} ${card.last_name}`}
                </Typography>
                <Typography>{card.email}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" color="success">
                  View
                </Button>
                <Button variant="outlined" size="small" color="error">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
