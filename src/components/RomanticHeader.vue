<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  coupleNames?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Nossa História de Amor',
  subtitle: 'Cada momento ao seu lado é especial',
  coupleNames: '❤️'
})
</script>

<template>
  <div class="text-center py-12 px-4">
    <!-- Animação de corações flutuantes -->
    <div class="relative mb-8">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="animate-pulse text-6xl opacity-30 heart-glow">💕</div>
      </div>
      <h1 class="relative text-5xl md:text-7xl font-romantic font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
        {{ title }}
      </h1>
    </div>
    
    <p class="text-xl text-pink-200 font-medium mb-4 drop-shadow-lg">{{ subtitle }}</p>
    
    <div class="flex items-center justify-center gap-3 text-3xl font-romantic">
      <span class="text-pink-400 drop-shadow-lg animate-pulse-slow">{{ coupleNames }}</span>
    </div>

    <!-- Decoração -->
    <div class="flex items-center justify-center gap-4 mt-8">
      <div class="h-px w-20 bg-gradient-to-r from-transparent via-pink-400 to-pink-500"></div>
      <span class="text-4xl heart-glow animate-bounce-slow">💝</span>
      <div class="h-px w-20 bg-gradient-to-l from-transparent via-pink-400 to-pink-500"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-pulse {
  animation: float 3s ease-in-out infinite;
}

.heart-glow {
  filter: drop-shadow(0 0 20px rgba(255, 182, 193, 0.8))
          drop-shadow(0 0 40px rgba(255, 105, 180, 0.6));
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
