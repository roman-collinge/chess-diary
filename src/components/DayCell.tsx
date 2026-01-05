interface DayCellProps {
    date: Date
}

function DayCell(props: DayCellProps) {
    const dayNumber = props.date.getDate()
    return (
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            {dayNumber}
        </div>
    )
}

export default DayCell