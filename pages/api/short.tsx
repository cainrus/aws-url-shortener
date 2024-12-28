
import React from "react";
import { extractUrl, getGqlConfig } from "@/shared/utils";

function Short(): React.JSX.Element {
    return <div></div>;
}

export async function getServerSideProps(context: {params: {short: string}}) {
    const config = getGqlConfig();

    const query = /* GraphQL */ `
      query LIST_URLS($input: ModelURLFilterInput!) {
          listURLS(filter: $input) {
              items {
                  long
                  short
              }
          }
      }
  `;
    const variables = {
        input: { short: { eq: context.params.short } },
    };
    const options = {
        method: "POST",
        headers: {
            "x-api-key": config.key,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
    };
    const res = await fetch(config.endpoint, options);
    const data = await res.json();

    return {
        redirect: {
            destination: extractUrl(data),
        },
    };
}
export default Short;
