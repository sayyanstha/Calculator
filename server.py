const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const calculatorRouter = require('./routes/calculator');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use routes for specific resources, such as the calculator
app.use('/calculator', calculatorRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Result: ${result}`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
const express = require('express');
const router = express.Router();

// Import your calculator logic or functions
const { calculateResult } = require('../controllers/calculatorController');

router.post('/calculate', (req, res) => {
  const { input } = req.body;

  // Perform the calculation using the imported logic
  const result = calculateResult(input);

  // Send the result back to the client
  res.json({ result });
});

module.exports = router;

