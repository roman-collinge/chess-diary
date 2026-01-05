interface DayCellProps {
    date: string
}

function DayCell(props: DayCellProps) {
    return (
        <>
            <p>This is my day cell component.</p>
            <p>My date prop says {props.date}</p>
        </>
    )
}

export default DayCell