# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🚀 Publicar cambios en GitHub Pages manualmente (`gh-pages`)

```bash
# 1. Cambia a la rama de desarrollo
git checkout dev

# 2. Genera el build de producción
npm run build

# 3. Añade el archivo CNAME si usas dominio personalizado
echo 'astralpet.es' > dist/CNAME

# 4. Copia la carpeta dist a una ubicación temporal
cp -r dist ../dist-temp

# 5. Cambia a la rama gh-pages
git checkout gh-pages
```

> ⚠️ Si no puedes cambiar por cambios sin guardar:
```bash
git stash
```
Y luego para recuperarlos:
```bash
git checkout main
git stash pop
```

```bash
# 6. Sustituye la build anterior por la nueva
rm -rf dist
cp -r ../dist-temp dist

# 7. Añade y haz commit
git add dist -f
git commit -m "Actualiza build de Vite desde rama dev"

# 8. Sube los cambios a GitHub
git push origin gh-pages

# 9. Limpieza (opcional)
rm -rf ../dist-temp
```

✅ En unos segundos tu web estará disponible en 👉 https://astralpet.es  
Usa `Ctrl + F5` o modo incógnito si no ves los cambios reflejados.

## ✅ Checklist final
- [x] Push hecho en gh-pages
- [x] CNAME correcto
- [x] Último build desde dev
- [x] Web verificada y visible