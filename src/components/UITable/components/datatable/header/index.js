import React , {useState} from "react";
import selectAllCheck from 'Assets/select-all-check.svg';
import selectAllUnCheck from 'Assets/select-all-uncheck.svg';
const Header = props => {
    const renderTableHeader = () => {
        if(props && props.columns && Array.isArray(props.columns) && props.columns) {
            return props.columns.map((key, index) => {
                if(key.toLowerCase() === 'selectall') {
                    if(props.selectAll) {
                        return (
                            <th key={index}>
                                <img src={selectAllCheck} onClick={() => props.onSelectAll(false)} />
                            </th>
                        );
                    } return (
                        <th key={index}>
                            <img src={selectAllUnCheck} onClick={() => props.onSelectAll(true)} />
                        </th>
                    )
                }
                return <th key={index}>{key.toUpperCase()}</th>
            })
        } return '';
    }
    return(
        <thead>
            <tr>
                {renderTableHeader()}
            </tr>
        </thead>
    )
}
export default Header;