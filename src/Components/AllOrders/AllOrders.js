import React, { useEffect, useState } from 'react';
import './AllOrder.css'
import AllorderModal from './AllorderModal';


const AllOrders = () => {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/getEmploys`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return (
        <>
            < div className="container all-order-container" >
                <div className="text-center pb-3">
                    <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{orders.length}</span>  Products....!!!!!</h1>
                </div>

                <button data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    className="btn btn-danger">New</button>
                <table className="table table-dark" style={{ width: "100%" }}>

                    <thead  >
                        <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>

                            <th >Number</th>
                            <th >Title</th>
                            {/* <th >Image</th> */}
                            <th >First Name</th>
                            <th >Last Name</th>
                            <th >User Email</th>
                            <th >User Mobile Number</th>
                            <th >Date</th>

                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody key={order._id}>
                            <tr role="row" style={{ border: "2px solid gray" }} >
                                <th scope="row">{index + 1}</th>
                                <td>{order.Title}</td>
                                <td>{order.FirstName}</td>
                                {/* <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td> */}
                                <td>{order.LastName}</td>
                                <td>{order.Email}</td>
                                <td>{order.MobileNumber}</td>
                                <td>{order.date}</td>
                                {/* <td>
                                    <div >
                                        <select className="pending p-2 ">
                                            <option defaultValue={order.status}>{order.status}</option>
                                            <option defaultValue="approved">approved</option>
                                            <option defaultValue="pending">Delivered</option>
                                            <option defaultValue="pending">Cancelled</option>
                                        </select>
                                    </div>
                                </td> */}

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