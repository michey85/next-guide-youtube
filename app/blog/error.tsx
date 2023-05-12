"use client";

import { ErrorPage } from "@/components/Error";

export default function Error({ error }: { error: Error }) {
  return <ErrorPage error={error} />;
}
