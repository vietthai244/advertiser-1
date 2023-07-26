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
      <img src="https://www.pixelhere.com/et/event.php?advertiser=212168&cid=169037000222220TVNTV428847668204V85&id=645772&udid=123456&variable=thai.toviet@gmail.com&value=2&tid=2222222" border="0" width="1" height="1" />
      <div className="container">
        <img src="image.jpg" alt="image"/>
        <button className="btn" onClick={handleOpenAd}>Join now</button>
      </div>
    </>
  )
}
