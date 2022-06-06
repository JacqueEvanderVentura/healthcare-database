export default function newPatient(
  identification: string,
  fullname: string,
  bloodType: string,
  phone: string,
  email: string
) {
  return {
    id: identification,
    fullname: fullname,
    bloodType: bloodType,
    phone: phone,
    email: email,
  };
}
