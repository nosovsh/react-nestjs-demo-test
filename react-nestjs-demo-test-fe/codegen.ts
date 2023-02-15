import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../react-nestjs-demo-test/schema.gql",
  documents: ["src/**/*.tsx", "src/**/*.ts", "!src/graphql-generated/**/*"],
  generates: {
    "./src/graphql-generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
