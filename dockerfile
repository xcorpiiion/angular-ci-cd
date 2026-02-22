# ==========================================
# Fase 1: A Forja (Build do Angular)
# ==========================================
FROM node:20 AS builder

# Cria a pasta do jogo dentro do container
WORKDIR /app

# Copia o inventário de dependências primeiro (pra otimizar o cache do Docker)
COPY package*.json ./
RUN npm ci

# Copia o resto do seu código
COPY . .

# Roda o comando de build (gera a pasta dist)
RUN npm run build

# ==========================================
# Fase 2: A Taverna (Servidor Nginx)
# ==========================================
FROM nginx:alpine

# Pega SÓ a pasta compilada da Fase 1 e joga na pasta pública do Nginx
# Atenção: Nas versões novas do Angular, ele cria a pasta 'browser' dentro do dist.
COPY --from=builder /app/dist/treino-cicd/browser /usr/share/nginx/html

# Expõe a porta 80 pro mundo
EXPOSE 80

# Dá o Start no servidor
CMD ["nginx", "-g", "daemon off;"]
