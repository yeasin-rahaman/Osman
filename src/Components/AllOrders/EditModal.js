import React from 'react';
import { useForm } from 'react-hook-form';

const EditModal = ({ editEmploy, employs, setEmploys }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data._id = editEmploy._id
        data.complete = true
        fetch(`http://localhost:5000/updateUser`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())

            .then(({ value }) => {
                console.log('1', employs);
                const docIndex = employs.findIndex(employ => employ._id === value._id);
                const modifiedEmployes = [...employs];
                modifiedEmployes.splice(docIndex, 1, value)
                console.log(value, docIndex);
                setEmploys(modifiedEmployes);
                alert(
                    'Updated the profile Successfully.',
                )

                reset()
            });
    }


    return (
        <div>
            <div class="modal fade" id="EditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="EditModalLabel">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => reset()}></button>
                        </div>
                        <div class="modal-body">
                            <div class=" col-12 ">
                                <div class="w-100 mx-auto">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label for="exampleInputPassword1">First Name</label>

                                        <input defaultValue={editEmploy.FirstName} class="form-control" type="text" placeholder="First Name" {...register("FirstName", {
                                            required: true, maxLength: 80
                                        })} />

                                        <label for="exampleInputPassword1">Last Name</label>
                                        <input defaultValue={editEmploy.LastName} class="form-control" type="text" placeholder="Last Name" {...register("LastName", {
                                            required: true, maxLength: 100
                                        })} />


                                        <label for="exampleInputPassword1">Email Name</label>
                                        <input defaultValue={editEmploy.Email} class="form-control" type="text" placeholder="Email" {...register("Email", {
                                            required: true, pattern: /^\S+@\S+$/i
                                        })} />


                                        <label for="exampleInputPassword1">Mobile Number</label>
                                        <input defaultValue={editEmploy.MobileNumber} class="form-control" type="tel" placeholder="Mobile number" {...register("MobileNumber", {
                                            required: true, minLength: 6, maxLength: 12
                                        })} />

                                        <label for="exampleInputPassword1">Title</label>
                                        <select defaultValue={editEmploy.Title} class="form-control" {...register("Title",)}>
                                            <option value="Mr">Mr</option>
                                            <option value="Mrs">Mrs</option>
                                            <option value="Miss">Miss</option>
                                            <option value="Dr">Dr</option>
                                        </select>

                                        <h6>Developer</h6>

                                        <label defaultValue='Yes' for="exampleInputPassword1">Yes</label>
                                        {editEmploy?.Developer === 'Yes' ?
                                            < input checked {...register("Developer", { required: true })} type="radio" value="Yes" />
                                            :
                                            < input   {...register("Developer", { required: true })} type="radio" value="Yes" />
                                        }

                                        <label for="exampleInputPassword1">No</label>



                                        {editEmploy?.Developer === 'No' ?
                                            < input checked {...register("Developer", { required: true })} type="radio" value="No" />
                                            :
                                            < input   {...register("Developer", { required: true })} type="radio" value="No" />
                                        }

                                        {/* <h6>Hobby</h6>
                                        <label for="exampleInputPassword1">Games</label>
                                        {
                                            editEmploy?.hobby[0] === 'Games' ?

                                                <input checked {...register("hobby", { required: true })} type="checkbox" value="Games" /> :
                                                <input {...register("hobby", { required: true })} type="checkbox" value="Games" />
                                        }

                                        <label for="exampleInputPassword1">Sports</label>

                                        {
                                            editEmploy.hobby[0] === 'sports' ?

                                                <input checked  {...register("hobby", { required: true })} type="checkbox" value="sports" /> :
                                                <input    {...register("hobby", { required: true })} type="checkbox" value="sports" />
                                        } */}



                                        {/* <input defaultValue={editEmploy.hobby}  {...register("hobby", { required: true })} type="checkbox" value="sports" />
                                        <label for="exampleInputPassword1">Movies</label>

                                        {
                                            editEmploy.hobby === 'movies' ?

                                                <input checked {...register("hobby", { required: true })} type="checkbox" value="movies" /> :
                                                <input  {...register("hobby", { required: true })} type="checkbox" value="movies" />
                                        } */}





                                        <br />

                                        <label for="exampleInputPassword1">Date</label>
                                        <input defaultValue={editEmploy.date} {...register("date", { required: true })} type="date" />

                                        <input type="submit" />
                                    </form>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;