"use client"

import { useRouter } from 'next/navigation'
import uniqid from "uniqid";
import { uuid } from "uuidv4";
import sha from "sha256";

export default function Home() {
  const uuid = uuid()
  const cid = uniqid()
  const tid = sha(uuid + new Date())
  const router = useRouter()


  const handleOpenAd = () => {
    router.push(`/redirect?url=https://galxe.com/nearapac/campaign/GCsXnUeoWi`)
  }

  return (
    <>
      {/*<img src={`https://www.pixelhere.com/et/event.php?advertiser=212168&cid=${cid}&id=645772&udid=${uuid}&variable=anhcuongg94@gmail.com&value=1&tid=${tid}`} border="0" width="1" height="1" />*/}
      <img src="https://www.pixelhere.com/et/event.php?advertiser=212168&cid=169042929322220TVNTV428847668204V61&id=898745&value=1" border="0" width="1" height="1" />
      <div className="container">
        <img src="image.jpg" alt="image"/>
        <button className="btn" onClick={handleOpenAd}>Join now</button>
      </div>
    </>
  )
}
