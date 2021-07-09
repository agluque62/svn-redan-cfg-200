:menu
cls
@echo off
echo ****************************************************************
echo **** Utilidad de Configuracion del servicio para Aplicacion ****
echo **** Centralizada de Configuracion para REDAN V5            ****
echo ****************************************************************
echo.
echo.
choice /C SN /M "Crear el servicio Ulises G5000 ? (S)i (N)o" 
if errorlevel 2 goto fin
if errorlevel 1 goto instala-servicio
goto menu
:instala-servicio
reg Query "HKLM\Hardware\Description\System\CentralProcessor\0" | find /i "x86" > NUL && set OS=32BIT || set OS=64BIT
if %OS%==32BIT echo This is a 32bit operating system
if %OS%==64BIT echo This is a 64bit operating system
if %OS%==32BIT copy .\nss\win32\nssm.exe .
if %OS%==64BIT copy .\nss\win64\nssm.exe .
.\nssm.exe install Ulises-G5000

:fin
@echo Fin de la instalacion
pause
