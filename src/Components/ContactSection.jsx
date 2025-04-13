import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "../style.css"

function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [value, setValue] = useState('');


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () =>{
  
   

    setIsSubmitted(true)

  }
  
  return (
    <div className="Contact_section mt-[106px] px-4 sm:px-8 md:px-16 lg:px-[72px] flex flex-col items-center gap-10">
    <div className="Headline flex flex-col items-center text-center">
      <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight text-brand-electric-blue">
        Contact us
      </h1>
      <p className="text-base sm:text-lg leading-8 text-text-secondary mt-4 sm:mt-6 max-w-xl">
        Speak with our team to see how we can help your business.
      </p>
    </div>
  
    {isSubmitted ? (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 mb-16 text-center max-w-xl w-full">
        <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">Thank you for contacting us!</h3>
        <p className="text-green-700 mb-4">We've received your message and will get back to you shortly.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    ) : (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl mb-16 flex flex-col gap-4 p-4 sm:p-8 md:p-14"
      >
        <div>
          <input
            type="text"
            className="border outline-none border-text-secondary rounded-2xl px-4 py-3 w-full h-[60px]"
            {...register("name", {
              required: "Name is requred",
              maxLength: {
                value: 20,
                message: "Max length is 20",
              },
            })}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
  
        <div>
          <input
            type="email"
            className="border outline-none border-text-secondary rounded-2xl px-4 py-3 w-full h-[60px]"
            {...register("email", {
              required: "Email is requred",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
  
        <div>
          <PhoneInput
            value={value}
            onChange={setValue}
            className="border outline-none border-text-secondary rounded-2xl px-4 py-3 w-full h-[60px]"
            placeholder="Your best contact number"
            {...register("number", {
              required: "Number is requred",
            })}
          />
          {errors.number && (
            <p className="mt-1 text-red-500 text-sm">{errors.number.message}</p>
          )}
        </div>
  
        <div>
          <input
            type="text"
            className="border outline-none border-text-secondary rounded-2xl px-4 py-3 w-full h-[179px]"
            placeholder="Business or company name"
            {...register("msg", {
              required: "Message is requred",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
          />
          {errors.msg && (
            <p className="mt-1 text-red-500 text-sm">{errors.msg.message}</p>
          )}
        </div>
  
        <button
          type="submit"
          className="w-48 h-11 cursor-pointer rounded-2xl text-bg-primary bg-button-primary self-center"
        >
          Submit
        </button>
      </form>
    )}
  </div>
  
  );
}

export default ContactSection;
