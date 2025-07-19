echo "Downloading Node.js 18.17.1..."
curl -o node-installer.msi https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi

echo "Installing Node.js 18.17.1..."
msiexec /i node-installer.msi /qn

echo "Cleaning up..."
del node-installer.msi

echo "Installation complete. Please restart your terminal."
