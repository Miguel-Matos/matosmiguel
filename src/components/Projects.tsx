import Section from './Section';
import { motion, AnimatePresence } from "framer-motion";

function Cards() {
  const list: {
    title: string;
    desc: string;
    pic: string;
    git: string;
    site: string;
    pro: boolean;
  }[] = [
    {
      title: 'Aces Towing',
      desc: 'This is a contract project for a towing company in Leesburg, FL. Currently under construction. The code is not available for viewing due to company security compliance.',
      pic: '/aces.webp',
      git: 'https://github.com/Aces-Towing/aces',
      site: 'https://acestowing.vercel.app',
      pro: true
    },

    {    
      title: 'Rent a Tes',
      desc: 'Built in React using Tailwind CSS and Typescript. This is the frontend design of an example rental car website.',
      pic: '/tesla.webp',
      git: 'https://github.com/Miguel-Matos/rent-a-tes',
      site: 'http://rentates.netlify.app',
      pro: false
    }
  ]

  const card = list.map(item => 
    <div className='bg-zinc-600 text-zinc-300 shadow-xl p-10 rounded-lg mb-14 mx-auto' key={item.title}>
      <a className='' href={item.site} target='_blank'><img className=' rounded-lg mb-5' src={item.pic} width={3360} height={1832} alt={item.title} /></a>
      <p className='text-center text-lg font-bold mb-2'>{item.title}</p>
      <p className='mb-5 text-center'>{item.desc}</p>
      <div className='flex justify-around'>
        {item.pro === false ? <a className='border rounded-lg p-2 bg-zinc-700 focus:text-slate-100 hover:bg-zinc-500 hover:shadow-lg focus:bg-zinc-700' href={item.git} target='_blank'>See Code</a> : null}
        <a className='border rounded-lg p-2 bg-zinc-700 focus:text-slate-100 hover:bg-zinc-500 hover:shadow-lg focus:bg-zinc-700' href={item.site} target='_blank'>Live Site</a>
      </div>
    </div>


  )

  return(
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-10'>
      {card}
    </div>
  )
}

export default function Projects() {
  return(
    <div className='z-20'>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-zinc-300 lg:p-10' id='projects'>
            <Section title='Projects' desc='Feel free to check out some of these sites, and even dive into the code. Some sites do not have code available as they are company sites. Please reach out to me if you have any questions, or want the inside scoop about the development process.' />
            <Cards />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}