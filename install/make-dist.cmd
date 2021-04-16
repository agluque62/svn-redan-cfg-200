@echo off

echo Limpiando copia anterior.
rd ".\dist" /s/q
del src-zip.7z

pause
cls
mkdir ".\dist"
mkdir ".\dist\logs"
mkdir ".\dist\uploads"

echo Copiando ficheros..
xcopy /S /I /E ..\data_model .\dist\data_model
xcopy /S /I /E ..\ulises\dist\ulises .\dist\frontend
xcopy /S /I /E ..\lib .\dist\lib
xcopy /S /I /E ..\node_modules .\dist\node_modules
xcopy /S /I /E ..\nss .\dist\nss
xcopy /S /I /E ..\routes .\dist\routes
copy ..\*.* .\dist

pause
cls
echo Comprimiendo los ficheros
7z a src-zip.7z ./dist/*
echo Conviertiendo en autoextraible
copy /b 7z.sfx + src-zip.7z redan-gw-config-v3.zip.exe

rem xcopy /s "..\..\dist\05 UlisesG5000\actualizacion-V2.6.0" "tmp\gw"
rem 7z u -t7z src-zip.7z -r @files.txt

pause
@echo on
