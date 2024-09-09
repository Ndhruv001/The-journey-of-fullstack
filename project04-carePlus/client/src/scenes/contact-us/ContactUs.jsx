import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";

function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 max-w-xl text-center mb-6">
        If you have any questions, feedback, or need support, please feel free
        to contact us. We&apos;re here to help you!
      </p>
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <Label>Name</Label>
          <Input placeholder="Your name" rounded={false} bg="bg-gray-100" />
        </div>
        <div className="mb-4">
          <Label>Email</Label>
          <Input placeholder="Your Email" rounded={false} bg="bg-gray-100" />
        </div>
        <div className="mb-4">
          <Label>Message</Label>
          <textarea
            className="w-full p-2 bg-gray-100 border border-gray-300 rounded-xl max-h-60 min-h-32 focus:outline-none"
            id="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <Button>Send Message</Button>
      </form>
    </div>
  );
}

export default ContactUs;
