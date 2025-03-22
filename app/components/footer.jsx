import Image from "next/image";

export default function Footer() {
    return(
        <footer className="w-full bg-red-elote flex flex-col items-center justify-center mt-10">
            <div className="my-5">
            <h3 className="text-white font-bold text-2xl mb-4">Redes sociales:</h3>
            <div className="flex justify-around items-center">
                <Image src="/icons/facebook.svg" width={50} height={50} alt="icon facebook" />
                <Image src="/icons/instagram.svg" width={50} height={50} alt="icon instagram" />
            </div>
            </div>
            <div className="my-5">
            <h3 className="text-white font-bold text-2xl text-center mb-4">Sucursales:</h3>
            <div className="flex">
                <Image src="/icons/maps.svg" className="mr-2" width={20} height={20} alt="icon maps" />
                <p className="text-white">Sucursal San Jerónimo</p>
            </div>
            <div className="flex">
                <Image src="/icons/maps.svg" className="mr-2" width={20} height={20} alt="icon maps" />
                <p className="text-white">Sucursal San Pedro</p>
            </div>
            </div>
            <div className="text-center">
            <p className="text-white mb-2">Terminos y condiciones.</p>
            <p className="text-white mb-2">Teléfono: +52 1 8128879985</p>
            <p className="text-white mb-2">theeloteco23@gmail.com</p>
            <p className="text-white mb-10">Todos los derechos reservados por el autor.</p>
            </div>
            <div className="py-20">
            <Image src="/img-mobile/logo-white.png" width={200} height={200} alt="logo The Elote Co" />
            <p className="mt-2 text-white text-4xl font-bold">The Elote Co.</p>
            </div>
            <Image src="/img-mobile/bg-footer.png" alt="Background footer" width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}/>
        </footer>
    )
}

