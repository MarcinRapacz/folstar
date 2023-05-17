import { CodegenConfig } from "@graphql-codegen/cli";
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: process.env.CMS_URL,
  documents: ["queries/**/*.ts"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
