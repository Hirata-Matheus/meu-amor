import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Moment {
  id: string
  title: string
  date: string
  message: string
  image?: string
  video?: string
  type: 'memory' | 'love' | 'special'
  whiteBackground?: boolean
}

export const useMomentsStore = defineStore('moments', () => {
  const moments = ref<Moment[]>([
    {
      id: '1',
      title: 'Minha primeira foto sua',
      date: '2025-03-03',
      message:
        'Estavamos no confra alive, você quis descansar um pouco e eu quis apreciar a bela paisagem que estava diante meus olhos 💕',
      image: '/images/Captura de tela de 2025-10-17 10-18-43.png',
      type: 'special',
      whiteBackground: true,
    },
    {
      id: '2',
      title: 'O primeiro dia dos namorados',
      date: '2025-06-13',
      message:
        'Meu primeiro dia dos namorados com a primeira pessoa na qual posso chamar de amor! 📸',
      image: '/images/Captura de tela de 2025-10-17 13-42-39.png',
      type: 'memory',
      whiteBackground: true,
    },
    {
      id: '3',
      title: 'Nossa primeira viagem juntos',
      date: '2025-06-21',
      message:
        'Na incerteza se você conseguiria emendar o feriado e até que aconteceu, fizemos uma viagem incrível à Bertioga. ❤️',
      image: '/images/Captura de tela de 2025-10-17 10-10-10.png',
      type: 'love',
    },
    {
      id: '4',
      title: 'Queimando umas calorias',
      date: '2025-04-23',
      message: 'Um treino fofo mas muito especial contigo xuxuzinho. 💫',
      image: '/images/Captura de tela de 2025-10-17 14-33-01.png',
      type: 'love',
    },
    {
      id: '5',
      title: 'De vez em quando é bom testar o coração',
      date: '2025-05-27',
      message:
        'Nosso primeiro mês de namoro e eu querendo ver se seus batimentos cardíacos tão em dia kkkkkkkk 🎥',
      video: '/videos/WhatsApp Video 2025-10-17 at 13.58.00.mp4',
      type: 'special',
      whiteBackground: true,
    },
    {
      id: '6',
      title: 'Vamos ver umas mimosas?',
      date: '2025-08-03',
      message:
        'Um domingo atípico, acordamos cedo e fomos apreciar uma manhã de domingo com um café e uma bela paisagem! 🌟',
      image: '/images/Captura de tela de 2025-10-17 10-10-27.png',
      type: 'memory',
    },
    {
      id: '7',
      title: 'Como esquecer de Campos do Jordão',
      date: '2025-08-24',
      message:
        'Passando meses aguardando por essa viagem e sem palavras pra descrever como pudemos aproveitar cada momento e nos conectarmos mais 💕',
      image: '/images/Captura de tela de 2025-10-17 10-10-43.png',
      type: 'love',
      whiteBackground: true,
    },
    {
      id: '8',
      title: 'Campos é lindo mas não se compara a ti',
      date: '2025-08-24',
      message:
        'Realmente Campos do Jordão possui uma das belas paisagens que eu já vi, mas nada se compara ao espetáculo da sua beleza minha vida! ✨',
      image: '/images/Captura de tela de 2025-10-17 10-08-42.png',
      type: 'memory',
    },
    {
      id: '9',
      title: 'É muito bom ser surpreendido também',
      date: '2025-08-15',
      message:
        'Fazer surpresas e te fazer feliz é a minha felicidade, e quando você me surpreende é o meu coração que sente mais paz que é você quem quero para o resto da minha vida 😄',
      image: '/images/Captura de tela de 2025-10-17 10-07-21.png',
      type: 'special',
      whiteBackground: true,
    },
    {
      id: '10',
      title: 'Te amo meu benzinho',
      date: '2025-08-24',
      message:
        'Minha vida é mais completa contigo, quero te abraçar e poder te beijar todas as horas do dia, me fogem as palavras para expressar todo o amor que sinto por ti. Te amo infinitamente! 💖',
      image: '/images/Captura de tela de 2025-10-17 10-09-28.png',
      type: 'love',
    },
  ])

  const addMoment = (moment: Omit<Moment, 'id'>) => {
    const newMoment: Moment = {
      ...moment,
      id: Date.now().toString(),
    }
    moments.value.unshift(newMoment)
    saveMoments()
  }

  const removeMoment = (id: string) => {
    moments.value = moments.value.filter((m) => m.id !== id)
    saveMoments()
  }

  const saveMoments = () => {
    localStorage.setItem('romantic-moments', JSON.stringify(moments.value))
  }

  const loadMoments = () => {
    const saved = localStorage.getItem('romantic-moments')
    if (saved) {
      moments.value = JSON.parse(saved)
    }
  }

  // Carregar momentos salvos ao inicializar
  loadMoments()

  return {
    moments,
    addMoment,
    removeMoment,
  }
})
