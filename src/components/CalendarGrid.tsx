import { useState } from "react"
import DayCell from "./DayCell"

const generateDates = (year: number, month: number): Date[] => {
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return Array.from(
        { length: daysInMonth },
        (_, i) =>
            new Date(year, month, i + 1)
    )
}

function CalendarGrid() {
    const [year, setYear] = useState(2026)
    const [month, setMonth] = useState(0) // 0 = January
    const dates = generateDates(year, month)
    return (
        <div className="grid grid-cols-7 gap-1 max-w-2xl">
            {dates.map((date) => (
                <DayCell key={date.toISOString()} date={date} />
            ))}
        </div>
    )
}

export default CalendarGrid