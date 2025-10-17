# 🚀 Início Rápido

## ⚠️ IMPORTANTE: Atualizar Node.js Primeiro!

Seu sistema está usando **Node.js 8.17.0**, mas o projeto precisa de **Node.js 20+**

### Atualizar Node.js (OBRIGATÓRIO):

```bash
# Opção 1: Usando NVM (Recomendado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# Feche e abra o terminal novamente
nvm install 20
nvm use 20
nvm alias default 20

# Opção 2: Download direto
# Visite: https://nodejs.org/
```

## 📦 Depois de Atualizar o Node.js:

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar o projeto
npm run dev

# 3. Abrir no navegador
# http://localhost:5173
```

## ✨ O Que Você Vai Ver:

- 💕 Uma página romântica com gradientes rosa e roxo
- 📝 Três momentos de exemplo já criados
- ✨ Botão para adicionar novos momentos
- 💝 Corações flutuantes animados no fundo

## 📝 Próximos Passos:

1. **Personalize o título**: Edite `src/App.vue` (linha 27-31)
2. **Adicione suas fotos**: Coloque em `public/images/`
3. **Adicione seus vídeos**: Coloque em `public/videos/`
4. **Crie momentos**: Use o botão "Adicionar Novo Momento"

## 📚 Documentação Completa:

- **README-PROJETO.md** - Documentação técnica completa
- **COMO-USAR.md** - Guia detalhado passo a passo
- **Este arquivo** - Início rápido

## 🎨 Estrutura do Projeto:

```
meu-amor/
├── src/
│   ├── components/          # Componentes Vue
│   │   ├── RomanticHeader.vue
│   │   ├── MomentCard.vue
│   │   └── AddMomentForm.vue
│   ├── stores/
│   │   └── moments.ts       # Gerenciamento de momentos
│   ├── assets/
│   │   └── main.css         # Estilos Tailwind
│   └── App.vue              # Componente principal
├── public/
│   ├── images/              # 📸 Coloque suas fotos aqui
│   └── videos/              # 🎥 Coloque seus vídeos aqui
└── tailwind.config.js       # Configuração de cores
```

## 💡 Dica Rápida:

Para adicionar um momento com foto:

1. Copie sua foto para `public/images/minha-foto.jpg`
2. Clique em "Adicionar Novo Momento"
3. No campo "URL da Imagem", digite: `/images/minha-foto.jpg`
4. Preencha os outros campos e salve!

## ❤️ Pronto para Começar!

Depois de atualizar o Node.js e rodar `npm install` e `npm run dev`, você terá um lindo site romântico funcionando!

---

**Precisa de ajuda?** Leia o arquivo `COMO-USAR.md` para instruções detalhadas.
