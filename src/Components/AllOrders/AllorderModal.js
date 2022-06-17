import React from 'react';
import { useForm } from 'react-hook-form';

const AllorderModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


    return (
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class=" col-12 ">
                            <div class="w-100 mx-auto">

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label for="exampleInputPassword1">First Name</label>
                                    <input class="form-control" type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                                    <label for="exampleInputPassword1">Last Name</label>
                                    <input class="form-control" type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                                    <label for="exampleInputPassword1">Email Name</label>
                                    <input class="form-control" type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                    <label for="exampleInputPassword1">Mobile Number</label>
                                    <input class="form-control" type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />

                                    <label for="exampleInputPassword1">Title</label>
                                    <select class="form-control" {...register("Title", { required: true })}>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                    <label for="exampleInputPassword1">Yes</label>
                                    <input  {...register("Developer", { required: true })} type="radio" value="Yes" />
                                    <label for="exampleInputPassword1">No</label>
                                    <input {...register("Developer", { required: true })} type="radio" value="No" />

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