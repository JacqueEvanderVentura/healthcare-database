export function addPatient(identification:string, first_name:string,  last_name:string,  blood_type:string,  phone:string,  email:string){
    return {
        identification: identification,
        first_name: first_name,
        last_name: last_name,
        blood_type: blood_type,
        phone: phone,
        email: email
    }
}