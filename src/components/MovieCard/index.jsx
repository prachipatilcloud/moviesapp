import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import Icon from "@mui/material/Icon";

export default function MovieCard({ movie }) {
  const { Images, Title, Director, Writer, imdbRating, Runtime, Genre } = movie;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={Images?.[0] || "/fallback.jpg"}
        title={Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Directed by: {Director}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Written by: {Writer}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Genre:
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Chip label={Genre} />
        </Box>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Duration: {Runtime} mins
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Icon>
            <StarIcon />
          </Icon>
          {imdbRating}
        </Typography>
      </CardActions>
    </Card>
  );
}
