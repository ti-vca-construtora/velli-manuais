import Image from 'next/image'
import Link from 'next/link'
import {
  AiOutlineInstagram,
  AiOutlineTool,
  AiOutlineUsergroupAdd,
  AiOutlineYoutube,
} from 'react-icons/ai'
import { HiOutlineDownload } from 'react-icons/hi'
import { RiCustomerService2Fill } from 'react-icons/ri'
import VcaLogo from '../../public/marca_vca.png'
import velliLogo from '../../public/velli.png'

const Home = () => {
  return (
    <main className='bg-[url("/assets/bg.webp")] min-h-screen bg-cover h-fit pb-16 overflow-hidden text-white text-center flex flex-col items-center font-sans tracking-wide gap-10'>
      <header className="w-screen h-20 bg-gray-800 flex justify-center items-center">
        <Link href={'https://www.vcaconstrutora.com.br/'}>
          <Image src={VcaLogo} alt="VCA logo" />
        </Link>
      </header>
      <picture className="w-[240px]">
        <Image src={velliLogo} alt="J Pedral logo" />
      </picture>
      <section className="flex flex-col gap-4 items-center justify-center font-bold">
        <div className="flex flex-col gap-2">
          {/* <Link
            target="_blank"
            href={'guia-reforma.pdf'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Guia de reforma</p>
          </Link> */}
          <Link
            target="_blank"
            href={'MEMORIAL VELLI.pdf'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Memorial descritivo</p>
          </Link>
          <Link
            target="_blank"
            href={'manual-areas-comuns.pdf'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Manual das áreas comuns</p>
          </Link>
          <Link
            target="_blank"
            href={'manual-prop.pdf'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Manual do proprietário</p>
          </Link>
          <Link
            target="_blank"
            href={'INSTALAÇÕES ELÉTRICAS.zip'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Plantas elétricas</p>
          </Link>
          <Link
            target="_blank"
            href={'ALVENARIA ESTRUTURAL.zip'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Plantas estruturais</p>
          </Link>
          <Link
            target="_blank"
            href={'GLP.zip'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Plantas de gás</p>
          </Link>
          <Link
            target="_blank"
            href={'INSTALAÇÕES HIDROSSANITÁRIAS.zip'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Plantas hidrossanitárias</p>
          </Link>
                    <Link
            target="_blank"
            href={'ARQUITETONICO VELLI.zip'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Plantas arquitetônicas</p>
          </Link>
          <Link
            target="_blank"
            href={'ESTRUTURA.zip'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Estruturas</p>
          </Link>
          <Link
            target="_blank"
            href={'FUNDAÇÕES.zip'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <HiOutlineDownload />
            <p>Fundações</p>
          </Link>

          <Link
            target="_blank"
            href={'https://wa.me/557730251200'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <RiCustomerService2Fill />
            <p>Central de atendimento com o cliente</p>
          </Link>
          <Link
            target="_blank"
            href={'https://vca.cvcrm.com.br/cliente/'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <AiOutlineUsergroupAdd />
            <p>Portal do Cliente</p>
          </Link>
          <Link
            target="_blank"
            href={'https://posobra.vcaconstrutora.com.br/'}
            className="flex gap-4 shadow-md items-center bg-main-green hover:bg-lighter-green hover:px-8 sm:hover:px-10 transition-all duration-100 cursor-pointer text-xs sm:text-base w-80 sm:w-[26rem] px-6 py-4 rounded"
          >
            <AiOutlineTool />
            <p>Abrir assistência técnica</p>
          </Link>
        </div>
        <div className="flex gap-4 mt-6">
          <Link
            target="_blank"
            href={'https://www.instagram.com/vcaconstrutora/'}
            className="text-3xl shadow-xl p-1 cursor-pointer rounded-full bg-slate-200 transition-colors duration-200 text-slate-950 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white"
          >
            <AiOutlineInstagram />
          </Link>
          <Link
            target="_blank"
            href={'https://www.youtube.com/@VCAConstrutora'}
            className="text-3xl shadow-xl p-1 cursor-pointer rounded-full bg-slate-200 transition-colors duration-200 text-slate-950 hover:bg-[#FF0000] hover:text-white"
          >
            <AiOutlineYoutube />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
