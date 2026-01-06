import DayCell from "./DayCell"
import { mockDates } from "../mockData"

function CalendarGrid() {
    return (
        <div className="grid grid-cols-7 gap-1 max-w-2xl">
            {mockDates.map((date) => (
                <DayCell key={date.toISOString()} date={date} />
            ))}
        </div>
    )
}

export default CalendarGrid