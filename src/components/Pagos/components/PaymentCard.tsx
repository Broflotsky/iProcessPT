import CircleIcon from "@/components/UI/icons/CircleIcon"

const PaymentCard = () => {
  return (
    <div className="w-[204px] h-[137px] flex-shrink-0 flex flex-col items-center justify-between text-black">
        <CircleIcon />
        <h3 className="font-bold">Visa</h3>
        <span className="font-bold text-xs">54,6 USD <span className="font-light">{`(30%)`}</span>  </span>
        <h4 className="text-xs">{`22 Ene, 2022`}</h4>
    </div>
  )
}

export default PaymentCard