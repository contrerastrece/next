import type { Metadata } from "next"

export const metadata:Metadata ={
 title: 'Pricing',
 description:'esta pagina es sobre precios',
 keywords:['pricing','pricing page'],
};

const PricingPage = () => {
  return (
    <div className="text-4xl">PricingPage</div>
  )
}

export default PricingPage