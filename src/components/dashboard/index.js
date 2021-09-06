import React, {useState, useEffect} from "react";
import {getService, postService, getAllService} from "../../api-service";
import {constants} from "../../constants";
import UserTable from "./user-table";
import {parseSpecializationResponse, parseUserResponse} from "../../parser";
import AddUserForm from "./user-form";
import axios from "axios";
import EditUserForm from "./user-edit-from";
const Index = () => {
   const [users, setUsers] = useState([]);
   const [specializations, setSpecializations] = useState([]);
   const [editMode, setEditMode] = useState(false)
   const [editableUser, setEditableUser] = useState({})
   
   const fetchUsers = async () => {
      const url1 = constants.APIConstant.apiUrls.getAssociate
      const url2 = constants.APIConstant.apiUrls.getSpecialization
      Promise.all([getService(url1), getService(url2)]).then(responseArray => {
         if (responseArray && Array.isArray(responseArray) && responseArray.length) {
            const {0: response1, 1: response2} = responseArray;
            if (response1 && response2 && response1.success && response2.success) {
               const usersResponse = parseUserResponse(response1.data)
               const specializationResp = parseSpecializationResponse(response2.data)
               setUsers(usersResponse);
               setSpecializations(specializationResp)
            }
         } else {
            setUsers([]);
            setSpecializations([])
         }
      }).catch(error => {
         setUsers([]);
         setSpecializations([])
      })
   }

   useEffect(() => {
      fetchUsers();
   }, []);

   const addUser = async (newUser) => {
      if(newUser && Object.keys(newUser).length) {
         const ids = newUser.specializations.map(elem => elem._id);
         Object.assign({...newUser, ['specializations']: ids})
         let response = await postService(constants.APIConstant.apiUrls.getAssociate, newUser)
         if (response && response.success) {
            const result = [...users]
            result.push(newUser)
            setUsers(users)
         }
      } return;
   }

   const activeEditRow = user => {
		setEditMode(true)
		setEditableUser(user)
	}

   const updateUser = (id, updatedUser) => {
      setEditMode(false)
		setUsers(users.map(user => (user._id === id ? updatedUser : user)))
   }
   
   return (
      <div>
         <h1 id='title'>Sugana Dashboard</h1>
         <div>
            {editMode ? 
               <>
                  <EditUserForm editableUser={editableUser} specializations={specializations}/>
               </> :
               <>
                  <AddUserForm addUser={addUser} specializations={specializations}/>
               </>
            }
         </div>
         <div>
            {users && Array.isArray(users) && users.length ?
               <UserTable users={users}
                  setEditMode={setEditMode}
                  activeEditRow={activeEditRow}   
               /> : ''
            }
         </div>
      </div>
   )
};

export default Index;