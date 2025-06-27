"use client";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import emailjs from "emailjs-com";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "../assets/button.css";
import { Textarea } from "@/components/ui/textarea";
import {
  IconLocation,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from "@/utils/emailjs-com";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  web: "",
  subject: "",
  message: "",
};

const CardComponent = () => {
  const [state, setState] = useState(initialState);

  const { name, email, phone, company, position, web, subject, message } =
    state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      !company ||
      !position ||
      !subject ||
      !message
    ) {
      toast.warn("All fields are required");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          from_phone: phone,
          from_company: company,
          from_position: position,
          from_company_website: web,
          subject,
          message,
          to_email: "aritradaschowdhury@gmail.com",
        },
        EMAILJS_USER_ID
      )
      .then(
        (response) => {
          toast.success("Email sent successfully!");
          setState(initialState);
        },
        (error) => {
          toast.error("Failed to send email:", error);
        }
      );
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <CardContainer className="inter-var md:mt-16 gap-16 flex items-center justify-between md:flex-row flex-col">
          <CardBody className="bg-gray-100/10 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border md:w-full w-[95%] ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Welcome to the portfolio of Aritra Das Chowdhury
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Now you can directly send mail through the system ui designed by
              me.🤗
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <LabelInputContainer>
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      onChange={handleInputChange}
                      name="name"
                      value={name}
                      placeholder="John Doe"
                      type="text"
                    />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    onChange={handleInputChange}
                    name="email"
                    value={email}
                    placeholder="projectmayhem@fc.com"
                    type="email"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="phone">Your Phone Number</Label>
                  <Input
                    onChange={handleInputChange}
                    name="phone"
                    value={phone}
                    placeholder="+91 1234567890"
                    type="text"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="company">Your Company Name</Label>
                  <Input
                    onChange={handleInputChange}
                    name="company"
                    value={company}
                    placeholder="Google LLC"
                    type="text"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="position">Your Position</Label>
                  <Input
                    onChange={handleInputChange}
                    name="position"
                    value={position}
                    placeholder="Hiring Manager"
                    type="text"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="website">
                    Your Company Website (Optional)
                  </Label>
                  <Input
                    onChange={handleInputChange}
                    name="web"
                    value={web}
                    placeholder="https://google.co.in"
                    type="text"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    onChange={handleInputChange}
                    name="subject"
                    value={subject}
                    placeholder="Subject of the mail"
                    type="text"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    onChange={handleInputChange}
                    name="message"
                    value={message}
                    placeholder="Message"
                  />
                </LabelInputContainer>

                <button
                  className="sparkle-button cursor-pointer pointer-events-auto text-base relative flex items-center justify-center"
                  type="submit"
                >
                  Hire Me
                  <BottomGradient />
                </button>
              </form>
            </CardItem>
          </CardBody>

          <CardBody className="bg-gray-100/10 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border md:w-full w-[95%] ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <div className="flex flex-col items-start gap-8">
                <h1 className="md:text-xl text-base">Contact with me</h1>
                <div className="flex items-center justify-center gap-4">
                  <IconPhone />
                  <div className="flex items-start flex-col justify-center">
                    <p className="md:text-xl text-xs">Phone -</p>
                    <p className="md:text-xl text-xs">+91 8617535011</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <IconMail />
                  <div className="flex items-start flex-col justify-center">
                    <p className="md:text-xl text-xs">Email -</p>
                    <p className="md:text-xl text-xs">aritradaschowdhury@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <IconLocation />
                  <div className="flex items-start flex-col text-left">
                    <p className="md:text-xl text-xs">Address -</p>
                    <p className="md:text-xl text-xs">Ranaghat II, Nadia, West Bengal</p>
                  </div>
                </div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.h1>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col items-start space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default CardComponent;