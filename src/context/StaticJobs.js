import { createContext, useState, useEffect } from "react";
import data from "../assets/data.json";

export const StaticJobsContext = createContext();

function StaticJobsProvider({ children }) {
  const allJobs = data.map((job) => {
    job.filterableCategories = [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ];
    return job;
  });

  const [showFilters, setShowFilters] = useState(false);
  const [categories, setCategories] = useState([]);

  const filteredJobs = allJobs.filter((job) => {
    return categories.every((item) => job.filterableCategories.includes(item));
  });

  useEffect(() => {
    categories.length > 0 ? setShowFilters(true) : setShowFilters(false);
  }, [categories]);

  return (
    <StaticJobsContext.Provider
      value={{ filteredJobs, setCategories, showFilters, categories }}
    >
      {children}
    </StaticJobsContext.Provider>
  );
}

export default StaticJobsProvider;
