
export const getServices = async () => {
    
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/get-all`)
        const data = await res.json()
        return data;
    } catch (error) {
        return []
    }
}
export const getServiceDetails = async (id) => {
   
    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`)
        const data = await res.json()
        return data;
    } catch (error) {
        return {}
    }
}