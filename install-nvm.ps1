$nvmUrl = "https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe"
$installerPath = "$env:TEMP\nvm-setup.exe"

Write-Host "Downloading NVM for Windows..."
Invoke-WebRequest -Uri $nvmUrl -OutFile $installerPath

Write-Host "Installing NVM for Windows..."
Start-Process -FilePath $installerPath -ArgumentList "/SILENT" -Wait

Write-Host "Cleaning up..."
Remove-Item $installerPath

Write-Host "Installation completed. Please close and reopen your terminal, then run:"
Write-Host "nvm install 18.17.1"
Write-Host "nvm use 18.17.1"
