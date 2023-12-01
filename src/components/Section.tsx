export default function Section(props: {title: string, desc: string}) {
  return(
    <div>
      <h2 className='text-center text-4xl font-bold mb-10'>{props.title}</h2>
      <p className='text-center mb-10 w-3/4 mx-auto text-lg'>{props.desc}</p>
    </div>
  )
}