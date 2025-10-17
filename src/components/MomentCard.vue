<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  date: string
  message: string
  image?: string
  video?: string
  type?: 'memory' | 'love' | 'special'
  whiteBackground?: boolean
}

const props = defineProps<Props>()

const showVideo = ref(false)

const typeColors = {
  memory: 'from-pink-400 to-rose-400',
  love: 'from-rose-400 to-red-400',
  special: 'from-purple-400 to-pink-400'
}

const typeIcons = {
  memory: '📸',
  love: '💕',
  special: '✨'
}
</script>

<template>
  <div :class="[
    'transform hover:scale-105 transition-all duration-300 mb-6 rounded-2xl p-6 border moment-card',
    whiteBackground 
      ? 'bg-white border-gray-200 shadow-2xl shadow-pink-500/20' 
      : 'bg-white/90 backdrop-blur-md border-pink-200/50 shadow-2xl shadow-purple-500/30'
  ]">
    <!-- Header com ícone e data -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-3">
        <div :class="`w-12 h-12 rounded-full bg-gradient-to-r ${typeColors[type || 'memory']} flex items-center justify-center text-2xl`">
          {{ typeIcons[type || 'memory'] }}
        </div>
        <div>
          <h3 class="text-xl font-romantic font-semibold text-gray-800">{{ title }}</h3>
          <p class="text-sm text-gray-500">{{ date }}</p>
        </div>
      </div>
    </div>

    <!-- Imagem -->
    <div v-if="image" class="mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
      <img :src="image" :alt="title" class="w-full h-auto object-contain max-h-96 md:max-h-[600px]" />
    </div>

    <!-- Vídeo -->
    <div v-if="video" class="mb-4 rounded-xl overflow-hidden">
      <div v-if="!showVideo" class="relative cursor-pointer" @click="showVideo = true">
        <div class="w-full h-64 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
          <div class="text-center">
            <div class="text-6xl mb-2">▶️</div>
            <p class="text-gray-700 font-medium">Clique para assistir</p>
          </div>
        </div>
      </div>
      <video v-else controls class="w-full rounded-xl">
        <source :src="video" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>

    <!-- Mensagem -->
    <div class="prose prose-pink max-w-none">
      <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.prose {
  font-family: 'Inter', sans-serif;
}

.moment-card {
  position: relative;
  overflow: hidden;
}

.moment-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #ff69b4, #ff1493, #c71585, #ff69b4);
  background-size: 400%;
  border-radius: 1rem;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
  animation: gradient-rotate 3s linear infinite;
}

.moment-card:hover::before {
  opacity: 0.3;
}

@keyframes gradient-rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
