# ベースイメージとしてNode.jsを使用
FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

CMD ["npm", "run", "dev"]
