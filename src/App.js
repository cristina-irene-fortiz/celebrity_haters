import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  return (
    <Router basename="/celebrity_haters">
      <div>
        {/* Titlebar with hearts */}
        <AppBar position="static" style={{ backgroundColor: '#f5f5f5', color: '#333' }}>
          <Toolbar style={{ justifyContent: 'center' }}>
            <FavoriteIcon style={{ marginRight: '10px', color: 'red' }} />
            <Typography variant="h4" component="div" align="center">
              Celebrity "Haters" Analysis
            </Typography>
            <FavoriteIcon style={{ marginLeft: '10px', color: 'red' }} />
          </Toolbar>
        </AppBar>

        {/* Navigation Bar */}
        <AppBar position="static">
          <Toolbar style={{ justifyContent: 'center' }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <Box textAlign="center">
    <Typography variant="h5" gutterBottom>
      Reddit DeepDive: Justin Baldoni
    </Typography>
    <Typography variant="body1">
      Explore insights from Reddit data including sentiment, demographics, and more.
    </Typography>
  </Box>
);

const AboutPage = () => (
  <Typography variant="h4" gutterBottom>
    About Me
  </Typography>
);

const ProjectsPage = () => (
  <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">Sentiment Distribution</Typography>
          <Typography>Placeholder for sentiment distribution visualization.</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">Word Cloud</Typography>
          <Typography>Placeholder for word cloud visualization.</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">Gender Breakdown</Typography>
          <Typography>Placeholder for gender breakdown visualization.</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">Age/Race Breakdown</Typography>
          <Typography>Placeholder for age and race breakdown visualization.</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">Language Distribution</Typography>
          <Typography>Placeholder for language visualization.</Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h6">Location Data</Typography>
          <Typography>Placeholder for location visualization.</Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default App;
