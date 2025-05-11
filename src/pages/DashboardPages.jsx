import React from "react";
import QuickActionBtn from "../components/utils/quickActionsBtn/QuickActionBtn";
import { FileArrowDown } from "react-bootstrap-icons";

const DashboardPages = () => {
  return (
    <>
      <div className="custom-container p-2 justify-content-around">
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
        <QuickActionBtn Icon={FileArrowDown} title={`Some title`} />
      </div>

      <div className="custom-container p-2 d-block">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor. Ut odio aliquam vitae beatae sunt
          labore dolor. possimus optio minus eveniet dolor. Ut odio aliquam
          vitae beatae sunt labore dolor.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor. Ut odio aliquam vitae beatae sunt
          labore dolor. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ullam pariatur sit voluptates doloribus eius quibusdam inventore
          recusandae, possimus optio minus eveniet dolor. Ut odio aliquam vitae
          beatae sunt labore dolor.
        </p>
        <p className="text-center text-danger">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor. Ut odio aliquam vitae beatae sunt
          labore dolor. possimus optio minus eveniet dolor. Ut odio aliquam
          vitae beatae sunt labore dolor.
        </p>
        <p className="text-center">
          <b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            pariatur sit voluptates doloribus eius quibusdam inventore
            recusandae, possimus optio minus eveniet dolor.
          </b>
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor. Ut odio aliquam vitae beatae sunt
          labore dolor. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ullam pariatur sit voluptates doloribus eius quibusdam inventore
          recusandae, possimus optio minus eveniet dolor. Ut odio aliquam vitae
          beatae sunt labore dolor.
        </p>
      </div>
    </>
  );
};

export default DashboardPages;
