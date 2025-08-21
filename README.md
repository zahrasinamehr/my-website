## Getting Started

```bash
npx create-next-app@latest . --typescript --eslint --app --src-dir --no-tailwind
```

```bash
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/system framer-motion react-intersection-observer
```

# Run & build on docker

```bash
docker build -t zahrasinamehr:prod .
```

```bash
docker run -d --name zahrasinamehr \
  -p 1374:1374 \
  --restart unless-stopped \
  zahrasinamehr:prod
```

```bash
docker logs -f zahrasinamehr
```

```bash
docker stop zahrasinamehr
```

# CI/CD

```bash
sudo mkdir -p /opt/zahrasinamehr
```

```bash
sudo tee /opt/zahrasinamehr/docker-compose.yml >/dev/null <<'YAML'
version: "3.8"
services:
  app:
    image: ghcr.io/[account]/zahrasinamehr:latest
    container_name: zahrasinamehr
    restart: unless-stopped
    ports:
      - "1374:1374"
    healthcheck:
      test: ["CMD", "node", "-e", "require('http').get('http://localhost:1374', r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"]
      interval: 20s
      timeout: 5s
      retries: 5
YAML
```

```bash
ssh-keygen -t ed25519 -C "gh-actions-deploy" -f /root/.ssh/gh_actions -N ""
```

```bash
cat /root/.ssh/gh_actions.pub >> /root/.ssh/authorized_keys
```

```bash
chmod 600 /root/.ssh/authorized_keys
```

## Copying the content of the below file

```bash
cat /root/.ssh/gh_actions
```

## Creating a Tokens (classic)

In github, Tokens (classic) → Generate new token (classic)
NAME = ghcr-ci
Checking only the two scope

- write:packages
- read:packages

Copying the token

## In GitHub, Settings → Secrets and variables → Actions → New repository secret

GHCR_USERNAME = [account]
GHCR_TOKEN = [classic token]
SERVER_HOST = [IP]
SERVER_USER = root
SSH_PRIVATE_KEY = [content of /root/.ssh/gh_actions]
SERVER_SSH_PORT = 22

## Added delopy file

.github/workflows/deploy.yml
