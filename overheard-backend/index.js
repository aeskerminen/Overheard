const fs = require("fs");
const https = require("https");
const app = require("./app");
const config = require("./utils/config");

// Load SSL Certificates (update paths if needed)
const server = https.createServer({
    key: fs.readFileSync("/etc/nginx/certs/key.pem"),
    cert: fs.readFileSync("/etc/nginx/certs/cert.pem"),
}, app);

// Start HTTPS Server
server.listen(config.PORT, () => {
    console.log(`mystory backend running on HTTPS port ${config.PORT}.`);
});
