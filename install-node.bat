@echo off
echo This script will install Node.js 18.17.1...

REM Check if Node.js is currently running
taskkill /F /IM node.exe 2>nul
taskkill /F /IM npm.exe 2>nul

REM Remove existing installation if present
echo Removing any existing Node.js installation...
powershell -Command "& {Remove-Item -Path 'C:\Program Files\nodejs' -Recurse -Force -ErrorAction SilentlyContinue}"

echo Downloading Node.js 18.17.1...
powershell -Command "& {Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi' -OutFile 'node-installer.msi'}"

echo Installing Node.js 18.17.1...
msiexec /i node-installer.msi /qn /passive ADDLOCAL=ALL

echo Waiting for installation to complete...
timeout /t 45 /nobreak

echo Cleaning up...
del node-installer.msi

echo Refreshing environment variables...
powershell -Command "& {$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')}"

echo Verifying installation...
powershell -Command "& {$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User'); node -v}"

echo Installation complete. A system restart is REQUIRED for the changes to take effect.
echo Please:
echo 1. Save all your work
echo 2. Close ALL applications
echo 3. Restart your computer
echo 4. After restart, open VS Code and verify Node.js version with 'node -v'
pause
