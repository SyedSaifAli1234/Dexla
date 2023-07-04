import {Button, Input, Textarea,} from "@material-tailwind/react";
import {Footer, PageTitle} from "@/widgets/layout";
import React from "react";

export function Contact() {
  return (
      <>
        <section className="relative block h-[50vh]">
          <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/contactus.jpg')] bg-cover bg-center" />
          <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        </section>
        <section className="relative bg-blue-gray-50/50 py-16 px-4">
          <div className="container mx-auto">
            <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
              <div className="px-6">
                <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                  <PageTitle heading="Want to work with us?">
                    Complete this form and we will get back to you in 24 hours.
                  </PageTitle>
                  <form className="mx-auto mt-12 max-w-3xl text-center">
                    <div className="mb-8 flex gap-8">
                      <Input variant="standard" size="lg" label="Full Name" />
                      <Input variant="standard" size="lg" label="Email Address" />
                    </div>
                    <Textarea variant="standard" size="lg" label="Message" rows={8} />
                    <Button variant="gradient" size="lg" className="mt-8">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-blue-gray-50/50">
          <Footer />
        </div>
      </>
  );
}

export default Contact;
