"use client"

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function RedirectingPage() {
  const params = useSearchParams()

  useEffect(() => {

  }, [])

  useEffect(() => {
    const url = params.get("url")
    if (!url) return
    setTimeout(() => {
      window.open(url)
      window.close()
    }, 2000)
  }, [params])

  return (
    <h1 style={{ textAlign: "center" }}>Redirecting...</h1>
  )
};