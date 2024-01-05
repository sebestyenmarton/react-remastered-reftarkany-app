// useCategoryParams.js

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UCDropdownInputGroup } from "../../../../utils/utileContents";

const useCategoryParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("Összes");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedPage, setSelectedPage] = useState("1");
  const [selectedPageSize, setSelectedPageSize] = useState("9");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any>({});
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  const fetchCategories = async () => {
    try {
      setCategories(UCDropdownInputGroup);
      setCategoriesLoaded(true);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    const { pathname } = location;
    const pathSegments = pathname.split("/");
    const pageParamIndex = pathSegments.indexOf("page") + 1;
    const pageSizeParamIndex = pathSegments.indexOf("pageSize") + 1;

    if (
      pageParamIndex > 0 &&
      pageSizeParamIndex > 0 &&
      pathSegments[pageParamIndex] !== "page" &&
      pathSegments[pageSizeParamIndex] !== "pageSize"
    ) {
      setSelectedPage(pathSegments[pageParamIndex]);
      setSelectedPageSize(pathSegments[pageSizeParamIndex]);
    } else {
      setSelectedPage("1");
      setSelectedPageSize("9");
    }

    // Extracting category and subcategory from URL
    const categoryIndex = pathSegments.indexOf("felvetelek") + 1;
    const subcategoryIndex = categoryIndex + 1;

    if (categoryIndex > 0) {
      setSelectedCategory(decodeURIComponent(pathSegments[categoryIndex]));
    }

    if (subcategoryIndex > 0) {
      const subcategoryValue = decodeURIComponent(
        pathSegments[subcategoryIndex]
      );
      // Check if the subcategoryValue exists in UCDropdownInputGroup
      const isValidSubcategory = Object.values(UCDropdownInputGroup)
        .flat()
        .includes(subcategoryValue);

      if (isValidSubcategory) {
        setSelectedSubcategory(subcategoryValue);
      } else {
        setSelectedSubcategory("");
      }
    }
    fetchCategories();
  }, [location]);

  useEffect(() => {
    if (categoriesLoaded) {
      setLoading(false);
    }
  }, [categoriesLoaded]);

  const handleCategorySelect = (
    newCategory: string,
    newSubcategory: string | undefined
  ) => {
    setSelectedCategory(newCategory);
    setSelectedSubcategory(newSubcategory || "");

    // Build the new URL based on the selected category and subcategory
    const url = `/felvetelek/${encodeURIComponent(newCategory)}${
      newSubcategory ? `/${encodeURIComponent(newSubcategory)}` : ""
    }/${selectedPage}/${selectedPageSize}`;

    // Use react-router's navigate function to update the URL
    navigate(url);
  };

  return {
    selectedCategory,
    selectedSubcategory,
    handleCategorySelect,
    selectedPage,
    selectedPageSize,
    categoriesLoaded,
    categories,
    loading,
  };
};

export default useCategoryParams;
