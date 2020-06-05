export const decodeVin = async (vin, year) => {
 
 try {
    const result = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json&modelyear=${year}`)

    
    if (!result.ok) {
        throw new Error(`Problem received status code of ${result.status}`)
    }
        const response = await result.json() 
       // console.log(response.Results)
    return response.Results
    } catch (error) {
    window.alert(`Server Error. It's not your fault the error is: ${error}`)
    }

}

   
   
   const buildCar = async (vinDecodeResponse) => {
   
   const responseData = await vinDecodeResponse
   
   const initialCar = responseData.reduce((carData, item) => {
   
    
     if(item.Variable === carData[item.Variable]) {
       carData[item.Variable] = item.Value
     }
   
    
     return carData
   },{
     "Model Year": "Model Year", 
     "Make": "Make", 
     "Model": "Model", 
     "Trim": "Trim",
    "Series": "Series",
     "Displacement (L)": "Displacement (L)",
     "Engine Brake (hp)": "Engine Brake (hp)",
     })
   
   console.log(initialCar)
   
   
   
   }