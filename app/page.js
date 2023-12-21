"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import uniqid from "uniqid";
import sha from "sha256";


export default function Home() {
  const router = useRouter()
  const cid = useSearchParams().get("clickId")
  const zid = useSearchParams().get("zoneId")

  const getParams = () => {
    const udid = uniqid()
    const tid = sha(udid + new Date())
    const max = 5
    const min = 1
    const price = Math.floor(Math.random() * (max - min)) + min
    return { udid, tid, price }
  }

  const { udid: udid1, tid: tid1, price: price1 } = getParams()
  const { udid: udid2, tid: tid2, price: price2 } = getParams()

  const handleOpenAd = () => {
    router.push(`/redirect?clickid=${cid}&url=https://galxe.com/nearapac/campaign/GCsXnUeoWi`)
  }

  return (
    <>
      {/*<img src="https://backend-dev.lunargumble.lol/api/events/pixel?cid=click&id=6&advertiser_id=9&variable=personal&value=10&tid=11&udid=22" border="0" width="1" height="1" />*/}
      {/*<img src="https://backend-dev.lunargumble.lol/api/events/pixel?cid=&id=5&advertiser_id=9&variable=personal&value=109&tid=tx10000&udid=udid1000" border="0" width="1" height="1" />*/}
      {/*<img*/}
      {/*  src={`https://backend-dev.lunargumble.lol/api/events/pixel?cid=${cid}&id=9&advertiser_id=2&variable=homepage_neargiveaway&value=${price1}&tid=${tid1}&udid=${udid1}`}*/}
      {/*  border="0" width="1" height="1"/>*/}
      <img src="https://backend-dev.0xseen.com/api/events/pixel?cid=&id=22&advertiser_id=21&variable=custom&value=20&tid=0x000&udid=0x001" border="0" width="1" height="1" />
      <div className="container">
        <img src="image.jpg" alt="image"/>
        <button className="btn" onClick={handleOpenAd}>Join now</button>
      </div>
    </>
  )
}
