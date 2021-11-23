import { Heading } from 'components/common/heading/Heading';
import { ContactForm } from 'components/contact/ContactForm';

const Contact = () => (
  <main className="container mx-auto px-8 py-4">
    <div className="mt-12">
      <Heading title="Contact" />
      <h3 className="flex justify-center font-lato font-semibold text-gray-700">Get in touch with me! </h3>
      <ContactForm />
    </div>
  </main>
)

export { Contact }