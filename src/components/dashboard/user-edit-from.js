import React, { useState, useEffect } from 'react'
import Select from 'react-select';

const EditUserForm = props => {
  const [user, setUser] = useState(props.editableUser)
	const [specializations, setSpecializationsOption] = useState(props.editableUser.specializations || [])

  useEffect(() => {
      setUser(props.editableUser)
      setSpecializationsOption(props.editableUser.specializations)
    },[props]
  )

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	const handlespecializationTag = specializations => {
		const ids = specializations.map(elem => elem._id);
		setUser({...user, ['specializations']: ids})
		setSpecializationsOption(specializations)
	}
  {console.log(specializations)}
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user._id, user)
      }}
    >
      <input type="text" placeholder='Name' name="associateName" autoComplete="off" value={user.associateName} onChange={handleInputChange} />
      <input type="text" placeholder='Phone' name="phone" autoComplete="off" value={user.phone} onChange={handleInputChange} />
      <input type="text" placeholder='Address' name="address" autoComplete="off" value={user.address} onChange={handleInputChange} />
      <Select className='specializationsTags'
        value={specializations}
        onChange={specializations => handlespecializationTag(specializations)}
        options={props.specializations}
        isMulti={true}
        isSearchable={true}
        placeholder={'Select Specializations...'}
      />
      <button>Update user</button>
      <button onClick={() => props.setEditMode(false)} className="button muted-button">
          Cancel
      </button>
      </form>
  )
}
export default EditUserForm