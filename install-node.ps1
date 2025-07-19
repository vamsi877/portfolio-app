$nodeUrl = "https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi"
$installerPath = "$env:TEMP\node-installer.msi"

Write-Host "Downloading Node.js 20.10.0..."
Invoke-WebRequest -Uri $nodeUrl -OutFile $installerPath

Write-Host "Installing Node.js 20.10.0..."
Start-Process msiexec.exe -Wait -ArgumentList "/i $installerPath /quiet"

Write-Host "Cleaning up..."
Remove-Item $installerPath

Write-Host "Installation completed. Please restart your terminal to use Node.js 20."
