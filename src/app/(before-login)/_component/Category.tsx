"use client";

import { useState } from "react";
import * as styles from "./category.css";
import { categories } from "@/app/_const/category";

export default function Category() {
  const [selectedCategoryData, setSelectedCategoryData] = useState([]);

  const handleCategoryClick = async (categoryName: string, subCategoryName: string) => {
    console.log(`/api/categories/${categoryName}/${subCategoryName}`);
    const response = await fetch(`/api/categories/${categoryName}/${subCategoryName}`);
    const data = await response.json();
    setSelectedCategoryData(data);
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.name} className={styles.majorCategory}>
          <h2>{category.name}</h2>

          <ul>
            {category.subCategories.map((subCategory) => (
              <div key={subCategory} className={styles.minorCategory}>
                <button
                  onClick={() => handleCategoryClick(category.name, subCategory)}
                  className={styles.categoryButton}
                >
                  {subCategory}
                </button>
              </div>
            ))}
          </ul>
        </div>
      ))}
      <div>
        {/* Display fetched data */}
        {/* {selectedCategoryData.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))} */}
      </div>
    </div>
  );
}
