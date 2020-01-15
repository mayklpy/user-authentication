const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.status(200).json({ success: "Welcome!" }));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);