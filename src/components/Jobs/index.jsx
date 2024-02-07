import { useContext } from "react";
import { StaticJobsContext } from "../../context/StaticJobs";
import FilterSection from "../FilterSection";
import {
  JobsWrapper,
  Job,
  Featured,
  Badge,
  Logo,
  Content,
  Description,
  Divider,
  HeadDescription,
  Details,
  Position,
  Languages,
  DescriptionArea,
} from "./Jobs.style";

function Main() {
  const { filteredJobs, showFilters, categories, setCategories } =
    useContext(StaticJobsContext);

  function handleFIlter(e) {
    const category = e.target.textContent;
    !categories.includes(category) && setCategories([...categories, category]);
  }

  return (
    <JobsWrapper>
      {showFilters && <FilterSection />}

      {filteredJobs.map((item) => (
        <Job
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {item.featured && <Featured />}

          <Content>
            <DescriptionArea>
              <Logo src={item.logo} alt={item.company} />
              <Description>
                <HeadDescription>
                  <span>{item.company}</span>
                  {item.new && <Badge backgroundcolor="primary">NEW!</Badge>}
                  {item.featured && (
                    <Badge backgroundcolor="darkerCyan">FEATURED</Badge>
                  )}
                </HeadDescription>
                <Position>{item.position}</Position>
                <Details>
                  <li>{item.postedAt}</li>
                  <li>{item.contract}</li>
                  <li>{item.location}</li>
                </Details>
              </Description>
            </DescriptionArea>

            <Divider />

            <Languages>
              <span onClick={(e) => handleFIlter(e)}>{item.role}</span>
              <span onClick={(e) => handleFIlter(e)}>{item.level}</span>
              {item.languages.map((language) => (
                <span key={language} onClick={(e) => handleFIlter(e)}>
                  {language}
                </span>
              ))}
              {item.tools &&
                item.tools.map((tool) => (
                  <span key={tool} onClick={(e) => handleFIlter(e)}>
                    {tool}
                  </span>
                ))}
            </Languages>
          </Content>
        </Job>
      ))}
    </JobsWrapper>
  );
}

export default Main;
