import { Dispatch, SetStateAction } from 'react';

const Form = (props: {setValue: Dispatch<SetStateAction<string>>}) => {
    const {setValue} = props;
    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <form>
            <div>
                <input type="text" onChange={onChangeValue} />
            </div>
        </form>
    )
}
export default Form;