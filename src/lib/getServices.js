
export const getServices  = async () =>{
    const res = await fetch("http://localhost:3000/api/services/get-all")
    const data = await res.json()
    return data;
}
export const getServiceDetails  = async (id) =>{
    const res = await fetch(`http://localhost:3000/api/services/${id}`)
    const data = await res.json()
    return data;
}