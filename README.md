# Collapse

Домашнее задание к занятию "9. Анимации и CSS"
![CI](https://github.com/sun-fog/ahj_anim/actions/workflows/deploy.yml/badge.svg)

## Развертывание

```bash
npm install
npm run build  # сборка в каталог dist/
```

## Деплой на GitHub Pages

Репозиторий настроен на автоматический деплой через GitHub Actions
(файл `.github/workflows/deploy.yml`): при пуше в `main` проект собирается
через Webpack и публикуется в GitHub Pages. В настройках репозитория
раздел **Settings → Pages → Source** выберите **GitHub Actions**.
