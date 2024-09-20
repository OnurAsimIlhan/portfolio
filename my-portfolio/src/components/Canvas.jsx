import { GraphCanvas, darkTheme, lightTheme, useSelection } from "reagraph";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { nodes, aboutMeCertificationsNodes } from "./nodes";
import { edges, aboutMeCertificationsEdges } from "./edges";
import { projectTechnologies } from "./projectTechnologies";
import { accordionData } from "./accordionData";

const myTheme = {
  ...darkTheme,
  node: {
    ...darkTheme.node,
    background: "#fff",
  },
  canvas: {
    ...darkTheme.canvas,
    background: "",
  },
};

const Canvas = () => {
  const [openAccordions, setOpenAccordions] = useState({});
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedGraph, setSelectedGraph] = useState("technology"); // Default to technology graph
  const handleOpen = (id, technologies = []) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    // Update selected technologies when opening an accordion
    if (!openAccordions[id]) {
      setSelectedTechnologies(technologies);
    } else {
      setSelectedTechnologies([]);
    }

    // Define top-level sections that control graph switching
    const topLevelSections = [
      "work_experience_header",
      "projects_header",
      "about_me",
      "certifications_header",
    ];

    // Only switch graph based on top-level sections, not subsections
    if (topLevelSections.includes(id)) {
      switch (id) {
        case "work_experience_header":
        case "projects_header":
          setSelectedGraph("technology"); // Switch to Technology Graph
          break;
        case "about_me":
          setSelectedGraph("aboutMeCertifications"); // Switch to About Me Graph
          break;
        case "certifications_header":
          setSelectedGraph("aboutMeCertifications"); // Switch to Certifications Graph
          break;
        default:
          setSelectedGraph("technology"); // Default to technology
      }
    }
  };

  const graphRef = useRef(null);
  const handleCanvasClick = () => {
    setSelectedTechnologies([]);
    setOpenAccordions({});
  };

  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick: selectionCanvasClick,
  } = useSelection({
    ref: graphRef,
    nodes: nodes,
    edges: edges,
    pathSelectionType: "all",
  });

  const combinedCanvasClick = (event) => {
    handleCanvasClick();
    selectionCanvasClick(event);
  };

  // Render nested accordions
  const renderNestedItems = (nestedItems) => {
    return nestedItems.map((nestedItem) => (
      <Accordion
        key={nestedItem.id}
        open={openAccordions[nestedItem.id] || false}
        className="mb-2"
      >
        <AccordionHeader
          className="border-none"
          onClick={() => handleOpen(nestedItem.id)}
        >
          <span>{nestedItem.header}</span>
          <FaChevronDown
            className={`ml-auto ${
              openAccordions[nestedItem.id] ? "rotate-180" : "rotate-0"
            }`}
          />
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc list-inside space-y-2">
            {nestedItem.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </AccordionBody>
      </Accordion>
    ));
  };

  // Render description
  const renderDescription = (descriptionArray) => {
    return (
      <ul className="list-disc list-inside space-y-2 marker:text-[#1de9ac] text-[#b3ffe8] ">
        {descriptionArray.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row border-b border-neutral-900 pb-4 min-h-[calc(100vh-140px)] overflow-hidden">
      {/* Accordion Section */}
      <div className="w-full lg:w-1/3 relative z-20">
        <div className="flex flex-col items-center lg:items-start">
          {accordionData.map((section) => (
            <Accordion
              key={section.id}
              open={openAccordions[section.id] || false}
              className="mb-4 shadow-none border-2 p-3 rounded-3xl bg-[#3c3c3c] border-zinc-500 opacity-95 "
            >
              <AccordionHeader
                onClick={() =>
                  handleOpen(section.id, projectTechnologies[section.id])
                }
                className={`${
                  openAccordions[section.id]
                    ? "text-[#1de9ac] font-bold"
                    : "text-neutral-100"
                } transition-colors  flex items-center text-base border-none`}
              >
                <span>{section.header}</span>
                <FaChevronDown
                  className={`ml-auto ${
                    openAccordions[section.id] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </AccordionHeader>
              <AccordionBody>
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-4 ml-4 mt-3 leading-relaxed "
                  >
                    <Accordion
                      open={openAccordions[item.id] || false}
                      className="mb-2 "
                    >
                      <AccordionHeader
                        onClick={() =>
                          handleOpen(item.id, projectTechnologies[item.id])
                        }
                        className={`${
                          openAccordions[item.id]
                            ? "text-[#1de9ac] font-bold"
                            : "text-neutral-300"
                        } transition-colors flex items-center text-base `}
                      >
                        <span>{item.header}</span>
                        <FaChevronDown
                          className={`ml-auto ${
                            openAccordions[item.id] ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </AccordionHeader>
                      <AccordionBody>
                        {renderDescription(item.description)}
                        {item.hasNestedItems &&
                          renderNestedItems(item.nestedItems)}
                      </AccordionBody>
                    </Accordion>
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Graph Section */}
      <div className="w-full lg:w-3/4 flex-grow z-10 overflow-hidden">
        <div className="w-full h-auto">
          {selectedGraph === "technology" ? (
            <GraphCanvas
              ref={graphRef}
              theme={myTheme}
              nodes={nodes} // Use technology nodes
              edges={edges} // Use technology edges
              selections={selectedTechnologies}
              onCanvasClick={combinedCanvasClick}
              onNodeClick={onNodeClick}
              actives={actives}
              layoutOverrides={{
                nodeStrength: -120,
                linkDistance: 80,
              }}
            />
          ) : (
            <GraphCanvas
              ref={graphRef}
              theme={myTheme}
              nodes={aboutMeCertificationsNodes} // Use about me & certifications nodes
              edges={aboutMeCertificationsEdges} // Use about me & certifications edges
              selections={selectedTechnologies}
              onCanvasClick={combinedCanvasClick}
              onNodeClick={onNodeClick}
              actives={actives}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
