import { GraphCanvas, darkTheme, useSelection } from "reagraph";
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
  const [openAccordionSection, setOpenAccordionSection] = useState(null); // Track open section
  const [openAccordionItem, setOpenAccordionItem] = useState(null); // Track open item within a section
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedGraph, setSelectedGraph] = useState("technology"); // Default to technology graph

  const handleOpen = (id, technologies = [], isSection = false) => {
    if (isSection) {
      // If it's a section, toggle the section and close any other section
      setOpenAccordionSection((prev) => (prev === id ? null : id));
      setOpenAccordionItem(null); // Reset any open item when switching sections
    } else {
      // If it's an item, toggle the item and close any other item in the same section
      setOpenAccordionItem((prev) => (prev === id ? null : id));
    }

    // Update selected technologies when opening an accordion
    if (openAccordionItem !== id) {
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
    if (isSection && topLevelSections.includes(id)) {
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
    setOpenAccordionSection(null);
    setOpenAccordionItem(null);
  };

  const {
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
        open={openAccordionItem === nestedItem.id}
        className="mb-2"
      >
        <AccordionHeader
          className="border-none"
          onClick={() => handleOpen(nestedItem.id, [], false)}
        >
          <span>{nestedItem.header}</span>
          <FaChevronDown
            className={`ml-auto ${
              openAccordionItem === nestedItem.id ? "rotate-180" : "rotate-0"
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
              open={openAccordionSection === section.id}
              className="mb-4 shadow-none border-2 p-3 rounded-3xl bg-[#3c3c3c] border-zinc-500 opacity-95 "
            >
              <AccordionHeader
                onClick={() => handleOpen(section.id, projectTechnologies[section.id], true)}
                className={`${
                  openAccordionSection === section.id
                    ? "text-[#1de9ac] font-bold"
                    : "text-neutral-100"
                } transition-colors  flex items-center text-base border-none`}
              >
                <span>{section.header}</span>
                <FaChevronDown
                  className={`ml-auto ${
                    openAccordionSection === section.id ? "rotate-180" : "rotate-0"
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
                      open={openAccordionItem === item.id}
                      className="mb-2 "
                    >
                      <AccordionHeader
                        onClick={() =>
                          handleOpen(item.id, projectTechnologies[item.id], false)
                        }
                        className={`${
                          openAccordionItem === item.id
                            ? "text-[#1de9ac] font-bold"
                            : "text-neutral-300"
                        } transition-colors flex items-center text-base `}
                      >
                        <span>{item.header}</span>
                        <FaChevronDown
                          className={`ml-auto ${
                            openAccordionItem === item.id ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </AccordionHeader>
                      <AccordionBody>
                        {renderDescription(item.description)}
                        {item.hasNestedItems &&
                          renderNestedItems(item.nestedItems, section.id)}
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
      <div className="w-full lg:w-3/4 flex-grow z-10 relative lg:static overflow-hidden">
      <div className="w-full h-auto ">
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
              cameraMode="pan"
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
