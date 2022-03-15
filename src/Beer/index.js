import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { shape } from "prop-types";
import { number } from "prop-types";
import React from "react";

const useQuantity = () => {
  const [quantity, setQuantity] = React.useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return [quantity, handleChange];
};

export default function Beer({ beer }) {
  const [quantity, setQuantity] = useQuantity();
  const { name, description, imageUri } = beer;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageUri} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl variant="standard">
          <InputLabel id="quantity-label">Quantité</InputLabel>
          <Select
            labelId="quantity-label"
            value={quantity}
            label="Quantité"
            onChange={setQuantity}
            size="small"
          >
            <MenuItem value={1}>1 bouteille</MenuItem>
            <MenuItem value={2}>2 bouteilles</MenuItem>
            <MenuItem value={3}>3 bouteilles</MenuItem>
            <MenuItem value={4}>4 bouteilles</MenuItem>
            <MenuItem value={5}>5 bouteilles</MenuItem>
          </Select>
        </FormControl>
        <Button size="small">Ajouter au panier</Button>
      </CardActions>
    </Card>
  );
}

Beer.propTypes = {
  beer: shape({
    id: "string",
    name: "string",
    description: "string",
    imageUri: "string",
    price: "string",
  }),
};
