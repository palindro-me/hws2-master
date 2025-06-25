import {ChangeEvent, useState} from 'react';

type Props = {
    oldName: string
    onChangeF: (newName: string) => void
};
export const CreateItem = ({oldName,onChangeF}: Props) => {
    const [isEditable, setIsEditable] = useState(false);
    const [newName, setNewName] = useState(oldName);

    const onEditable= () => {
        setIsEditable(true);
    }
    const offEditable= () => {
        setIsEditable(false);
    }

const updateName = (e: ChangeEvent<HTMLInputElement>) => {
     setNewName(e.currentTarget.value)
    onChangeF(newName)
}
    return (
        isEditable
            ? <input value={newName} onChange={updateName} autoFocus onBlur={offEditable}/>
            : <span onDoubleClick={onEditable }>{newName}</span>

    );
};