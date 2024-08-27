import { Dispatch, SetStateAction } from 'react';

const Form = (props: {setValue: Dispatch<SetStateAction<string>>}) => {
    const {setValue} = props;
    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <form>
            <div>
                <input className='border-gray-500 rounded border-2 w-4/5 p-2 m-5' type="text" onChange={onChangeValue} />
            </div>
        </form>
    )
}
export default Form;