import { createContext, useState } from "react";
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

  const [showFilters, setShowFilters] = useState(true);
  const [categories, setCategories] = useState([]);

  const filteredJobs = allJobs.filter((job) => {
    return categories.every((item) => job.filterableCategories.includes(item));
  });

  return (
    <StaticJobsContext.Provider
      value={{ filteredJobs, setCategories, showFilters, categories }}
    >
      {children}
    </StaticJobsContext.Provider>
  );
}

export default StaticJobsProvider;
