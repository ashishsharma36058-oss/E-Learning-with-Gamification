import { useEffect, useState } from 'react'
import api from '../api/client'
import useStore from '../store/useStore'
import ChallengeCard from '../components/ChallengeCard'

const LANG_FILTERS = [
  { key: 'all', label: 'All Languages' },
  { key: 'python', label: '🐍 Python' },
  { key: 'javascript', label: '⚡ JavaScript' },
  { key: 'cpp', label: '⚙️ C++' },
  { key: 'java', label: '☕ Java' },
]

const DIFF_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'easy', label: 'Easy' },
  { key: 'medium', label: 'Medium' },
  { key: 'hard', label: 'Hard' },
  { key: 'boss', label: '👾 Boss' },
]

export default function Play() {
  const { user } = useStore()
  const [challenges, setChallenges] = useState([])
const demoChallenges = [
  // PYTHON
  {
    id: 1,
    title: "Hello World",
    description: "Return Hello World",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 2,
    title: "Sum Two Numbers",
    description: "Return sum of two numbers",
    difficulty: "easy",
    language: "python",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 3,
    title: "Even Number",
    description: "Check even number",
    difficulty: "easy",
    language: "python",
    xp_reward: 120,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 4,
    title: "Palindrome",
    description: "Check palindrome string",
    difficulty: "medium",
    language: "python",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 5,
    title: "Factorial",
    description: "Find factorial",
    difficulty: "medium",
    language: "python",
    xp_reward: 220,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 6,
    title: "Prime Number",
    description: "Check prime number",
    difficulty: "medium",
    language: "python",
    xp_reward: 240,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 7,
    title: "Fibonacci",
    description: "Generate fibonacci sequence",
    difficulty: "medium",
    language: "python",
    xp_reward: 260,
    game_mode: "quest",
    level_req: 1
  },
  {
    id: 8,
    title: "Reverse Array",
    description: "Reverse an array",
    difficulty: "hard",
    language: "python",
    xp_reward: 300,
    game_mode: "quest",
    level_req: 1
  },
  {
    id: 9,
    title: "Merge Sort",
    description: "Implement merge sort",
    difficulty: "hard",
    language: "python",
    xp_reward: 400,
    game_mode: "boss",
    level_req: 1
  },
  {
    id: 10,
    title: "Valid Parentheses",
    description: "Check valid parentheses",
    difficulty: "boss",
    language: "python",
    xp_reward: 500,
    game_mode: "boss",
    level_req: 1
  },

  // JAVASCRIPT
  {
    id: 11,
    title: "Console Hello",
    description: "Print Hello World",
    difficulty: "easy",
    language: "javascript",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 12,
    title: "Add Numbers",
    description: "Return sum",
    difficulty: "easy",
    language: "javascript",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 13,
    title: "Odd Even",
    description: "Check odd even",
    difficulty: "easy",
    language: "javascript",
    xp_reward: 120,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 14,
    title: "Palindrome JS",
    description: "Check palindrome",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 15,
    title: "Factorial JS",
    description: "Find factorial",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 220,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 16,
    title: "Prime JS",
    description: "Check prime",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 240,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 17,
    title: "Array Max",
    description: "Find max element",
    difficulty: "medium",
    language: "javascript",
    xp_reward: 260,
    game_mode: "quest",
    level_req: 1
  },
  {
    id: 18,
    title: "Reverse String",
    description: "Reverse string",
    difficulty: "hard",
    language: "javascript",
    xp_reward: 300,
    game_mode: "quest",
    level_req: 1
  },
  {
    id: 19,
    title: "Bubble Sort",
    description: "Implement bubble sort",
    difficulty: "hard",
    language: "javascript",
    xp_reward: 400,
    game_mode: "boss",
    level_req: 1
  },
  {
    id: 20,
    title: "Stack Problem",
    description: "Implement stack",
    difficulty: "boss",
    language: "javascript",
    xp_reward: 500,
    game_mode: "boss",
    level_req: 1
  },

  // JAVA
  {
    id: 21,
    title: "Java Hello",
    description: "Print Hello",
    difficulty: "easy",
    language: "java",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 22,
    title: "Addition Java",
    description: "Add numbers",
    difficulty: "easy",
    language: "java",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 23,
    title: "Even Java",
    description: "Check even",
    difficulty: "easy",
    language: "java",
    xp_reward: 120,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 24,
    title: "Palindrome Java",
    description: "Check palindrome",
    difficulty: "medium",
    language: "java",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 25,
    title: "Factorial Java",
    description: "Find factorial",
    difficulty: "medium",
    language: "java",
    xp_reward: 220,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 26,
    title: "Prime Java",
    description: "Check prime",
    difficulty: "medium",
    language: "java",
    xp_reward: 240,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 27,
    title: "Array Sum",
    description: "Sum array",
    difficulty: "medium",
    language: "java",
    xp_reward: 260,
    game_mode: "quest",
    level_req: 1
  },
  {
    id: 28,
    title: "Reverse Array Java",
    description: "Reverse array",
    difficulty: "hard",
    language: "java",
    xp_reward: 300,
    game_mode: "quest",
    level_req: 1
  },
  {
    id: 29,
    title: "Binary Search",
    description: "Implement binary search",
    difficulty: "hard",
    language: "java",
    xp_reward: 400,
    game_mode: "boss",
    level_req: 1
  },
  {
    id: 30,
    title: "Queue Java",
    description: "Implement queue",
    difficulty: "boss",
    language: "java",
    xp_reward: 500,
    game_mode: "boss",
    level_req: 1
  },

  // CPP
  {
    id: 31,
    title: "C++ Hello",
    description: "Print Hello",
    difficulty: "easy",
    language: "cpp",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 32,
    title: "Addition C++",
    description: "Add numbers",
    difficulty: "easy",
    language: "cpp",
    xp_reward: 100,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 33,
    title: "Even C++",
    description: "Check even",
    difficulty: "easy",
    language: "cpp",
    xp_reward: 120,
    game_mode: "puzzle",
    level_req: 1
  },
  {
    id: 34,
    title: "Palindrome C++",
    description: "Check palindrome",
    difficulty: "medium",
    language: "cpp",
    xp_reward: 200,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 35,
    title: "Factorial C++",
    description: "Find factorial",
    difficulty: "medium",
    language: "cpp",
    xp_reward: 220,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 36,
    title: "Prime C++",
    description: "Check prime",
    difficulty: "medium",
    language: "cpp",
    xp_reward: 240,
    game_mode: "battle",
    level_req: 1
  },
  {
    id: 37,
    title: "Array Max C++",
    description: "Find max element",
    difficulty: "medium",
    language: "cpp",
    xp_reward: 260,
    game_mode: "quest",
    level_req: 1
  },
  {
    id: 38,
    title: "Reverse String C++",
    description: "Reverse string",
    difficulty: "hard",
    language: "cpp",
    xp_reward: 300,
    game_mode: "quest",
    level_req: 1
  },
  {
    id: 39,
    title: "Quick Sort",
    description: "Implement quick sort",
    difficulty: "hard",
    language: "cpp",
    xp_reward: 400,
    game_mode: "boss",
    level_req: 1
  },
  {
    id: 40,
    title: "Graph BFS",
    description: "Implement BFS",
    difficulty: "boss",
    language: "cpp",
    xp_reward: 500,
    game_mode: "boss",
    level_req: 1
  }
]
  const [progress, setProgress] = useState([])
  const [lang, setLang] = useState('all')
  const [diff, setDiff] = useState('all')
  const [loading, setLoading] = useState(true)

useEffect(() => {
  Promise.all([api.get('/challenges/'), api.get('/progress/my-challenges')])
    .then(([c, p]) => {
      setChallenges(c.data?.length ? c.data : demoChallenges)
      setProgress(p.data || [])
    })
    .catch(() => {
      setChallenges(demoChallenges)
      setProgress([])
    })
    .finally(() => setLoading(false))
}, [])

  const completedIds = new Set(progress.filter(p => p.completed).map(p => p.challenge_id))
  const normalize = (v) => String(v || '').toLowerCase().split('.').pop()

const filtered = challenges.filter(c => {
  const cLang = normalize(c.language)
  const cDiff = normalize(c.difficulty)

  return (lang === 'all' || cLang === lang) && (diff === 'all' || cDiff === diff)
})

  const FilterBtn = ({ val, label, active, onClick }) => (
    <button onClick={onClick} style={{
      padding: '6px 14px', borderRadius: 8,
      fontSize: 12, fontWeight: 600, cursor: 'pointer',
      border: `1px solid ${active ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`,
      background: active ? 'var(--purple-dim)' : 'transparent',
      color: active ? 'var(--purple-light)' : 'var(--text-3)',
      transition: 'all 0.15s',
    }}>{label}</button>
  )

  return (
    <div className="container page-enter">
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ marginBottom: 6 }}>Choose Your Battle</h1>
        <p style={{ fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
          // {challenges.length} challenges available · {completedIds.size} completed
        </p>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
          {LANG_FILTERS.map(f => (
            <FilterBtn key={f.key} val={f.key} label={f.label} active={lang === f.key} onClick={() => setLang(f.key)} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {DIFF_FILTERS.map(f => (
            <FilterBtn key={f.key} val={f.key} label={f.label} active={diff === f.key} onClick={() => setDiff(f.key)} />
          ))}
        </div>
      </div>

      {/* Challenge List */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
          Loading challenges...
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 60 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🤔</div>
          <div style={{ color: 'var(--text-3)', fontSize: 15 }}>No challenges match this filter</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filtered.map(c => (
            <ChallengeCard key={c.id} challenge={c} completed={completedIds.has(c.id)} userLevel={user?.level || 1} />
          ))}
        </div>
      )}
    </div>
  )
}
