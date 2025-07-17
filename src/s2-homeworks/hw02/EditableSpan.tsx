import {ChangeEvent, useState} from 'react';

type Props = {
    oldName: string;
    onChangeF: (newName: string) => void;
};
export const EditableSpan = ({oldName,onChangeF}: Props) => {
    const [isEditable, setIsEditable] = useState(false);
    const [newTitle, setNewTitle] = useState(oldName);

    const onEdit = () => {
        setIsEditable(true);
    }

    const offEdit = () => {
        setIsEditable(false);
    }

    const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value);
        onChangeF(newTitle)

    }
    return (
        isEditable ?
        <input value={newTitle} onChange={updateTitle} autoFocus onBlur={offEdit}/> :
        <span onDoubleClick={onEdit}>{oldName}</span>
    );
};