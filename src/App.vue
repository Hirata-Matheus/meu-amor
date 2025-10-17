<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import RomanticHeader from './components/RomanticHeader.vue'
import LoveCounter from './components/LoveCounter.vue'
import MomentCard from './components/MomentCard.vue'
import AddMomentForm from './components/AddMomentForm.vue'
import DateLogin from './components/DateLogin.vue'
import { useMomentsStore } from './stores/moments'

const momentsStore = useMomentsStore()
const isAuthenticated = ref(false)

// Verificar se já está autenticado ao montar o componente
onMounted(() => {
  const auth = localStorage.getItem('love-authenticated')
  if (auth === 'true') {
    isAuthenticated.value = true
  }
})

// Ordenar momentos por data (mais recente primeiro)
const sortedMoments = computed(() => {
  return momentsStore.moments
  /**
   * return [...momentsStore.moments].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
   */
})

const handleAddMoment = (moment: any) => {
  momentsStore.addMoment(moment)
}

const handleLoginSuccess = () => {
  isAuthenticated.value = true
}

const handleLogout = () => {
  localStorage.removeItem('love-authenticated')
  isAuthenticated.value = false
}
</script>

<template>
  <!-- Tela de Login -->
  <DateLogin v-if="!isAuthenticated" @login-success="handleLoginSuccess" />

  <!-- Conteúdo Principal -->
  <div v-else class="min-h-screen pb-12">
    <!-- Container principal -->
    <div class="max-w-4xl mx-auto px-4 relative z-10">
      <!-- Cabeçalho -->
      <RomanticHeader
        title="Nossa História de Amor"
        subtitle="Cada momento ao seu lado é especial"
        coupleNames="❤️"
      />

      <!-- Contador de Tempo Juntos -->
      <LoveCounter />

      <!-- Formulário para adicionar momentos -->
      <!-- <AddMomentForm @add-moment="handleAddMoment" /> -->

      <!-- Timeline de momentos -->
      <div class="space-y-6">
        <div v-if="sortedMoments.length === 0" class="text-center py-12">
          <p class="text-xl text-gray-500">
            Ainda não há momentos registrados. Adicione o primeiro! 💕
          </p>
        </div>

        <MomentCard
          v-for="moment in sortedMoments"
          :key="moment.id"
          :title="moment.title"
          :date="
            new Date(moment.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })
          "
          :message="moment.message"
          :image="moment.image"
          :video="moment.video"
          :type="moment.type"
          :white-background="moment.whiteBackground"
        />
      </div>

      <!-- Footer -->
      <div class="text-center mt-12 pt-8 border-t border-pink-500/30">
        <p class="text-pink-300 font-romantic text-lg drop-shadow-lg">
          Feito com <span class="text-pink-400 animate-pulse inline-block">💕</span> para eternizar
          nossos momentos
        </p>
        <p class="text-pink-400/60 text-sm mt-2">
          Cada momento é uma estrela em nossa constelação de amor ✨
        </p>
        <button
          @click="handleLogout"
          class="mt-4 px-4 py-2 text-sm text-pink-400/70 hover:text-pink-400 transition-colors duration-300 underline"
        >
          Sair
        </button>
      </div>
    </div>

    <!-- Corações flutuantes de fundo -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Primeira camada de corações -->
      <div class="heart-float" style="left: 5%; animation-delay: 0s; animation-duration: 20s">
        💕
      </div>
      <div class="heart-float" style="left: 15%; animation-delay: 3s; animation-duration: 25s">
        💖
      </div>
      <div class="heart-float" style="left: 25%; animation-delay: 6s; animation-duration: 22s">
        💝
      </div>
      <div class="heart-float" style="left: 35%; animation-delay: 2s; animation-duration: 28s">
        💗
      </div>
      <div class="heart-float" style="left: 45%; animation-delay: 8s; animation-duration: 24s">
        💓
      </div>
      <div class="heart-float" style="left: 55%; animation-delay: 4s; animation-duration: 26s">
        💕
      </div>
      <div class="heart-float" style="left: 65%; animation-delay: 10s; animation-duration: 23s">
        💖
      </div>
      <div class="heart-float" style="left: 75%; animation-delay: 1s; animation-duration: 27s">
        💝
      </div>
      <div class="heart-float" style="left: 85%; animation-delay: 7s; animation-duration: 21s">
        💗
      </div>
      <div class="heart-float" style="left: 95%; animation-delay: 5s; animation-duration: 29s">
        💓
      </div>

      <!-- Segunda camada de corações menores -->
      <div
        class="heart-float-small"
        style="left: 10%; animation-delay: 1s; animation-duration: 18s"
      >
        💕
      </div>
      <div
        class="heart-float-small"
        style="left: 20%; animation-delay: 4s; animation-duration: 20s"
      >
        💖
      </div>
      <div
        class="heart-float-small"
        style="left: 40%; animation-delay: 7s; animation-duration: 19s"
      >
        💝
      </div>
      <div
        class="heart-float-small"
        style="left: 60%; animation-delay: 3s; animation-duration: 22s"
      >
        💗
      </div>
      <div
        class="heart-float-small"
        style="left: 80%; animation-delay: 9s; animation-duration: 17s"
      >
        💓
      </div>

      <!-- Terceira camada de corações grandes -->
      <div
        class="heart-float-large"
        style="left: 12%; animation-delay: 2s; animation-duration: 30s"
      >
        💕
      </div>
      <div
        class="heart-float-large"
        style="left: 38%; animation-delay: 5s; animation-duration: 32s"
      >
        💖
      </div>
      <div
        class="heart-float-large"
        style="left: 62%; animation-delay: 8s; animation-duration: 31s"
      >
        💝
      </div>
      <div
        class="heart-float-large"
        style="left: 88%; animation-delay: 11s; animation-duration: 33s"
      >
        💗
      </div>
    </div>
  </div>
</template>

<style scoped>
.heart-float {
  position: absolute;
  bottom: -100px;
  font-size: 2.5rem;
  opacity: 0;
  animation: float-up 20s infinite ease-in-out;
  filter: drop-shadow(0 0 10px rgba(255, 182, 193, 0.5));
}

.heart-float-small {
  position: absolute;
  bottom: -80px;
  font-size: 1.5rem;
  opacity: 0;
  animation: float-up 18s infinite ease-in-out;
  filter: drop-shadow(0 0 8px rgba(255, 182, 193, 0.4));
}

.heart-float-large {
  position: absolute;
  bottom: -120px;
  font-size: 3.5rem;
  opacity: 0;
  animation: float-up 30s infinite ease-in-out;
  filter: drop-shadow(0 0 15px rgba(255, 182, 193, 0.6));
}

@keyframes float-up {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  20% {
    transform: translateY(-20vh) translateX(10px) rotate(45deg) scale(1);
    opacity: 0.4;
  }
  40% {
    transform: translateY(-40vh) translateX(-15px) rotate(90deg) scale(1.1);
    opacity: 0.35;
  }
  60% {
    transform: translateY(-60vh) translateX(20px) rotate(180deg) scale(0.9);
    opacity: 0.3;
  }
  80% {
    transform: translateY(-80vh) translateX(-10px) rotate(270deg) scale(1);
    opacity: 0.2;
  }
  100% {
    transform: translateY(-110vh) translateX(0) rotate(360deg) scale(0.8);
    opacity: 0;
  }
}
</style>
