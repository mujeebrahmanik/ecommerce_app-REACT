import axios from "axios";

const BASE_URL='https://fakestoreapi.com'

export const getAllproducts=async()=>{
    const responce=await axios.get(`${BASE_URL}/products`);
    return responce.data;
}


export const getproductDetail=async(id)=>{
    const responce=await axios.get(`${BASE_URL}/products/${id}`)
    return responce.data;
}


export const getproductImage=async(id)=>{
    const responce=await axios.get(`${BASE_URL}/products/${id}/image`)
    return responce.data;
}