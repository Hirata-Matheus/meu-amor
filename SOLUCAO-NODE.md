# ⚠️ SOLUÇÃO: Atualizar Node.js

## Problema Atual

Seu sistema está usando **Node.js 8.17.0**, mas o projeto precisa de **Node.js 20+**.

O erro `SyntaxError: Unexpected token import` acontece porque o Node 8 não suporta módulos ES6 modernos.

## ✅ Solução: Instalar Node.js 20+

### Opção 1: Usando NVM (Mais Fácil e Recomendado)

```bash
# 1. Instalar NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 2. Fechar e abrir o terminal novamente (ou rodar)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 3. Instalar Node.js 20
nvm install 20

# 4. Usar Node.js 20
nvm use 20

# 5. Definir como padrão
nvm alias default 20

# 6. Verificar a versão
node --version  # Deve mostrar v20.x.x
```

### Opção 2: Download Direto

1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (Long Term Support)
3. Instale seguindo as instruções
4. Verifique: `node --version`

### Opção 3: Usando o Gerenciador de Pacotes do Sistema

#### Ubuntu/Debian:
```bash
# Adicionar repositório NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Instalar Node.js 20
sudo apt-get install -y nodejs

# Verificar
node --version
```

#### Fedora/RHEL/CentOS:
```bash
# Adicionar repositório NodeSource
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -

# Instalar Node.js 20
sudo dnf install -y nodejs

# Verificar
node --version
```

## 🚀 Depois de Atualizar o Node.js

```bash
# 1. Voltar para a pasta do projeto
cd "/home/matheusrocha/Documentos/Meus Arquivos/Projetos Pessoal/meu-amor/meu-amor"

# 2. Limpar instalações antigas (opcional mas recomendado)
rm -rf node_modules package-lock.json

# 3. Instalar dependências
npm install

# 4. Iniciar o projeto
npm run dev
```

## ✨ O Que Vai Acontecer

Após rodar `npm run dev`, você verá algo como:

```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Abra `http://localhost:5173/` no navegador e verá seu projeto romântico funcionando! 💕

## 🔍 Verificar Versão Atual

```bash
node --version
npm --version
```

**Necessário:**
- Node.js: >= 20.19.0
- npm: >= 6.x (vem com o Node.js)

## ❓ Problemas Comuns

### "nvm: command not found"
- Feche e abra o terminal novamente
- Ou rode: `source ~/.bashrc` ou `source ~/.zshrc`

### "Permission denied"
- Use `sudo` nos comandos de instalação do sistema
- Ou use NVM (não precisa de sudo)

### Ainda mostra Node 8 após instalar
- Feche TODOS os terminais
- Abra um novo terminal
- Rode: `node --version`

## 📞 Precisa de Ajuda?

Se após atualizar o Node.js ainda tiver problemas:

1. Verifique a versão: `node --version`
2. Delete node_modules: `rm -rf node_modules package-lock.json`
3. Reinstale: `npm install`
4. Tente novamente: `npm run dev`

---

**Importante:** O Node.js 8 foi lançado em 2017 e não é mais suportado. Atualizar é essencial não só para este projeto, mas para qualquer desenvolvimento moderno em JavaScript/TypeScript.
