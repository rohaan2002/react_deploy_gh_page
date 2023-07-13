// this one function is for CRUD operation, this try catch block makes sure that the JSON server API data and the setItem (usestate) data is in sync 
const apiRequest = async (url='',optionsObj= null, errMsg= null)=>{
    try{
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error ('Please reload the app');
    }
    catch(err){
        errMsg= err.message;
    } finally{
        return errMsg;
    }
}
export default apiRequest;