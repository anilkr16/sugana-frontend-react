const API_HOST = () => {
    return 'http://localhost:8080/api';
}
export const APIConstant = {
    httpMethods: {
        GET: 'GET',
        GETALL: 'GETALL',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    },
    apiUrls: {
        getSpecialization: `${API_HOST()}/specialization`,
        getAssociate: `${API_HOST()}/associate`,
        addAssociate: '',
        updateAssociate: '',
        deleteAssociate: ''
    }
}