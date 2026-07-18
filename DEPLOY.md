# Deploy — temirrllan.me

Портфолио — это **статический сайт** (Next.js static export). На сервере не нужен ни
Node, ни PM2, ни сборка: nginx просто отдаёт готовые файлы из папки. Сборка делается
локально, на сервер заливаются готовые файлы.

## Что где

| Что | Значение |
|-----|----------|
| Домен | `temirrllan.me` (без `www`) |
| VPS | `ssh ubuntu@195.49.215.152` (Ubuntu + nginx + certbot) |
| Папка сайта на сервере | `/var/www/html/temirrllan` |
| Локальный билд | `D:\Projects\Brain\Projects\porfolio\out` |
| nginx-конфиг | `/etc/nginx/sites-available/temirrllan.me` |
| Регистратор / DNS | ps.kz (личный кабинет) |

Тот же сервер также обслуживает: `api.eventmate.asia` (PM2 :3001),
`app.eventmate.asia`, `landing.eventmate.asia`.

---

## Первичная настройка (делается один раз)

### 1. DNS-зона в ps.kz
Только когда домен в статусе **«Активен»** (не «ожидает»).

- Кабинет ps.kz → **Мои домены** → `temirrllan.me` → **Управление / DNS** →
  **создать DNS-зону**, поле «IP-адрес сайта»: `195.49.215.152`.
- Это создаёт A-запись корня: `temirrllan.me → 195.49.215.152`.
- Домен должен использовать NS-серверы ps.kz (`ns1.ps.kz`, `ns2.ps.kz`).

Проверка (на своём ПК, PowerShell):
```powershell
nslookup temirrllan.me
```
Ждём в ответе `195.49.215.152`.

> Ошибка «Domain does not belong to account» = домен ещё «ожидает» (не завершена
> регистрация/оплата). Дождаться статуса «Активен» или пинать поддержку ps.kz.

### 2. Папка на сервере
```bash
ssh ubuntu@195.49.215.152

sudo mkdir -p /var/www/html/temirrllan
sudo chown -R ubuntu:ubuntu /var/www/html/temirrllan
sudo apt install -y unzip
```

### 3. Собрать и залить статику
Локально (PowerShell, папка проекта):
```powershell
cd D:\Projects\Brain\Projects\porfolio
npm run build
Compress-Archive -Path .\out\* -DestinationPath .\temirrllan-me-site.zip -Force
scp .\temirrllan-me-site.zip ubuntu@195.49.215.152:/tmp/
```
На сервере:
```bash
unzip -o /tmp/temirrllan-me-site.zip -d /var/www/html/temirrllan
rm /tmp/temirrllan-me-site.zip
ls -la /var/www/html/temirrllan   # должны быть index.html, _next/, media/, favicon.svg, 404.html
```

### 4. nginx-конфиг
```bash
sudo nano /etc/nginx/sites-available/temirrllan.me
```
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name temirrllan.me;

    root /var/www/html/temirrllan;
    index index.html;

    access_log /var/log/nginx/temirrllan-access.log;
    error_log  /var/log/nginx/temirrllan-error.log;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    error_page 404 /404.html;

    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript application/xml+rss image/svg+xml font/woff2;
}
```
Активировать:
```bash
sudo ln -s /etc/nginx/sites-available/temirrllan.me /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```
Проверка без DNS (локально на сервере):
```bash
curl -s -H "Host: temirrllan.me" http://localhost/ | head -20
curl -s -o /dev/null -w "%{http_code}\n" -H "Host: temirrllan.me" http://localhost/media/solana-rwa-3rd-place.png
```
Должен вернуться HTML с `<title>Temirlan Raiymbek …</title>` и `200` на картинку.

### 5. SSL (после того как nslookup вернул нужный IP)
```bash
sudo certbot --nginx -d temirrllan.me
```
Email — тот же, `Y` на Terms, редирект HTTP→HTTPS — опция **2**.
Certbot сам допишет `listen 443 ssl` и настроит автопродление.

Проверка:
```bash
curl -I https://temirrllan.me
sudo certbot certificates | grep temirrllan
```
Готово → `https://temirrllan.me` с замочком.

---

## Обновление сайта (в будущем)

Правки контента — в `lib/content.ts`. Потом:

Локально (PowerShell):
```powershell
cd D:\Projects\Brain\Projects\porfolio
npm run build
Compress-Archive -Path .\out\* -DestinationPath .\temirrllan-me-site.zip -Force
scp .\temirrllan-me-site.zip ubuntu@195.49.215.152:/tmp/
```
На сервере:
```bash
rm -rf /var/www/html/temirrllan/*
unzip -o /tmp/temirrllan-me-site.zip -d /var/www/html/temirrllan
rm /tmp/temirrllan-me-site.zip
```
nginx перезапускать не нужно — статика подхватывается сразу (может понадобиться
Ctrl+F5 в браузере из-за кэша).

---

## Заметки

- Проект собирается в статику благодаря `output: "export"` в `next.config.mjs`
  (+ `images.unoptimized: true`, `trailingSlash: true`).
- Картинки идут через обычный `<img>`, поэтому `next/image` оптимизацию не трогаем.
- Если после старта вылезет **403 Forbidden** — права: `sudo chown -R www-data:www-data
  /var/www/html/temirrllan` (тогда будущие `unzip` делать через `sudo`).
- Статус на момент настройки: сервер готов (папка + статика + nginx проверены),
  ждём активацию домена в ps.kz → шаги 1 и 5.
