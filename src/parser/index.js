export const parseUserResponse = data => {
    let result = [];
    if(data && Array.isArray(data) && data.length) {
        for(let i=0; i<data.length; i++) {
            const obj = {
                ...data[i],
                _id: data[i]._id || null,
                associateName: data[i].associateName || null,
                phone: data[i].phone || null,
                address: data[i].address || null,
                specializations: parseSpecializationResponse(data[i].specializations)
            }
            result.push(obj);
        } return result;
    } return result;
}

export const parseSpecializationResponse = data => {
    let result = [];
    if(data && Array.isArray(data) && data.length) {
        for(let i=0; i<data.length; i++) {
            const obj = {
                ...data[i],
                value: data[i]._id || null,
                label: data[i].specializationName || null
            }
            result.push(obj);
        } return result;
    } return result;
}