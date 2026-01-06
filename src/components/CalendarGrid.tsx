import { useState } from "react"
import DayCell from "./DayCell"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

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
        <div>
            <Select value={month.toString()} onValueChange={(value) => setMonth(parseInt(value))}>
                <SelectTrigger className="w-[180px] mb-4">
                    <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                    {months.map((monthName, index) => (
                        <SelectItem key={index} value={index.toString()}>
                            {monthName}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="grid grid-cols-7 gap-1 max-w-2xl">
                {dates.map((date) => (
                    <DayCell key={date.toISOString()} date={date} />
                ))}
            </div>
        </div>
    )
}

export default CalendarGrid