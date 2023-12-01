import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {

  const certs: {
    name: string;
    img: string;
    link: string;
  }[] = [
    {
      name: 'aws',
      img: '/aws.webp',
      link: 'https://www.credly.com/badges/b43cfae1-503c-4ec8-8209-6f94019d9354'
    },
    {
      name: 'azure',
      img: '/azure.webp',
      link: 'https://www.credly.com/badges/91710294-919a-40cd-b541-9a0fb3697435'
    }
  ]

  const cert = certs.map(cert => <a key={cert.name} href={cert.link} target="_blank" rel="noreferrer">
    <img
    src={cert.img} width={200} height={200} alt={cert.name}
    />
  </a>)
  return(
    <>
    <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div id='certs' className="mb-10 text-zinc-300 p-10">
            <Section title="Certifications" desc="Throughout my past years of experience as a Cloud Infrastructure Engineer, I have had many opportunities to grow my cloud knowledge and gain skills to build and support the infrastructure that many web apps run on. I am certified in both AWS and Azure. Clicking the certification icons below will take you to my Credly page where you can verify the authenticity of the certifications." />
            <div className="flex justify-around w-3/4 lg:w-1/2 gap-10 lg:gap-0 mx-auto">{cert}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
    
  )
}