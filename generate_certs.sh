#!/bin/sh

echo "Generating self-signed SSL certificate...\n"

DIRECTORY="certs/"

if [ -d "$DIRECTORY" ]; then
    echo "certs directory already exists. Exiting...\n"
    exit 1
fi    

mkdir certs
cd certs

req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

echo "Certificate generated successfully!\n"