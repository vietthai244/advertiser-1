"use client"

import { useRouter, useSearchParams } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const cid = useSearchParams().get("clickid")

  const handleOpenAd = () => {
    router.push(`/redirect?clickid=${cid}&url=https://galxe.com/nearapac/campaign/GCsXnUeoWi`)
  }

  return (
    <>
      <img src={`https://www.pixelhere.com/et/event.php?advertiser=212168&cid=169043465022220TVNTV428847669224V17&id=8f4180&value=5&tid=123`} border="0" width="1" height="1" />
      <img src={`https://www.pixelhere.com/et/event.php?advertiser=212168&cid=${cid}&id=898745&value=1`} border="0" width="1" height="1" />
      <div className="container">
        <img src="image.jpg" alt="image"/>
        <button className="btn" onClick={handleOpenAd}>Join now</button>
      </div>
    </>
  )
}
