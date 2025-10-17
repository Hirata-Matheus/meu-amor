<script setup lang="ts">
import { ref } from 'vue'

interface Moment {
  title: string
  date: string
  message: string
  image?: string
  video?: string
  type: 'memory' | 'love' | 'special'
  whiteBackground?: boolean
}

const emit = defineEmits<{
  addMoment: [moment: Moment]
}>()

const showForm = ref(false)
const title = ref('')
const date = ref('')
const message = ref('')
const image = ref('')
const video = ref('')
const type = ref<'memory' | 'love' | 'special'>('memory')
const whiteBackground = ref(false)

const handleSubmit = () => {
  if (!title.value || !date.value || !message.value) {
    alert('Por favor, preencha todos os campos obrigatórios!')
    return
  }

  emit('addMoment', {
    title: title.value,
    date: date.value,
    message: message.value,
    image: image.value || undefined,
    video: video.value || undefined,
    type: type.value,
    whiteBackground: whiteBackground.value
  })

  // Limpar formulário
  title.value = ''
  date.value = ''
  message.value = ''
  image.value = ''
  video.value = ''
  type.value = 'memory'
  whiteBackground.value = false
  showForm.value = false
}
</script>

<template>
  <div class="mb-8">
    <!-- Botão para abrir formulário -->
    <button
      v-if="!showForm"
      @click="showForm = true"
      class="romantic-button w-full md:w-auto mx-auto block"
    >
      ✨ Adicionar Novo Momento
    </button>

    <!-- Formulário -->
    <div v-else class="romantic-card">
      <h3 class="text-2xl font-romantic font-semibold text-gray-800 mb-6">
        💕 Adicionar Novo Momento
      </h3>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Tipo -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Momento</label>
          <div class="flex gap-3">
            <button
              type="button"
              @click="type = 'memory'"
              :class="[
                'flex-1 py-3 px-4 rounded-lg font-medium transition-all',
                type === 'memory'
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              📸 Memória
            </button>
            <button
              type="button"
              @click="type = 'love'"
              :class="[
                'flex-1 py-3 px-4 rounded-lg font-medium transition-all',
                type === 'love'
                  ? 'bg-gradient-to-r from-rose-400 to-red-400 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              💕 Amor
            </button>
            <button
              type="button"
              @click="type = 'special'"
              :class="[
                'flex-1 py-3 px-4 rounded-lg font-medium transition-all',
                type === 'special'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              ✨ Especial
            </button>
          </div>
        </div>

        <!-- Título -->
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
            Título *
          </label>
          <input
            id="title"
            v-model="title"
            type="text"
            required
            placeholder="Ex: Nosso primeiro encontro"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
          />
        </div>

        <!-- Data -->
        <div>
          <label for="date" class="block text-sm font-medium text-gray-700 mb-2">
            Data *
          </label>
          <input
            id="date"
            v-model="date"
            type="date"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
          />
        </div>

        <!-- Mensagem -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            v-model="message"
            required
            rows="5"
            placeholder="Escreva sua mensagem especial aqui..."
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition resize-none"
          ></textarea>
        </div>

        <!-- URL da Imagem -->
        <div>
          <label for="image" class="block text-sm font-medium text-gray-700 mb-2">
            URL da Imagem (opcional)
          </label>
          <input
            id="image"
            v-model="image"
            type="url"
            placeholder="https://exemplo.com/imagem.jpg"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
          />
        </div>

        <!-- URL do Vídeo -->
        <div>
          <label for="video" class="block text-sm font-medium text-gray-700 mb-2">
            URL do Vídeo (opcional)
          </label>
          <input
            id="video"
            v-model="video"
            type="url"
            placeholder="https://exemplo.com/video.mp4"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition"
          />
        </div>

        <!-- Fundo Branco -->
        <div class="flex items-center gap-3">
          <input
            id="whiteBackground"
            v-model="whiteBackground"
            type="checkbox"
            class="w-5 h-5 text-pink-500 border-gray-300 rounded focus:ring-pink-400"
          />
          <label for="whiteBackground" class="text-sm font-medium text-gray-700">
            Usar fundo branco sólido no card
          </label>
        </div>

        <!-- Botões -->
        <div class="flex gap-3 pt-4">
          <button
            type="submit"
            class="flex-1 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-full font-medium hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            💝 Salvar Momento
          </button>
          <button
            type="button"
            @click="showForm = false"
            class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition-all duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
