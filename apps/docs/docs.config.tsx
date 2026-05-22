import { defineDocs } from "@farming-labs/docs";
import { colorful } from "@farming-labs/theme/colorful";

export default defineDocs({
  entry: "docs",
  theme: colorful(),
  ordering: [
    {
      "slug": "quickstart"
    },
    {
      "slug": "installation"
    },
    {
      "slug": "configuration",
      "children": [
        {
          "slug": "database"
        },
        {
          "slug": "environment"
        }
      ]
    },
    {
      "slug": "self-hosting",
      "children": [
        {
          "slug": "overview"
        }
      ]
    }
  ],
  metadata: {
    titleTemplate: "%s – Docs",
    description: "Docs for the create-t3-turbo monorepo starter.",
  },
});
