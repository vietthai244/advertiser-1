"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import uniqid from "uniqid";
import sha from "sha256";

export default function Home() {
  const router = useRouter()
  const cid = useSearchParams().get("clickId")
  const zid = useSearchParams().get("zoneId")
  const udid = uniqid()
  const tid = sha(udid + new Date())
  const max = 5
  const min = 1
  const price = Math.floor(Math.random() * (max - min)) + min

  const handleOpenAd = () => {
    router.push(`/redirect?clickid=${cid}&url=https://galxe.com/nearapac/campaign/GCsXnUeoWi`)
  }

  return (
    <>
      <img src={`https://www.pixelhere.com/et/event.php?advertiser=212168&cid=${cid}&id=898745&value=1`} border="0" width="1" height="1" />
      {/*<img src="https://backend-dev.lunargumble.lol/api/events/pixel?cid=click&id=6&advertiser_id=9&variable=personal&value=10&tid=11&udid=22" border="0" width="1" height="1" />*/}
      {/*<img src="https://backend-dev.lunargumble.lol/api/events/pixel?cid=&id=5&advertiser_id=9&variable=personal&value=109&tid=tx10000&udid=udid1000" border="0" width="1" height="1" />*/}

<img src="https://backend-dev.lunargumble.lol/api/events/pixel?cid=11&id=9&advertiser_id=2&variable=111&value=1111&tid=2&udid=22" border="0" width="1" height="1" />
      <img src={`https://backend-dev.lunargumble.lol/api/events/pixel?cid=${cid}&id=11&advertiser_id=2&zid=${zid}&variable=custom&value=${price}&tid=${tid}`} border="0" width="1" height="1" />
      <div className="container">
        <img src="image.jpg" alt="image"/>
        <button className="btn" onClick={handleOpenAd}>Join now</button>
      </div>
    </>
  )
}
