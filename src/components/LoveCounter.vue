<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const startDate = new Date('2025-04-26T00:00:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const totalDays = ref(0)

let intervalId: number | null = null

const updateCounter = () => {
  const now = new Date()
  const diff = now.getTime() - startDate.getTime()
  
  totalDays.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCounter()
  intervalId = window.setInterval(updateCounter, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="love-counter-container mb-12">
    <!-- Card principal do contador -->
    <div class="counter-card">
      <!-- Título -->
      <div class="text-center mb-6">
        <h2 class="text-3xl md:text-4xl font-romantic font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 mb-2">
          Nosso Amor em Números
        </h2>
        <p class="text-pink-300 text-sm md:text-base">
          Desde <span class="font-semibold text-pink-400">26 de Abril de 2025</span>
        </p>
      </div>

      <!-- Contador de dias total -->
      <div class="total-days-badge">
        <div class="total-days-number">
          {{ totalDays }}
        </div>
        <div class="text-pink-300 text-lg font-medium mt-2">
          {{ totalDays === 1 ? 'Dia Juntos' : 'Dias Juntos' }} 💕
        </div>
      </div>

      <!-- Grid do contador detalhado -->
      <div class="counter-grid">
        <!-- Dias -->
        <div class="counter-item">
          <div class="counter-value">{{ days }}</div>
          <div class="counter-label">Dias</div>
          <div class="counter-icon">📅</div>
        </div>

        <!-- Horas -->
        <div class="counter-item">
          <div class="counter-value">{{ hours }}</div>
          <div class="counter-label">Horas</div>
          <div class="counter-icon">⏰</div>
        </div>

        <!-- Minutos -->
        <div class="counter-item">
          <div class="counter-value">{{ minutes }}</div>
          <div class="counter-label">Minutos</div>
          <div class="counter-icon">⏱️</div>
        </div>

        <!-- Segundos -->
        <div class="counter-item">
          <div class="counter-value seconds">{{ seconds }}</div>
          <div class="counter-label">Segundos</div>
          <div class="counter-icon">💓</div>
        </div>
      </div>

      <!-- Mensagem romântica -->
      <div class="romantic-message">
        <p class="text-pink-300 text-center text-sm md:text-base italic">
          "Cada segundo ao seu lado é um presente que guardo no coração" ✨
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.love-counter-container {
  position: relative;
  padding: 0 1rem;
}

.counter-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  padding: 2.5rem 2rem;
  box-shadow: 
    0 20px 60px rgba(255, 105, 180, 0.3),
    0 0 40px rgba(219, 112, 147, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(255, 182, 193, 0.3);
  position: relative;
  overflow: hidden;
}

.counter-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 182, 193, 0.1) 0%, transparent 70%);
  animation: rotate-gradient 10s linear infinite;
}

@keyframes rotate-gradient {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.total-days-badge {
  text-align: center;
  padding: 2rem;
  margin: 2rem 0;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.2) 0%, rgba(255, 105, 180, 0.2) 100%);
  border-radius: 1.5rem;
  border: 2px solid rgba(255, 182, 193, 0.4);
  position: relative;
  z-index: 1;
}

.total-days-number {
  font-size: 3.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .total-days-number {
    font-size: 4.5rem;
  }
}

.counter-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .counter-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.counter-item {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 240, 245, 0.9) 100%);
  border-radius: 1.25rem;
  padding: 1.5rem 1rem;
  text-align: center;
  border: 2px solid rgba(255, 182, 193, 0.3);
  box-shadow: 0 8px 20px rgba(255, 105, 180, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.counter-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.2) 0%, rgba(255, 105, 180, 0.2) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.counter-item:hover::before {
  opacity: 1;
}

.counter-item:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 30px rgba(255, 105, 180, 0.3);
  border-color: rgba(255, 105, 180, 0.5);
}

.counter-value {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.counter-value.seconds {
  animation: pulse-number 1s ease-in-out infinite;
}

@keyframes pulse-number {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.counter-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #9d174d;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.counter-icon {
  font-size: 1.5rem;
  margin-top: 0.5rem;
  animation: bounce-icon 2s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes bounce-icon {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.romantic-message {
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.15) 0%, rgba(255, 105, 180, 0.15) 100%);
  border-radius: 1rem;
  border: 1px solid rgba(255, 182, 193, 0.3);
  position: relative;
  z-index: 1;
}

.romantic-message p {
  position: relative;
  z-index: 1;
}
</style>
