"use client"
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

export const FormspreeForm = ({formId}) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
      return <div className="max-w-2xl mx-auto my-5 flex flex-col gap-5 border-solid border-slate-400 border-2 p-5 rounded-md" role="status" aria-live="polite">
        <p>Thank you for your message. We usually respond within 1-2 business days.</p>
      </div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
      
        <fieldset>
          <div>
            <label htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              name="phone"
              required
            />
          </div>
        </fieldset>
        
        <div>
          <label htmlFor="email">
            Email Address
          </label>
          <input 
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <fieldset>
          <div>
            <label htmlFor="dog-name">
              Dog's Name
            </label>
            <input
              id="dog-name"
              type="text"
              name="dog-name"
              required
            />
          </div>
          <div>
            <label htmlFor="dog-breed">
              Dog's Breed
            </label>
            <input
              id="dog-breed"
              type="text"
              name="dog-breed"
              required
            />
          </div>
        </fieldset>


        <div>
          <label htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div>
          <button className="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>

      </div>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}