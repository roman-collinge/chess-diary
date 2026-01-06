import CalendarGrid from "./components/CalendarGrid"
import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Chess Diary</h1>
      <Button className="mb-6">Test Button</Button>
      <CalendarGrid />
    </div>
  )
}

export default App