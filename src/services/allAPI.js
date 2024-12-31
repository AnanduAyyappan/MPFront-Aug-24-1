import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


//save videoAPI - post http request, add component
export const saveVideoAPI= async (videoDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/uploadVideos`,videoDetails)
}

//getAllVideosAPI-get method,called view component,when component displays in browser inside its useEffect Hook
export const getAllVideosAPI= async (videoDetails)=>{
    return await commonAPI(`GET`,`${SERVERURL}/uploadVideos`,"")
}

//save history-saveHistoryAPI localhost:3000/history
export const saveHistoryAPI= async (historyDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/history`,historyDetails)
}
//get history from localhost:3000
export const getAllHistoryAPI=async () =>{
    return await commonAPI(`GET`,`${SERVERURL}/history`,"")

}

//deleteHistoryAPI - delete methode to http://localhost:3000/history/id called by history when clicked on button
 export const deleteHistoryAPI=async(id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/history/${id}`,{})
 }

 //delete the videocards

 export const removeVideoAPI = async(id)=>{
    return await commonAPI('DELETE',`${SERVERURL}/uploadVideos/${id}`,{})
 }

 export const saveCategoryAPI= async (categoryDetails)=>{
    return await commonAPI(`POST`,`${SERVERURL}/categories`,categoryDetails)
}

//getAllCategoryAPI - get method,http://localhost:/categories called category component, when
export const getAllCategoryAPI=async () =>{
    return await commonAPI(`GET`,`${SERVERURL}/categories`,{})

}

//delete categories given in the list

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI(`DELETE`,`${SERVERURL}/categories/${id}`,{})
}

//update categories given in the list

export const updateCategoryAPI=async(categoryDetails)=>{
    return await commonAPI(`PUT`,`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}
