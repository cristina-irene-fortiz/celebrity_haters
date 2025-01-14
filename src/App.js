import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chart } from 'react-google-charts'; // For placeholder visualizations

const heartImage = './hearts.jpg';

// Custom theme for a pink and poppy vibe
const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Hero Section */}
        <AppBar position="static" style={{ backgroundColor: '#ffe4e1', color: '#333' }}>
          <Toolbar style={{ justifyContent: 'center' }}>
            <FavoriteIcon style={{ marginRight: '10px', color: '#ff4081', fontSize: '40px' }} />
            <Typography variant="h4" component="div" align="center">
              Celebrity "Haters" Analysis
            </Typography>
            <FavoriteIcon style={{ marginLeft: '10px', color: '#ff4081', fontSize: '40px' }} />
          </Toolbar>
        </AppBar>


        {/* Main Content */}
        <Container style={{ marginTop: '20px' }}>
          <Box textAlign="center" my={5}>
            <Typography variant="h5" gutterBottom style={{ color: pink[700] }}>
              Dive into the data behind celebrity discussions on Reddit
            </Typography>
            <Typography variant="body1">
              Explore interactive visualizations about sentiment, demographics, and more.
            </Typography>
          </Box>

          {/* Data Insights Section */}
          <Grid container spacing={4} justifyContent="center">
            {/* Visualization Cards */}
            <VisualizationCard
              title="Sentiment Distribution"
              description="Analyze sentiment trends over time."
              chartData={[
                ['Sentiment', 'Count'],
                ['Positive', 500],
                ['Negative', 300],
                ['Neutral', 200],
              ]}
              chartType="PieChart"
            />
            <VisualizationCard
              title="Word Cloud"
              description="Explore the most frequent words used."
              placeholderImage={heartImage} // Replace with actual word cloud component
            />
            <VisualizationCard
              title="Demographics Breakdown"
              description="Visualize user demographics such as gender, age, and location."
              chartData={[
                ['Category', 'Percentage'],
                ['Male', 60],
                ['Female', 40],
              ]}
              chartType="BarChart"
            />
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

// Component for Visualization Cards
const VisualizationCard = ({ title, description, chartData, chartType, placeholderImage }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Box
      bgcolor="#ffe4e1"
      borderRadius="10px"
      p={2}
      textAlign="center"
      boxShadow="0px 4px 10px rgba(0,0,0,0.1)"
    >
      <Typography variant="h6" gutterBottom style={{ color: pink[700] }}>
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {description}
      </Typography>
      {chartData && chartType ? (
        <Chart
          chartType={chartType}
          data={chartData}
          width="100%"
          height="200px"
          options={{
            backgroundColor: '#ffe4e1',
            legend: { position: 'bottom' },
            colors: [pink[300], pink[500], pink[700]],
          }}
        />
      ) : (
        <img src={placeholderImage} alt={title} style={{ width: '100%', height: '200px' }} />
      )}
    </Box>
  </Grid>
);

export default App;
