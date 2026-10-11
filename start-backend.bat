@echo off
title R1 Moto Performance - Backend Server
echo Starting R1 Moto Performance Backend Server on port 8000...
cd /d "%~dp0"
C:\xampp\php\php.exe -S 127.0.0.1:8000 backend/api_server.php
pause
