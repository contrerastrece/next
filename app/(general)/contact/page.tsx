import type { Metadata } from "next"

export const metadata:Metadata ={
 title: 'Contact',
 description:'esta pagina es sobre contact',
 keywords:['contact','contact page'],
};

const ContactPage = () => {
  return (
    <div className="text-4xl">ContactPage</div>
  )
}

export default ContactPage