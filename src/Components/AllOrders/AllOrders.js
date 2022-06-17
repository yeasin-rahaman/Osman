import React, { useEffect, useState } from 'react';
import './AllOrder.css'
import AllorderModal from './AllorderModal';


const AllOrders = () => {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`https://secure-coast-41570.herokuapp.com/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return (

        <>
            < div className="container all-order-container" >
                <div className="text-center pb-3">
                    <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{orders.length}</span>  Products....!!!!!</h1>
                </div>

                <table className="table table-dark" style={{ width: "100%" }}>
                    <thead  >
                        <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>

                            <th >Number</th>
                            <th >Product</th>
                            <th >Image</th>
                            <th >Price</th>
                            <th >User Email</th>
                            <th >User Address</th>
                            <th >Status</th>
                            <th >Update</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody key={order._id}>
                            <tr role="row" style={{ border: "2px solid gray" }} >
                                <th scope="row">{index + 1}</th>
                                <td>{order.name}</td>
                                <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                                <td>{order.price}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>
                                    <div >
                                        <select className="pending p-2 ">
                                            <option defaultValue={order.status}>{order.status}</option>
                                            <option defaultValue="approved">approved</option>
                                            <option defaultValue="pending">Delivered</option>
                                            <option defaultValue="pending">Cancelled</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <button data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                        className="btn btn-danger">update</button>
                                </td>
                            </tr>
                        </tbody>

                    ))}
                </table>


            </div >


            <AllorderModal>

            </AllorderModal>


        </>









    );
};


export default AllOrders;