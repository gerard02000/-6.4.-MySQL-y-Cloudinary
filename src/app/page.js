import Link from 'next/link'
import { imgRetrieve } from '@/lib/actions'


export default async function Home() {

  return (
    <section>
      <h1>Página de inicio</h1>
      <hr />
      <Link href={"/articulos"}>Listado de artículos</Link>      
    </section>
  )
}
