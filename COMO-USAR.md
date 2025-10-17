# 💕 Guia Rápido - Como Usar o Projeto

## 🚀 Primeiros Passos

### 1. Atualizar o Node.js

O projeto requer **Node.js versão 20 ou superior**. Seu sistema está usando Node 8.17.0.

**Como atualizar:**

#### Opção A: Usando NVM (Recomendado)
```bash
# Instalar NVM (se não tiver)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Fechar e abrir o terminal novamente, depois:
nvm install 20
nvm use 20
nvm alias default 20
```

#### Opção B: Download Direto
Baixe e instale do site oficial: https://nodejs.org/

### 2. Instalar Dependências

Depois de atualizar o Node.js:

```bash
cd "/home/matheusrocha/Documentos/Meus Arquivos/Projetos Pessoal/meu-amor/meu-amor"
npm install
```

### 3. Iniciar o Projeto

```bash
npm run dev
```

Abra o navegador em: `http://localhost:5173`

## 📝 Adicionando Seus Momentos

### Método 1: Pela Interface (Mais Fácil)

1. Clique em **"✨ Adicionar Novo Momento"**
2. Preencha o formulário
3. Clique em **"💝 Salvar Momento"**

### Método 2: Editando o Código (Para Momentos Iniciais)

Edite `src/stores/moments.ts` e adicione seus momentos:

```typescript
const moments = ref<Moment[]>([
  {
    id: '1',
    title: 'Nosso Primeiro Beijo',
    date: '2024-02-14',
    message: 'Foi mágico! Seus lábios eram tão doces...',
    type: 'special'
  },
  {
    id: '2',
    title: 'Por que te amo',
    date: '2024-10-17',
    message: 'Amo seu sorriso que ilumina meu dia, sua risada contagiante, seu jeito carinhoso...',
    type: 'love'
  },
  {
    id: '3',
    title: 'Nossa Viagem para a Praia',
    date: '2024-07-20',
    message: 'Assistir o pôr do sol com você foi inesquecível!',
    image: '/images/praia.jpg', // Coloque a foto em public/images/
    type: 'memory'
  }
])
```

## 🖼️ Adicionando Fotos

### Passo a Passo:

1. **Crie a pasta para imagens:**
   ```bash
   mkdir -p public/images
   ```

2. **Copie suas fotos para lá:**
   ```bash
   cp /caminho/da/sua/foto.jpg public/images/
   ```

3. **Use no momento:**
   - URL da Imagem: `/images/foto.jpg`

### Exemplo Completo:

```bash
# Criar pasta
mkdir -p public/images

# Copiar suas fotos
cp ~/Downloads/nossa-foto.jpg public/images/primeira-foto.jpg
cp ~/Downloads/viagem.jpg public/images/viagem-praia.jpg

# Agora use nos momentos:
# /images/primeira-foto.jpg
# /images/viagem-praia.jpg
```

## 🎥 Adicionando Vídeos

### Passo a Passo:

1. **Crie a pasta para vídeos:**
   ```bash
   mkdir -p public/videos
   ```

2. **Copie seus vídeos para lá:**
   ```bash
   cp /caminho/do/seu/video.mp4 public/videos/
   ```

3. **Use no momento:**
   - URL do Vídeo: `/videos/video.mp4`

### Exemplo Completo:

```bash
# Criar pasta
mkdir -p public/videos

# Copiar seus vídeos
cp ~/Downloads/nosso-video.mp4 public/videos/primeiro-video.mp4

# Agora use no momento:
# /videos/primeiro-video.mp4
```

## 🎨 Personalizando o Projeto

### Mudar o Título Principal

Edite `src/App.vue` na linha 27-31:

```vue
<RomanticHeader 
  title="Eu e Você ❤️"
  subtitle="Nossa história de amor começou em..."
  coupleNames="Matheus & [Nome dela] 💕"
/>
```

### Mudar as Cores

Edite `tailwind.config.js`:

```javascript
colors: {
  'romantic-pink': '#FFB6C1',    // Rosa claro
  'romantic-rose': '#FF69B4',    // Rosa médio
  'romantic-purple': '#DDA0DD',  // Roxo
  'romantic-lavender': '#E6E6FA', // Lavanda
}
```

## 💾 Backup dos Momentos

### Fazer Backup:

1. Abra o Console do navegador (F12)
2. Vá na aba "Console"
3. Digite:
   ```javascript
   console.log(localStorage.getItem('romantic-moments'))
   ```
4. Copie o texto que aparecer
5. Cole em um arquivo `.txt` e salve

### Restaurar Backup:

1. Abra o Console do navegador (F12)
2. Digite (substituindo pelo seu backup):
   ```javascript
   localStorage.setItem('romantic-moments', 'SEU_BACKUP_AQUI')
   ```
3. Recarregue a página (F5)

## 🌐 Publicar Online

### Opção 1: Netlify (Grátis e Fácil)

1. Faça o build:
   ```bash
   npm run build
   ```

2. Crie conta em: https://netlify.com
3. Arraste a pasta `dist` para o Netlify
4. Pronto! Você terá um link para compartilhar

### Opção 2: Vercel (Grátis e Fácil)

1. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Faça o deploy:
   ```bash
   vercel
   ```

3. Siga as instruções

## ❓ Problemas Comuns

### "Cannot find module 'vue'"
- **Solução**: Rode `npm install` novamente

### "SyntaxError: Unexpected token import"
- **Solução**: Atualize o Node.js para versão 20+

### Imagens não aparecem
- **Solução**: Verifique se as imagens estão na pasta `public/images/`
- Use caminhos começando com `/` (ex: `/images/foto.jpg`)

### Vídeos não carregam
- **Solução**: Certifique-se que o vídeo está em formato MP4
- Coloque na pasta `public/videos/`
- Use caminhos começando com `/` (ex: `/videos/video.mp4`)

## 💡 Dicas Extras

1. **Organize suas fotos**: Crie subpastas em `public/images/`
   ```
   public/images/
   ├── 2024/
   │   ├── janeiro/
   │   └── fevereiro/
   └── viagens/
   ```

2. **Comprima vídeos grandes**: Use ferramentas como HandBrake para reduzir o tamanho

3. **Teste antes de mostrar**: Adicione alguns momentos de teste primeiro

4. **Faça surpresa**: Configure tudo, faça o deploy e envie o link para ela! 💕

## 📞 Precisa de Ajuda?

Se tiver dúvidas:
1. Leia o `README-PROJETO.md` para mais detalhes
2. Verifique se seguiu todos os passos
3. Confirme que o Node.js está atualizado

---

**Boa sorte com seu projeto romântico! 💕**
