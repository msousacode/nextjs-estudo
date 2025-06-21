import { isError } from "./type-guard";

const endpoint = "https://dummyjson.com/";

type ExtractVariables<T> = T extends { variables: object }
  ? T["variables"]
  : never;

export async function dataFetch<T>({
  variables,
  verb,
  path,
}: {
  variables?: ExtractVariables<T>;
  verb: "GET" | "POST";
  path: string;
}): Promise<{ status: number; body: T } | never> {
  try {
    let result;
    const url = new URL(path, endpoint);

    if (verb != "GET") {
      result = await fetch(url.href, {
        method: verb,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...(variables && { variables }),
        }),
      });
    } else {
      result = await fetch(url.href, {
        method: verb,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    
    if (result.ok == false) {
      throw {
        cause: "unknown",
        status: result.status,
        message: result.statusText || "Error fetching data",
        path,
      };
    }

    const body = await result.json();

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    if (isError(e)) {
      throw {
        cause: e.cause?.toString() || "unknown",
        status: e.status || 500,
        message: e.message,
        path,
      };
    }

    throw {
      error: e,
    };
  }
}