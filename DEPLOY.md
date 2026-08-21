# Deploy — temirrllan.me

Портфолио — это **статический сайт** (Next.js static export). На сервере не нужен ни
Node, ни PM2, ни сборка: nginx просто отдаёт готовые файлы из папки. Сборка делается
локально, на сервер заливаются готовые файлы.

## Что где

| Что | Значение |
|-----|----------|
| Домен | `temirrllan.me` (без `www`) |
| VPS | `ssh ubuntu@87.199.130.197` (Ubuntu + nginx + certbot) |
| Папка сайта на сервере | `/var/www/html/temirrllan` |
| Локальный билд | `/Users/temirlanraiymbek/projects/portfolio/out` |
| nginx-конфиг | `/etc/nginx/sites-available/temirrllan.me` |
| Регистратор / DNS | ps.kz (личный кабинет) |

Сервер выделен только под портфолио (Ubuntu 24.04 LTS, 1 vCPU / 1 ГБ RAM / 20 ГБ SSD).
Предыдущий VPS `195.49.215.152` (там же жил eventmate) перестал отвечать — с него съехали
21.08.2026.

---

## Первичная настройка (делается один раз)

### 1. DNS-зона в ps.kz
Только когда домен в статусе **«Активен»** (не «ожидает»).

- Кабинет ps.kz → **Мои домены** → `temirrllan.me` → **Управление / DNS** →
  **создать DNS-зону**, поле «IP-адрес сайта»: `87.199.130.197`.
- Это создаёт A-запись корня: `temirrllan.me → 87.199.130.197`.
- Домен должен использовать NS-серверы ps.kz (`ns1.ps.kz`, `ns2.ps.kz`).

Проверка (на своём ПК):
```bash
nslookup temirrllan.me
```
Ждём в ответе `87.199.130.197`.

> Ошибка «Domain does not belong to account» = домен ещё «ожидает» (не завершена
> регистрация/оплата). Дождаться статуса «Активен» или пинать поддержку ps.kz.

### 2. Папка на сервере
```bash
ssh ubuntu@87.199.130.197

sudo mkdir -p /var/www/html/temirrllan
sudo chown -R ubuntu:ubuntu /var/www/html/temirrllan
sudo apt install -y unzip
```

### 3. Собрать и залить статику
Локально (macOS, папка проекта):
```bash
cd /Users/temirlanraiymbek/projects/portfolio
npm run build
rsync -avz --delete out/ ubuntu@87.199.130.197:/var/www/html/temirrllan/
```
Проверка на сервере:
```bash
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

Правки контента — в `lib/content.ts`. Потом одной командой локально (macOS):

```bash
cd /Users/temirlanraiymbek/projects/portfolio
npm run build
rsync -avz --delete out/ ubuntu@87.199.130.197:/var/www/html/temirrllan/
```

`--delete` убирает с сервера файлы, которых больше нет в билде (старые хешированные
чанки и шрифты Next.js). Сначала можно прогнать вхолостую с `-n`, чтобы увидеть план:
`rsync -avzn --delete out/ ubuntu@87.199.130.197:/var/www/html/temirrllan/`.

Проверка, что залилось:
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://temirrllan.me/
```

nginx перезапускать не нужно — статика подхватывается сразу (может понадобиться
Cmd+Shift+R в браузере из-за кэша).

> **Git пушить необязательно.** На сервере нет ни репозитория, ни Node — nginx просто
> раздаёт файлы из папки. `git push` заливает код на GitHub, но на сайт не влияет;
> сайт обновляет только `rsync` выше.

---

## Заметки

- Проект собирается в статику благодаря `output: "export"` в `next.config.mjs`
  (+ `images.unoptimized: true`, `trailingSlash: true`).
- Картинки идут через обычный `<img>`, поэтому `next/image` оптимизацию не трогаем.
- Если после старта вылезет **403 Forbidden** — права: `sudo chown -R www-data:www-data
  /var/www/html/temirrllan` (тогда будущие `unzip` делать через `sudo`).
- Вход по SSH-ключу `~/.ssh/id_ed25519` (пользователь `ubuntu`), пароль не нужен.
- ufw установлен, правила для OpenSSH и Nginx Full добавлены, но сам фаервол выключен
  (`sudo ufw status` → inactive). Включать: `sudo ufw enable`.
