import Image from 'next/image'
import fs from 'fs/promises'
import path from "path";

async function getData() {
  const res = await fetch(
    "https://my-json-server.typicode.com/dixit-kmt/allo-health/data"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return (
    <main>
      <div >
        <h1>Employee Of The Month</h1>

        <div >
          <h3>{data.name}</h3>
          <h6>{data.position}</h6>
          <img src={data.image} alt="employee" />
          <p>{data.description}</p>
        </div>
      </div>
    </main>
  );
}