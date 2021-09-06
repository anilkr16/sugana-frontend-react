import React, { useState } from 'react'
import Select from 'react-select';
const AddUserForm = props => {
	const initialFormState = {associateName: '', phone: '', address: '', specializations: []}
	const [user, setUser] = useState(initialFormState)
	const [specializations, setSpecializationsOption] = useState([])
	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}
	const handlespecializationTag = specializations => {
		setUser({...user, ['specializations']: specializations})
		setSpecializationsOption(specializations)
	}
	const enableAddButton = () => {
		if(user && Object.keys(user).length) {
			for(let value in user) {
				if(value.trim().length) {
					return false;
				}
			}
		}
		return true;
	}
	return (
		<form
			onSubmit={event => {
                event.preventDefault()
				props.addUser(user)
				setUser(initialFormState)
				setSpecializationsOption([])
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
			<button className='' disabled={enableAddButton()}>ADD</button>
		</form>
	)
}
export default AddUserForm