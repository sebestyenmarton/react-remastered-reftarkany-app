import * as React from "react";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import useCategoryParams from "./use-category-params/use-category-params";

import "./category-filter.scss";

interface CategoryFilterProps {
  categories?: { [key: string]: string[] };
  onSelect: (category: string, subcategory: string) => void;
}

export default function CategoryFilter({
  categories = {},
  onSelect,
}: CategoryFilterProps) {
  const {
    selectedCategory,
    selectedSubcategory,
    handleCategorySelect,
    categoriesLoaded,
  } = useCategoryParams();

  if (!categoriesLoaded) {
    return null;
  }

  const categoryIsSelected = (cat: string, subCat: string) => {
    handleCategorySelect(cat, subCat);
    onSelect(cat, subCat);
  };

  return (
    <div className="category-filter-box">
      <div className="title">Kategória kiválasztása</div>
      <Box
        className="category-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "end",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }} className="category-box">
          <Chip
            key="Összes"
            variant="soft"
            size="lg"
            color={selectedCategory === "Összes" ? "warning" : "neutral"}
            onClick={() => categoryIsSelected("Összes", "")}
          >
            Összes
          </Chip>
          {Object.keys(categories).map((category) => (
            <Chip
              key={category}
              variant="soft"
              size="lg"
              color={selectedCategory === category ? "warning" : "neutral"}
              onClick={() => categoryIsSelected(category, "")}
            >
              {category}
            </Chip>
          ))}
        </Box>
        {selectedCategory !== "Összes" && categories[selectedCategory] && (
          <Box
            className="subcategory-box"
            sx={{
              display: "flex",
              gap: 1,
              top: 45,
              position: "absolute",
            }}
          >
            {categories[selectedCategory].map((subcategory) => (
              <Chip
                key={subcategory}
                variant="plain"
                color={
                  selectedSubcategory === subcategory ? "warning" : "neutral"
                }
                onClick={() =>
                  categoryIsSelected(selectedCategory, subcategory)
                }
              >
                {subcategory}
              </Chip>
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
}
