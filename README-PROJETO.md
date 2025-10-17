# 💕 Meu Amor - Projeto Romântico

Um projeto especial em Vue 3 + Tailwind CSS para eternizar os momentos mais especiais do seu relacionamento.

## ✨ Funcionalidades

- 📸 **Timeline de Momentos**: Adicione e visualize momentos especiais em ordem cronológica
- 💕 **Três Tipos de Momentos**:
  - **Memórias** (📸): Para registrar momentos especiais vividos juntos
  - **Amor** (💕): Para declarações de amor e coisas que você ama na sua namorada
  - **Especial** (✨): Para ocasiões únicas e inesquecíveis
- 🖼️ **Suporte para Imagens**: Adicione fotos dos seus momentos especiais
- 🎥 **Suporte para Vídeos**: Inclua vídeos especiais (formato MP4)
- 💾 **Persistência Local**: Todos os momentos são salvos no navegador (localStorage)
- 🎨 **Design Romântico**: Interface moderna com gradientes rosa, animações suaves e corações flutuantes

## 🚀 Como Usar

### Pré-requisitos

Você precisa ter instalado:
- **Node.js** versão 20.19.0 ou superior
- **npm** (vem com o Node.js)

### Instalação

1. **Atualize o Node.js** (se necessário):
   ```bash
   # Verifique sua versão atual
   node --version
   
   # Se for menor que 20.19.0, instale uma versão mais recente
   # Visite: https://nodejs.org/
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Abra no navegador**:
   - O projeto estará disponível em `http://localhost:5173`

## 📝 Como Adicionar Momentos

1. Clique no botão **"✨ Adicionar Novo Momento"**
2. Escolha o tipo de momento (Memória, Amor ou Especial)
3. Preencha os campos:
   - **Título**: Um título especial para o momento
   - **Data**: A data do momento
   - **Mensagem**: Escreva sua mensagem do coração
   - **URL da Imagem** (opcional): Cole o link de uma imagem
   - **URL do Vídeo** (opcional): Cole o link de um vídeo MP4
4. Clique em **"💝 Salvar Momento"**

## 🎨 Personalização

### Alterar Títulos e Textos

Edite o arquivo `src/App.vue` e modifique as props do componente `RomanticHeader`:

```vue
<RomanticHeader 
  title="Seu Título Aqui"
  subtitle="Sua mensagem aqui"
  coupleNames="Você & Ela ❤️"
/>
```

### Adicionar Momentos Pré-definidos

Edite o arquivo `src/stores/moments.ts` e adicione seus momentos no array inicial:

```typescript
const moments = ref<Moment[]>([
  {
    id: '1',
    title: 'Seu Momento Especial',
    date: '2024-01-15',
    message: 'Sua mensagem aqui...',
    image: 'https://exemplo.com/foto.jpg', // opcional
    video: 'https://exemplo.com/video.mp4', // opcional
    type: 'special' // 'memory', 'love' ou 'special'
  },
  // Adicione mais momentos aqui...
])
```

### Cores e Estilos

As cores românticas estão definidas em `tailwind.config.js`:

```javascript
colors: {
  'romantic-pink': '#FFB6C1',
  'romantic-rose': '#FF69B4',
  'romantic-purple': '#DDA0DD',
  'romantic-lavender': '#E6E6FA',
}
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── RomanticHeader.vue      # Cabeçalho com título e decorações
│   ├── MomentCard.vue          # Card para exibir cada momento
│   └── AddMomentForm.vue       # Formulário para adicionar momentos
├── stores/
│   └── moments.ts              # Store Pinia com gerenciamento de momentos
├── assets/
│   └── main.css                # Estilos globais e Tailwind
└── App.vue                     # Componente principal
```

## 🎥 Como Adicionar Vídeos

### Opção 1: Vídeos Locais (Recomendado)

1. Crie uma pasta `public/videos` no projeto
2. Coloque seus vídeos lá (ex: `public/videos/nosso-video.mp4`)
3. Use o caminho: `/videos/nosso-video.mp4`

### Opção 2: Vídeos Online

Use serviços como:
- Google Drive (com link direto)
- Dropbox (com link direto)
- Seu próprio servidor

**Importante**: O link deve apontar diretamente para o arquivo `.mp4`

## 🖼️ Como Adicionar Imagens

### Opção 1: Imagens Locais (Recomendado)

1. Crie uma pasta `public/images` no projeto
2. Coloque suas fotos lá (ex: `public/images/foto1.jpg`)
3. Use o caminho: `/images/foto1.jpg`

### Opção 2: Imagens Online

Use serviços como:
- Imgur
- Google Photos (com link direto)
- Seu próprio servidor

## 🚀 Build para Produção

Para criar uma versão otimizada para publicar:

```bash
npm run build
```

Os arquivos estarão na pasta `dist/`. Você pode hospedar em:
- Netlify
- Vercel
- GitHub Pages
- Qualquer servidor web

## 💡 Dicas

1. **Backup dos Momentos**: Os momentos ficam salvos no navegador. Para fazer backup, você pode:
   - Abrir o Console do navegador (F12)
   - Digitar: `localStorage.getItem('romantic-moments')`
   - Copiar e salvar o texto em um arquivo

2. **Restaurar Backup**:
   - Abrir o Console do navegador (F12)
   - Digitar: `localStorage.setItem('romantic-moments', 'COLE_AQUI_O_BACKUP')`

3. **Compartilhar**: Após fazer o build, você pode hospedar o site e compartilhar o link com sua namorada!

## ❤️ Feito com Amor

Este projeto foi criado para ajudar você a expressar seu amor de forma especial e criativa. Personalize à vontade e adicione seus momentos mais preciosos!

---

**Tecnologias Utilizadas:**
- Vue 3 (Composition API)
- TypeScript
- Tailwind CSS
- Pinia (State Management)
- Vite (Build Tool)
