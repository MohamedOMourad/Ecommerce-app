import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios"
import { getAllProducts } from "redux/product";
import { Order, Product } from "types";

const API = axios.create({ baseURL: 'http://localhost:3000/api/' })

export const getProducts = async (dispatch: Dispatch) => {
    const res = await API.get('product');
    const data: Product[] = await res.data;
    dispatch(getAllProducts(data))

}
export const addOrder = async (values: Order) => {
    console.log(values)
    await API.post('order', values);
} 