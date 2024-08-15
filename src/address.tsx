
type Props = {
    town: string
    city: string
    prefec: string
}

const Address = (props: Props) => {
    return (
        <>
        <div>
            <p>{props.prefec}</p>
            <p>{props.city}</p>
            <p>{props.town}</p>
        </div>
        </>
    )
}
export default Address;