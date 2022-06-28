import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './AllOrder.css'
import AllorderModal from './AllorderModal';
import EditModal from './EditModal';


const AllOrders = () => {

    const [employs, setEmploys] = useState([]);
    const [editEmploy, setEditEmploy] = useState([]);
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 2;
    const handlePageChange = (data) => {
        setPage(data.selected);
    }




    useEffect(() => {
        fetch(`http://localhost:5000/allEmploys?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setEmploys(data.allEmploys)
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page]);



    const handleLabDeleteRequest = id => {
        const proceed = window.confirm('Are you sure you want to Delete Employ')
        if (proceed) {
            const url = `http://localhost:5000/deleteEmploy/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                // if you want you can ignore this 

                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = employs?.filter(employ => employ._id !== id);
                        setEmploys(remaining);
                        alert('Employ Deleted')

                    }
                })

            // if you want you can ignore this 
        }
    }

    const handleEditEmploy = (e) => {
        setEditEmploy(e)
    }


    return (
        <>
            < div className="container all-order-container" >
                <div className="text-center pb-3">
                    <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{setEmploys.length}</span>  Products....!!!!!</h1>
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
                            {/* <th >Hobby</th> */}
                            <th >ACTION</th>

                        </tr>
                    </thead>

                    <tbody >
                        {employs?.map((employ, index) => (
                            <tr key={employ._id} role="row" style={{ border: "2px solid gray" }} >
                                <th scope="row">{index + 1}</th>
                                <td>{employ.Title}</td>
                                <td>{employ.FirstName}</td>
                                {/* <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td> */}
                                <td>{employ.LastName}</td>
                                <td>{employ.Email}</td>
                                <td>{employ.MobileNumber}</td>
                                <td>{employ.date}</td>
                                {/* <td>{employ?.hobby?.map((hobby) => (
                                    <span>{hobby}</span>
                                ))}</td> */}
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleLabDeleteRequest(employ._id)}> DELETE</button>

                                    <button data-bs-toggle="modal"
                                        data-bs-target="#EditModal"
                                        onClick={() => handleEditEmploy(employ)}
                                        className="btn btn-danger">Edit</button>


                                </td>
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
                        ))}
                    </tbody>


                </table>

                <div className="d-flex mt-5">
                    <div className='mx-auto'>


                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />

                    </div>
                </div>



            </div >


            <AllorderModal
                employs={employs}
                setEmploys={setEmploys}
            >

            </AllorderModal>

            <EditModal
                editEmploy={editEmploy}
                employs={employs}
                key={employs._id}
                setEmploys={setEmploys}
            ></EditModal>


        </>









    );
};


export default AllOrders;