import { create } from 'zustand'

const useStore = create((set) => ({
  xp: Number(localStorage.getItem('xp')) || 0,

  level: Number(localStorage.getItem('level')) || 1,

  solvedChallenges: JSON.parse(
    localStorage.getItem('solvedChallenges') || '[]'
  ),

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
    }),

  logout: () => {
    localStorage.removeItem('token')
  }
}))

export default useStore
