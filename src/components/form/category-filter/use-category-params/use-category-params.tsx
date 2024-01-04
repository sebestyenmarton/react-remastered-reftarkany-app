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
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const [categories, setCategories] = useState<any>({});

  const fetchCategories = () => {
    try {
      setCategories(UCDropdownInputGroup);
      setCategoriesLoaded(true);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    const { pathname } = location;

    // Extracting category and subcategory from URL
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

    fetchCategories();
  }, [location]);

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
  };
};

export default useCategoryParams;
