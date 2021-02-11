import { Heading } from 'components/common/heading/Heading';
import { ContactForm } from 'components/contact/ContactForm';

const Contact = () => (
  <main className="container mx-auto px-8 py-4">
    <div className="mt-12">
      <Heading title="Contact" />
      <ContactForm />
    </div>
  </main>
)

export { Contact }