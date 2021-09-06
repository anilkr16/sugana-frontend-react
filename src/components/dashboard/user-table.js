import React from 'react'
import deleteIcon from 'Assets/delete-icon.svg';
import editIcon from 'Assets/edit-icon.svg';
const UserTable = props => (
  <table id='datatable'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Address</th>
        <th>specializations</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user._id}>
            <td>{user.associateName}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>{user.specializations.map(ele => ' ' + ele.specializationName.toString())}</td>
            <td>
                <img src={editIcon} onClick={() => {
                    props.setEditMode(true)
                    props.activeEditRow(user)
                  }}
                  onBlur={() => {}}
                />
                <img src={deleteIcon} onClick={() => {}}></img>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable