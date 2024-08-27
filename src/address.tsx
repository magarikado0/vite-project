
type Props = {
    town: string
    city: string
    prefec: string
}

const Address = (props: Props) => {
    if (props.prefec && props.city && props.town) {
        return (
            <div className="bg-white m-5 rounded-lg p-2 w-4/5">
                <div className="flex">
                    <p className="font-bold">都道府県：</p>
                    <p>{props.prefec}</p>
                </div>
                <div className="flex">
                    <p className="font-bold">市区町村：</p>
                    <p>{props.city}</p>
                </div>
                <div className="flex">
                    <p className="font-bold">町域：</p>
                    <p>{props.town}</p>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }

}
export default Address;