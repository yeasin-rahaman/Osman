import React from 'react';
import { useForm } from 'react-hook-form';

const AllorderModal = ({ employs, setEmploys }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`http://localhost:5000/addEmploys`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (!result.error) {
                    const modifiedEmployes = [...employs]
                    const document = { ...data, _id: result.insertedId }
                    modifiedEmployes.push(document)
                    setEmploys(modifiedEmployes)
                    alert(
                        'Employ Posted Successfully.',
                    )

                }
                else {
                    alert(
                        `${result.error}`
                    )
                }
                reset()
            });

        console.log(data)
    };


    return (
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => reset()}></button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-12 ">
                            <div class="w-100 mx-auto">

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label for="exampleInputPassword1">First Name</label>

                                    <input class="form-control" type="text" placeholder="First Name" {...register("FirstName", { required: true, maxLength: 80 })} />

                                    {errors.FirstName && errors.FirstName.type === "required" && <span className=' text-danger'>This is required</span>}
                                    {errors.FirstName && errors.FirstName.type === "maxLength" && <span >Max length exceeded</span>}

                                    <br />
                                    <label for="exampleInputPassword1">Last Name</label>
                                    <input class="form-control" type="text" placeholder="Last Name" {...register("LastName", { required: true, maxLength: 100 })} />



                                    {errors.LastName && errors.LastName.type === "required" && <span className="text-danger">This is required</span>}
                                    {errors.LastName && errors.LastName.type === "maxLength" && <span className="text-danger">Max length exceeded</span>}



                                    <br />
                                    <label for="exampleInputPassword1">Email Name</label>
                                    <input class="form-control" type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                                    {errors.Email && errors.Email.type === "required" && <span className="text-danger">This is required</span>}
                                    {errors.Email && errors.Email.type === "pattern" && <span className="text-danger">Wrong Pattern of Email </span>}


                                    <br />

                                    <label for="exampleInputPassword1">Mobile Number</label>
                                    <input class="form-control" type="tel" placeholder="Mobile number" {...register("MobileNumber", { required: true, minLength: 6, maxLength: 12 })} />


                                    {errors.MobileNumber && errors.MobileNumber.type === "required" && <span className="text-danger">This is required</span>}


                                    {errors.MobileNumber && errors.MobileNumber.type === "maxLength" && <span className="text-danger">Max length exceeded</span>}
                                    {errors.name && errors.MobileNumber.type === "minLength" && <span className="text-danger">minLength length exceeded</span>}

                                    <br />
                                    <label for="exampleInputPassword1">Title</label>
                                    <select class="form-control" {...register("Title", { required: true })}>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                    {errors.Title && errors.Title.type === "required" && <span className="text-danger">This is required</span>}
                                    <br />

                                    {/* <h6>Hobby</h6>
                                    <label for="exampleInputPassword1">Games</label>
                                    <input  {...register("hobby", { required: true })} type="checkbox" value="Games" />
                                    <label for="exampleInputPassword1">Sports</label>
                                    <input  {...register("hobby", { required: true })} type="checkbox" value="sports" />
                                    <label for="exampleInputPassword1">Movies</label>
                                    <input  {...register("hobby", { required: true })} type="checkbox" value="movies" /> */}
                                    <h6>Developer</h6>
                                    <label for="exampleInputPassword1">Yes</label>
                                    <input  {...register("Developer", { required: true })} type="radio" value="Yes" />

                                    <label for="exampleInputPassword1">No</label>
                                    <input {...register("Developer", { required: true })} type="radio" value="No" />
                                    <br />
                                    {errors.hobby && errors.hobby.type === "required" && <span className="text-danger">This is required</span>}

                                    <br />

                                    <label for="exampleInputPassword1">Date</label>
                                    <input {...register("date", { required: true })} type="date" />
                                    {errors.date && errors.date.type === "required" && <span className="text-danger">This is required</span>}
                                    <input type="submit" />
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllorderModal;