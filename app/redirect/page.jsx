"use client"

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import sha from "sha256";
import uniqid from "uniqid";

export default function RedirectingPage() {
  const uuid = uniqid()
  const tid = sha(uuid + new Date())
  const max = 20
  const min = 1
  const price = Math.floor(Math.random() * (max - min)) + min

  const params = useSearchParams()
  const cid = useSearchParams().get("clickid")

  useEffect(() => {
    const url = params.get("url")
    if (!url) return
    setTimeout(() => {
      window.open(url, "_blank")
      window.close()
    }, 2000)
  }, [params])

  return (
    <div>
      <img src={`https://www.pixelhere.com/et/event.php?advertiser=212168&cid=${cid}&id=824d26&udid=${uuid}&value=${price}&tid=${tid}`} border="0" width="1" height="1" />
      <h1 style={{ textAlign: "center" }}>Redirecting...</h1>
    </div>
  )
};