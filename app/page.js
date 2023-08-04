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
      <img src={`https://www.pixelhere.com/et/event.php?advertiser=212168&cid=${cid}&id=898745&value=1`} border="0" width="1" height="1" />
      <img src="https://backend-dev.lunargumble.lol/events/pixel?cid=click&id=6&advertiser_id=9&variable=personal&value=10&tid=11&udid=22" border="0" width="1" height="1" />
      <img src="https://backend-dev.lunargumble.lol/events/pixel?cid=&id=5&advertiser_id=9&variable=personal&value=109&tid=tx10000&udid=udid1000" border="0" width="1" height="1" />
      <div className="container">
        <img src="image.jpg" alt="image"/>
        <button className="btn" onClick={handleOpenAd}>Join now</button>
      </div>
    </>
  )
}
