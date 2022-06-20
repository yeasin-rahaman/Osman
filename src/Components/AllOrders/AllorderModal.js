import React from 'react';
import { useForm } from 'react-hook-form';

const AllorderModal = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`http://localhost:5000/addEmploys`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                alert(
                    'Employ Posted Successfully.',
                )
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
                                    {errors.FirstName && <span>This field is required</span>}


                                    <label for="exampleInputPassword1">Last Name</label>
                                    <input class="form-control" type="text" placeholder="Last Name" {...register("LastName", { required: true, maxLength: 100 })} />
                                    <label for="exampleInputPassword1">Email Name</label>
                                    <input class="form-control" type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    <label for="exampleInputPassword1">Mobile Number</label>
                                    <input class="form-control" type="tel" placeholder="Mobile number" {...register("MobileNumber", { required: true, minLength: 6, maxLength: 12 })} />

                                    <label for="exampleInputPassword1">Title</label>
                                    <select class="form-control" {...register("Title", { required: true })}>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                    <h6>Hobby</h6>
                                    <label for="exampleInputPassword1">Games</label>
                                    <input  {...register("hobby", { required: true })} type="checkbox" value="Games" />
                                    <label for="exampleInputPassword1">Sports</label>
                                    <input  {...register("hobby", { required: true })} type="checkbox" value="sports" />
                                    <label for="exampleInputPassword1">Movies</label>
                                    <input  {...register("hobby", { required: true })} type="checkbox" value="movies" />
                                    <h6>Developer</h6>
                                    <label for="exampleInputPassword1">Yes</label>
                                    <input  {...register("Developer", { required: true })} type="radio" value="Yes" />

                                    <label for="exampleInputPassword1">No</label>
                                    <input {...register("Developer", { required: true })} type="radio" value="No" />
                                    <br />
                                    <label for="exampleInputPassword1">Date</label>
                                    <input {...register("date", { required: true })} type="date" />

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