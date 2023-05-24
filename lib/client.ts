async function query<T, U>({
  body,
  options,
}: {
  body: { query: string; variables?: U };
  options?: {
    revalidate?: number;
  };
}): Promise<T> {
  if (typeof process.env.CMS_URL !== "string" || !process.env.CMS_URL) {
    throw new Error("Invalid url of cms");
  }

  const response = await fetch(process.env.CMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    next: {
      revalidate: options?.revalidate || 60,
    },
  });
  const json = await response.json();
  return json.data;
}

export function getClient() {
  return {
    query,
  };
}
