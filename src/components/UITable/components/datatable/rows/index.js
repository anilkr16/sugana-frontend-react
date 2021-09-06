import React, {useState, useEffect} from 'react';
import deleteIcon from 'Assets/delete-icon.svg';
import editIcon from 'Assets/edit-icon.svg';
import selectAllCheck from 'Assets/select-all-check.svg';
import selectAllUnCheck from 'Assets/select-all-uncheck.svg';

const RenderRow = props => {
    const [state, setState] = useState({});
    const [editable, setInEditMode] = useState({
        isEditable: false,
        rowKey: null
    });
    useEffect(() => {
        initRowDataState();
    }, [])
    const initRowDataState = () => {
        if(props && props.keys && Array.isArray(props.keys) && props.keys) {
            const stateObject = {}
            props.keys.map(key => {
                stateObject[key] = '';
            })
            setState(stateObject);
        } else {
            return {}
        }
    }
    const getRowState = rowData => {
        if(rowData && rowData && Object.keys(rowData).length) {
            const updatedStateObject = {}
            props.keys.map(key => {
                updatedStateObject[key] = rowData[key];
            })
            return updatedStateObject;
        } else {
            return {}
        }
    }
    const updateRow = (rowData, field, newValue) => {
        const tableData = props.selectPageData;
        let index = tableData.findIndex(elem => elem.id === rowData.id);
        if (index >= 0) {
            setState(prevState => ({ ...prevState, [field]: newValue}));
            tableData[index][field] = newValue;
            props.setSelectPageData(tableData); 
        } else {
            disableEdit()
        }
    }
    const editTemplate = (rowData, field) =>  {
        if(editable.isEditable && editable.rowKey === rowData.id) {
            return (
                <input value={state && state[field] ? state[field] : ''}
                    onInput={event => updateRow(rowData, field, event.target.value)}
                    onBlur={() => disableEdit()}
                />
            )
        } return rowData[field];
    }
    const handleEditRow = props => {
        setState(getRowState(props.rowData));
        setInEditMode({isEditable: true, rowKey: props.id})
    }
    const disableEdit = () => {
        setInEditMode({isEditable: false, rowKey: null});
    }
    const selectAllTemplate = (id, key) => {
        if(props.selectedKeys && Array.isArray(props.selectedKeys) && props.selectedKeys.length &&
            props.selectedKeys.includes(id)) {
            return (
                <td className={highlightRow() ? 'highlight-row' : ''} key={key}>
                    <img src={selectAllCheck} onClick={() => props.onSelect(props.id)} />
                </td>
            );
        } return (
            <td className={highlightRow() ? 'highlight-row' : ''} key={key}>
                <img src={selectAllUnCheck} onClick={() => props.onSelect(props.id)} />
            </td>
        )
    }
    const highlightRow = () => {
        if(props && props.selectedKeys && props.selectedKeys.length) {
            return props.selectedKeys.includes(props.id);
        } return false;
    }
    return props.keys.map((key, index) => {
        if (key.toLowerCase() === 'id') {
            return (
                <td className={highlightRow() ? 'highlight-row': ''} key={index}>{props.rowData[key]}</td>
            )
        }
        if (key.toLowerCase() === 'action') {
            return(
                <td className={highlightRow() ? 'highlight-row' : ''} key={index}>
                    <img src={editIcon} onClick={() => handleEditRow(props)}
                        onBlur={() => disableEdit()}
                    />
                    <img src={deleteIcon} onClick={() => props.deleteRow(props.id)}></img>
                </td>
            )
        } if(key.toLowerCase() === 'selectall') {
            return selectAllTemplate(props.id, index);
        }
        return <td className={highlightRow() ? 'highlight-row': ''}
                key={index}>{editTemplate(props.rowData, key)}
            </td>
    })
}

export default RenderRow;