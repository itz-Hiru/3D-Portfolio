import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdArrowOutward } from "react-icons/md";
import HeaderTitle from "../components/HeaderTitle.component";
import ContactExperience from "../components/Models/Contact/ContactExperience.component";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required");
      return;
    }

    toast.loading("Sending message...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          project: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.dismiss();
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.dismiss();
        console.error("EmailJS error:", error);
        toast.error("Failed to send. Try again later.");
      });
  };

  return (
    <section id="contact" className="section-padding flex-center">
      <div className="w-full h-full md:px-10 px-5">
        <HeaderTitle
          title="Get in Touch"
          subTitle="🤝 Whether it's a project or just a hello, feel free to reach out"
        />
        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-6">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5"
              >
                <div>
                  <label htmlFor="name" className="text-base text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Silva"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-sm text-white-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-base text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-sm text-white-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-base text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Your message for Hirumitha Kuladewa"
                    value={formData.message}
                    onChange={handleChange}
                    className="text-sm text-white-50"
                    required
                  ></textarea>
                </div>
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Send Message</p>
                    <div className="arrow-wrapper">
                      <MdArrowOutward className="text-xl text-black font-extrabold" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-6 min-h-96">
            <div className="w-full h-full overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
