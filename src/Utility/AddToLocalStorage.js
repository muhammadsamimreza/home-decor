import { toast } from "react-toastify";

const getToLocalStorage=()=>{
   const storedData = localStorage.getItem("wishlist")
   if(storedData){
    const convert = JSON.parse(storedData);
    return convert
   }else{
    return []
   }
}

const addToLocalStorage=(id)=>{
    const allProduct =getToLocalStorage();
    if(allProduct.includes(id)){
        toast('Already Exist')
    }else{
        allProduct.push(id)
        const stringify = JSON.stringify(allProduct)
        localStorage.setItem("wishlist", stringify)
        toast('Add To Wish List')
    }

}

const deleteWish = (id) =>{
    const saveData = getToLocalStorage()
    if(saveData.includes(id)){
      const updateData =  saveData.filter(data=> data !== id)
        localStorage.setItem("wishlist", JSON.stringify(updateData))
    }
}

export {addToLocalStorage, getToLocalStorage, deleteWish};