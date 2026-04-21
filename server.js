const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Azure App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(to right, #4facfe, #00f2fe);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    text-align: center;
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #666;
                }
                button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    background: #4facfe;
                    color: white;
                    cursor: pointer;
                    margin-top: 10px;
                }
                button:hover {
                    background: #007bff;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Deployed on Azure</h1>
                <p>Your app is running successfully!</p>
                <button onclick="showMessage()">Click Me</button>
            </div>

            <script>
                function showMessage() {
                    alert("Your Azure app is working!");
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});