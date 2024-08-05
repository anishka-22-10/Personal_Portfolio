"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import "./ui/styles.css"; // Import the CSS file

 

const Clients = () => {
  return (  
    <section id="certifications" className="py-20">
      <h1 className="heading">
        Certifica
        <span className="text-purple-300">tions - [10]</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mt-10">
          <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="company-info">
                <div className="company-logo-container">
                  <img src={company.img} alt={company.name} className="company-logo" />
                </div>
                <span className="company-name">{company.name}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
