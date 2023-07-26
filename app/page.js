"use client"

import { useRouter, useSearchParams } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const params = useSearchParams()


  const handleOpenAd = () => {
    router.push(`/redirect?url=https://galxe.com/nearapac/campaign/GCsXnUeoWi`)
  }

  return (
    <>
      <img src={`https://www.pixelhere.com/et/event.php?advertiser=212168&cid=169036280022220&id=645772&udid=123456&variable=anhcuongg94@gmail.com&value=1&tid=1111111`} border="0" width="0" height="0" />
      <div className="container">
        <img src="image.jpg" alt="image"/>
        <button className="btn" onClick={handleOpenAd}>Join now</button>
      </div>
    </>
  )
}
