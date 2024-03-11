export const GROQqueries = {
  hero: `*[_type == "section" && component == "hero"]`,
  services: {
    pilates: `*[_type == "section" && component == "pilates"]`,
    strengthTraining: `*[_type == "section" && component == "strengthTraining"]`,
    functionalTraining: `*[_type == "section" && component == "functionalTraining"]`,
  },
  transformations: {
    limor: `*[_type == "transformation" && title == "limor"]`,
    daniel: `*[_type == "transformation" && title == "daniel"]`,
  },
};
