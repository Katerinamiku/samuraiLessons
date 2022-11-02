import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusHooks = (props: ProfileStatusType) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false);
//синхронизация состояния статуса локального и общего
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status.length ? props.status : 'Meow something'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}></input>
                </div>
            }
        </div>

    )

}

