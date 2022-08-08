import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { formatearFecha } from "../helpers";



export default function New({ n }) {

  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        title={n.title}
        subheader={formatearFecha(n.publishedAt)}
      />
      <CardMedia
        component="img"
        height="194"
        image={n.urlToImage}
        alt={`imagen noticia ${n.title}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {n.description}
        </Typography>
      </CardContent>
      <Button size="small" color="primary">
        <Link to={`/description/${n.publishedAt}`}>Ir a la Noticia</Link>
      </Button>
    </Card>
  );
}
