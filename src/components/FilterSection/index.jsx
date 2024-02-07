import { useContext } from "react";
import { StaticJobsContext } from "../../context/StaticJobs";
import {
  FiltersWrapper,
  Filter,
  DeleteButton,
  ClearAllButton,
  FiltersArea,
} from "./FilterSection.style";

function FilterSection() {
  const { categories, setCategories } = useContext(StaticJobsContext);

  function removeFilter(category) {
    setCategories(categories.filter((item) => item !== category));
  }

  return (
    <FiltersWrapper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <FiltersArea>
        {categories.map((item) => (
          <Filter key={item}>
            <span>{item}</span>
            <DeleteButton onClick={() => removeFilter(item)}>
              <img src="/images/211652_close_icon.svg" alt="icon" />
            </DeleteButton>
          </Filter>
        ))}
      </FiltersArea>
      <ClearAllButton onClick={() => setCategories([])}>
        Clear all
        <div />
      </ClearAllButton>
    </FiltersWrapper>
  );
}

export default FilterSection;
