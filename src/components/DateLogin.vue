<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'login-success'): void
}>()

const selectedDate = ref('')
const errorMessage = ref('')
const isShaking = ref(false)

const SECRET_DATE = '2025-04-26'

const handleSubmit = () => {
  if (!selectedDate.value) {
    showError('Por favor, selecione uma data 💕')
    return
  }

  if (selectedDate.value === SECRET_DATE) {
    errorMessage.value = ''
    // Salvar no localStorage que o usuário está autenticado
    localStorage.setItem('love-authenticated', 'true')
    emit('login-success')
  } else {
    showError('Data incorreta! Tente lembrar de um dia especial... 💔')
  }
}

const showError = (message: string) => {
  errorMessage.value = message
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, 500)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Fundo com corações -->
    <div class="fixed inset-0 z-0">
      <div class="heart-bg" style="left: 10%; animation-delay: 0s;">💕</div>
      <div class="heart-bg" style="left: 30%; animation-delay: 2s;">💖</div>
      <div class="heart-bg" style="left: 50%; animation-delay: 4s;">💝</div>
      <div class="heart-bg" style="left: 70%; animation-delay: 1s;">💗</div>
      <div class="heart-bg" style="left: 90%; animation-delay: 3s;">💓</div>
    </div>

    <!-- Card de Login -->
    <div class="login-card relative z-10 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="text-6xl mb-4 animate-pulse">💕</div>
        <h1 class="text-4xl font-romantic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 mb-2">
          Nossa História
        </h1>
        <p class="text-pink-300 text-lg">
          Quando começou nosso amor? 💖
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Input de Data -->
        <div>
          <label for="date" class="block text-pink-300 font-medium mb-2 text-center">
            Selecione a data especial
          </label>
          <input
            id="date"
            v-model="selectedDate"
            type="date"
            :class="[
              'w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 text-center text-lg font-semibold',
              'focus:outline-none focus:ring-4 focus:ring-pink-300/50',
              errorMessage 
                ? 'border-red-400 bg-red-50' 
                : 'border-pink-300 bg-white/90 focus:border-pink-400',
              isShaking ? 'animate-shake' : ''
            ]"
          />
        </div>

        <!-- Mensagem de Erro -->
        <div v-if="errorMessage" class="text-center">
          <p class="text-red-500 font-medium animate-pulse">
            {{ errorMessage }}
          </p>
        </div>

        <!-- Botão de Submit -->
        <button
          type="submit"
          class="w-full py-3 px-6 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 hover:from-pink-500 hover:via-rose-500 hover:to-purple-500 shadow-lg hover:shadow-xl"
        >
          Entrar no nosso mundo 💖
        </button>
      </form>

      <!-- Dica -->
      <div class="mt-6 text-center">
        <p class="text-pink-300/70 text-sm italic">
          Dica: Pense no dia que tudo começou... ✨
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  padding: 3rem 2rem;
  box-shadow: 
    0 20px 60px rgba(255, 105, 180, 0.3),
    0 0 40px rgba(219, 112, 147, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(255, 182, 193, 0.3);
}

.heart-bg {
  position: absolute;
  font-size: 3rem;
  opacity: 0;
  animation: float-heart 15s infinite ease-in-out;
  filter: drop-shadow(0 0 10px rgba(255, 182, 193, 0.5));
}

@keyframes float-heart {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  50% {
    transform: translateY(-50vh) rotate(180deg);
    opacity: 0.6;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-120vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

.animate-shake {
  animation: shake 0.5s;
}

/* Estilização customizada do input date */
input[type="date"] {
  color-scheme: light;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(300deg);
}
</style>
