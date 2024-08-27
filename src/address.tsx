
type Props = {
    town: string
    city: string
    prefec: string
}

const Address = (props: Props) => {
    return (
        <>
        <div>
            <p>{props.prefec && "都道府県："+props.prefec}</p>
            <p>{props.city && "市区町村："+props.city}</p>
            <p>{props.town && "町域："+props.town}</p>
        </div>
        </>
    )
}
export default Address;