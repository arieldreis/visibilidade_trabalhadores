import React from "react";
import { CATEGORIES } from "../services/servicesCategories.js";

const Categories = ({ icontAction }) => {
  return (
    <>
      <section className="categories">
        <div className="categories-list">
          {CATEGORIES.map(({ key, label, icon: Icon }) => {
            const active = key === "Todos"
            return (
              <button
                key={key}
                onClick={() => icontAction(label)}
                className={`cat-btn${active ? " cat-btn-active" : ""}`}
              >
                <Icon className="cat-btn-icon" />
                {label}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Categories;
