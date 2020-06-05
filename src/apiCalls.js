export const decodeVin = async (vin, year) => {

    
 try {
    const result = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json&modelyear=${year}`)

    
    if (!result.ok) {
        throw new Error(`Problem received status code of ${result.status}`)
    }
        const response = await result.json() 
    //    console.log(response.Results)
    return response.Results
    } catch (error) {
    window.alert(`Server Error. It's not your fault the error is: ${error}`)
    }

}
