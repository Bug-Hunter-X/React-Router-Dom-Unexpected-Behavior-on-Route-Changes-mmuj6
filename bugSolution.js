```javascript
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  // Add a key prop to the div element to trigger re-rendering
  return <div key={location.pathname}>Home</div>;
}

function About() {
  const location = useLocation();
  // Add a key prop to the div element to trigger re-rendering
  return <div key={location.pathname}>About</div>;
}

export default App;
```