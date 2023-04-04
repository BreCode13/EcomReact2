// import React from 'react';
// import { useForm } from 'react-hook-form';

// function Form() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Name</label>
//         <input {...register("name", { required: true, minLength: 2 })} />
//         {errors.name && <span>Name is required and must have at least 2 characters</span>}
//       </div>
      
//       <div>
//         <label>Email</label>
//         <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
//         {errors.email && <span>Email is required and must be a valid email address</span>}
//       </div>

//       <div>
//         <label>Message</label>
//         <textarea {...register("message", { required: true })} />
//         {errors.message && <span>Message is required</span>}
//       </div>

//       <button type="submit">Send Message</button>
//     </form>
//   );
// }

// export default Form;
