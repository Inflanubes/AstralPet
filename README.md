# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 1. Asegúrate de estar en dev
git checkout dev

# 2. Limpia y genera un nuevo build
rm -rf dist
npm run build

# 3. Asegúrate de que el archivo CNAME esté presente
echo 'astralpet.es' > dist/CNAME

# 4. Copia el build a una carpeta temporal
cp -r dist ../dist-temp

# 5. Cambia a la rama gh-pages
git checkout gh-pages

# 6. Borra todo el contenido (excepto .git)
rm -rf *

# 7. Copia los archivos del build a la raíz
cp -r ../dist-temp/* .

# 8. Sube el contenido a producción
git add . -f
git commit -m "🚀 Nueva publicación desde dev"
git push origin gh-pages

# 9. Limpieza (opcional)
rm -rf ../dist-temp