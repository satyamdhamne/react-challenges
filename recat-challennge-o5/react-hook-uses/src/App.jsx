import { useState, useEffect } from 'react'
import './App.css'
import UseEffectHook from './Components/UseEffectHook'
import axios from 'axios'
import UseContextHook from './Components/UseContextHook'
import UseRefHook from './Components/UseRefHook'
import UseReducerHook from './Components/UseReducerHook'
import UseCallbackChallenge from './Components/challenges/UseCallbackChallenge'
import UseMemoChallenge from './Components/challenges/UseMemoChallenge'
import UseLayoutEffectChallenge from './Components/challenges/UseLayoutEffectChallenge'
import UseImperativeHandleChallenge from './Components/challenges/UseImperativeHandleChallenge'
import UseDebugValueChallenge from './Components/challenges/UseDebugValueChallenge'
import UseDeferredValueChallenge from './Components/challenges/UseDeferredValueChallenge'
import UseSyncExternalStoreChallenge from './Components/challenges/UseSyncExternalStoreChallenge'
import UseTransitionChallenge from './Components/challenges/UseTransitionChallenge'

function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedChallenge, setSelectedChallenge] = useState('useCallback');

  const fetchQuote = async () => {
    try {
      setLoading(true)
      const res = await axios.get("https://api.whatdoestrumpthink.com/api/v1/quotes/")
      setQuotes(res.data.messages.non_personalized)
    } catch (error) {
      console.error('Error fetching quote:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const challenges = {
    useCallback: UseCallbackChallenge,
    useMemo: UseMemoChallenge,
    useLayoutEffect: UseLayoutEffectChallenge,
    useImperativeHandle: UseImperativeHandleChallenge,
    useDebugValue: UseDebugValueChallenge,
    useDeferredValue: UseDeferredValueChallenge,
    useSyncExternalStore: UseSyncExternalStoreChallenge,
    useTransition: UseTransitionChallenge,
  };

  const CurrentChallenge = challenges[selectedChallenge];

  return (
    <><div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">React Hooks Challenges</h1>
      
      <div className="mb-6">
        <select
          value={selectedChallenge}
          onChange={(e) => setSelectedChallenge(e.target.value)}
          className="border p-2 rounded"
        >
          {Object.keys(challenges).map(challenge => (
            <option key={challenge} value={challenge}>
              {challenge} Challenge
            </option>
          ))}
        </select>
      </div>

      <div className="border rounded-lg shadow-lg">
        <CurrentChallenge />
      </div>
    </div>
    <UseEffectHook
      quotes={quotes}
      loading={loading}
      onRefresh={fetchQuote} />
      <UseContextHook />
      <UseRefHook />
      <UseReducerHook />
      </>
  )
}

export default App
