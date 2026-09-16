@echo off
setlocal
cd /d "%~dp0"
cd site
if not exist "node_modules\next" call pnpm install
call pnpm build:static
if not exist "out\index.html" (
  echo BUILD FAILED - see errors above
  pause
  exit /b 1
)
cd ..
if exist docs rmdir /s /q docs
xcopy "site\out\*" "docs" /E /I /Y >nul
git add -A
git commit -m "Deploy"
git push
echo.
echo DONE - check https://tr1nqo.github.io/scandal/ in a minute
pause