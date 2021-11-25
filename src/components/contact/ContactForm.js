import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import { AppConstants } from 'components/App.constants';

const ContactForm = () => {
  const [state, handleSubmit] = useForm(AppConstants.formspreeId, {
    data: {
      _subject: 'Brian Odong Inquiry',
    }
  });

  useEffect(() => {
    if (state.submitting) {
      toast.loading('Submitting..')
    }
  }, [state.submitting])

  useEffect(() => {
    if (state.succeeded) {
      document.getElementById("form").reset();
      toast.remove();
      toast.success('Inquiry sent successfully!', { duration: 4000 });
    }
  }, [state.succeeded])

  return (
    <div className="flex justify-center font-lato">
      <form id="form" onSubmit={handleSubmit} className="w-full max-w-lg">
        <fieldset>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input id="name" type="text" name="name" className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
              <ValidationError field="name" errors={state.errors} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                E-mail
              </label>
              <input id="email" type="email" name="_replyto" className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
              <ValidationError field="email" errors={state.errors} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Message
              </label>
              <textarea id="message" type="text" name="message" className="autoexpand trackingwide appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48" required />
              <ValidationError field="message" errors={state.errors} />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button type="submit" disabled={state.submitting || state.succeeded} className="shadow bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded disabled:opacity-25 ">
                Send Inquiry
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      <Toaster />
    </div>
  )
}

export { ContactForm };