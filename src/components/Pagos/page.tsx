import React from "react";
import PaymentCard from "./components/PaymentCard";
import EditIcon from "../UI/icons/EditIcon";

const Pagos = () => {
  return (
    <div className="w-[848px] h-[280px] bg-white px-4 rounded-lg">
      <section className="w-full h-[60px] flex justify-between items-center border-b-[1px] border-b-gray-200">
        <h2 className="text-orange-primaryLigth font-bold">Pagos</h2>

        <div className="flex gap-x-6">
          {/*
            TODO
            ! Este botón debe anclarse a un estado, posibles valores Editar-Guardar !
        */}
          <button className="flex font-bold items-center text-xs justify-center gap-x-1 text-orange-primaryLigth">
            <span >Editar</span>
            <EditIcon height="15" width="15" />
          </button>

          <div className="flex gap-x-2">
            <h3 className="text-gray-400">Por cobrar</h3>

            {/* monto y currency variables */}
            <span className="text-black font-bold">182 USD</span>
          </div>
        </div>
      </section>

      <section className=" h-[220px] flex overflow-x-auto items-center scrollbar-thin scrollbar-webkit">
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
        <PaymentCard />
      </section>
    </div>
  );
};

export default Pagos;
