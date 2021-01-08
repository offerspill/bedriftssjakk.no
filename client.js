import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "l3m1tz9l",
  dataset: "production",
  useCdn: true,
});
