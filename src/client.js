import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "likc2o21",
  dataset: "production",
  apiVersion: "2023-02-06",
  token: process.env.REACT_PORTOFIO_SANITY_TOKEN,
});

export default client;
