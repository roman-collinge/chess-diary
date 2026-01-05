interface DayCellProps {
    date: Date
}

function DayCell(props: DayCellProps) {
    const dayNumber = props.date.getDate()
    return (
        <>
            <p>This is my day cell component.</p>
            <p>Day Number: {dayNumber}</p>
        </>
    )
}

export default DayCell