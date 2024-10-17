import React from "react";
import { Container, Typography, Button } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple home page using Material-UI components.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
};

export default HomePage;
