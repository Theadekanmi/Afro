import { useState } from "react";


<div>
  <div className=' md:w-[600px] h-[180px] items-center bg-litegreen border-l-4 border-light-green  shadow-2xl  '>
              <h1 className=' text-2xl text-darkin md:pt-10 pl-8 '>Breast Augmentation</h1>
              <p className='leading-8 pl-8 text-dark-light-grey text-[15px]'>Integer aliquet congue libero, eu gravida odio ultrces ut. Etiam ac erat ut enim maximus accumsan vel ac nisl.</p>
            </div>
            <button className=' w-[190px] rounded-[100px] h-[40px] transform -translate-x-52  -translate-y-4  bg-pinka text-white'> from $3500</button>
          </div>  
      



// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
//   };

//   const validateForm = () => {
//     let valid = true;
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       valid = false;
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//       valid = false;
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted successfully", formData);
//       // Proceed with form submission (e.g., API call)
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded"
//             />
//             {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

export default Contact;
