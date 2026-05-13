import { create } from 'zustand'

const savedUser = JSON.parse(localStorage.getItem('user') || 'null')

const useStore = create((set) => ({
  user: savedUser,
  isAuthenticated: !!savedUser || !!localStorage.getItem('token'),

  xp: Number(localStorage.getItem('xp')) || 0,
  level: Number(localStorage.getItem('level')) || 1,

  solvedChallenges: JSON.parse(
    localStorage.getItem('solvedChallenges') || '[]'
  ),

  login: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', userData?.token || 'local-token')

    set({
      user: userData,
      isAuthenticated: true
    })
  },

  register: (userData) => {
    localStorage.setItem('registeredUser', JSON.stringify(userData))
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', userData?.token || 'local-token')

    set({
      user: userData,
      isAuthenticated: true
    })
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    set({
      user: null,
      isAuthenticated: false
    })
  },

  addXP: (amount) =>
    set((state) => {
      const newXP = state.xp + amount

      localStorage.setItem('xp', newXP)

      let newLevel = state.level

      if (newXP >= state.level * 300) {
        newLevel = state.level + 1
        localStorage.setItem('level', newLevel)
      }

      return {
        xp: newXP,
        level: newLevel
      }
    }),

  markChallengeSolved: (id) =>
    set((state) => {
      const updated = [...new Set([...state.solvedChallenges, id])]

      localStorage.setItem(
        'solvedChallenges',
        JSON.stringify(updated)
      )

      return {
        solvedChallenges: updated
      }
    })
}))

export default useStore
