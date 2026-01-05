import DayCell from "./components/DayCell"
import { Button } from "./components/ui/button"

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold">Chess Diary</h1>
      <Button>Test Button</Button>
      <DayCell date="05/01/2026" />
    </>
  )
}

export default App