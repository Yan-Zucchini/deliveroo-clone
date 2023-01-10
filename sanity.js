import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = SanityClient({
  projectId: "dqqdewd4",
  dataset: "production",
  useCdn: "true",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
