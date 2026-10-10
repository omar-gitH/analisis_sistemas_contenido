@echo off
setlocal
title Publicar Plataforma de Analisis de Sistemas

where node >nul 2>&1
if errorlevel 1 (
  echo No se encontro Node.js. Instalalo desde https://nodejs.org/ y vuelve a ejecutar este archivo.
  pause
  exit /b 1
)

echo Instalando dependencias...
call npm install
if errorlevel 1 goto :error

echo Generando la version de produccion...
call npm run build
if errorlevel 1 goto :error

echo Publicando en Vercel...
call npx vercel --prod
if errorlevel 1 goto :error

echo.
echo Publicacion completada. Abre la URL que mostro Vercel.
echo En un navegador compatible aparecera el boton "Instalar app".
pause
exit /b 0

:error
echo.
echo La operacion no pudo completarse. Revisa el mensaje anterior.
pause
exit /b 1