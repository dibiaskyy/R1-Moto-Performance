@echo off
title R1 Moto Performance - Full Stack Starter
echo ========================================================
echo   Launching R1 Moto Performance E-Commerce Platform
echo ========================================================
cd /d "%~dp0"

echo [1/2] Starting PHP Backend API Server (Port 8000)...
start "R1 Backend" cmd /k "C:\xampp\php\php.exe -S 127.0.0.1:8000 backend/api_server.php"

echo [2/2] Starting Frontend Vite Server (Port 5173)...
start "R1 Frontend" cmd /k "cd frontend && npm run dev"

echo Done! Both servers are starting up.
timeout /t 3 >nul
start http://localhost:5173
exit
