# deps
FROM node:20-bookworm-slim AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile

# build
FROM node:20-bookworm-slim AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# runner
FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN useradd --user-group --system --create-home --uid 1001 nextjs

# standalone
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# port
ENV PORT=1374
ENV HOSTNAME=0.0.0.0
EXPOSE 1374

RUN chown -R nextjs:nextjs /app
USER nextjs

CMD ["node","server.js"]
