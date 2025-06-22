import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="https://lh3.googleusercontent.com/fife/ALs6j_GyIYgKO0g5trNli3lXrYXbhluKL6_k3QiB38ndmfGhQyWkmH0xZYA12LkjnoknBTd32LlOeIRhShjGS2BG1TvdbGBo3eCAsex2xgzKA6TZysA3ivnKYR1pikpw82MXcauKVhEFnYV8CVsOIbSlsfYOeiNVpOz_OYQZd53L-T1KPSgy6IU8hJOdWxRBiqS5BKEp74qbioRxB7j4p6xgpl8BNYuvjAgqR8m8WRAy18AYDgNzUzI0vbxO2JYoAb3qLREAgxJ6OJA-KGrGOiJSeaIiaqJMRJVEGCLmwICi5j4fF6wHUC_6_6dywER1JEkyn1Ed16pkX8sqwPrTKS2cIcW-UU-rGpPmemTN7p60fNnAv93lEkhs5YxwCGNy4hkYO-9KMwApA24QUL1c0nyVpZjUgvlzQffdAunr79JfN5kROOyJ3eyNTSBnEIbbX_8vwTm5ufcd4EJpYtPZpKqVCbjHA3gvHG0XEgcb4qy7XkPqqJUb64nHbCexGtFBk18O5avyxjidJUNrk6wWjR73AThZidm7cM-rX-dC1bUxeO8e7MgHf7dt4axdHQ-X-VR5GxB6DtHovzFMFSXd5Nsme2xax32kH7UmLQIY8Y1LZMIMqj5wzIwwThwXMLMhePvLVGCGkWOucIa7_UM3Ny6pyhSBXayDZJvG-JLf2W0wveeidm7KMW9KaQuaXUHf4sDogzSWmPYW7ffP-VGP1csOG0iRAvQxFH90Je4oueAyrVln5POATyKBzfT-bJUBEKTy_dM9d0jjIsueJFsj0hRlClgSqnWUMBMc7YhbVRN2JY1vdUS_1GBYQV-EWjQQRtWw089s0NkA_3pJOAlpO8FGusZhAeFduQn9c964Ijs7xrNuBHtoRAf-ro7J0IyUYBRH0JrB6m5VqACROACLUrT6MtE2-MipreGtDBFT2m6c9jsftD_ubKWnX-bGyTKc32dh0WaTPIX6RcbHjCAtgZb4Pz0y1uwX19HPHEsQEegr4TPHG-FUdNVn-iw-DvNtu1Kj0h6VAZ319LCdjrWrTfm-psOSN55IImDKwdujRuMY1nHC4uBH7IXZYmyhl-dH4QuVRcosAEW_Ir_HConI1Ox_vYByfVFQCRRjEDwjfIFGxnxicKx9vlpjg8zquWalBdrV1HLQEFhVeH9DLDtBJprSvgAhkuptsPSGQyXuymvfCZBJeLVN8xFAw1grhvfk1VKCFCqYlRbqdsxsC2Pnyx1y28Au2TB_YHAao97xeaC8YyIMulPH0y0DSzlrV5lcurFEk9EEu1lJ3FVn44vNpgxTymiASuOq3Y_ILYg7hO5sXAVY-D0hRaqWgxOTJLBePrvY3Iu8z1QPLRQWZlwgmSlzsGh2TyrcOdMgpLx9-buKz3oFuHTWA29HodEdh2EwNMcGkPczObdAjIGIy7DINfHKfxSTpOGSlKUrjItuXL3yhLUXsDxbhOs38EcJIsoY6i7UYHbj7Ipx5CIlmU-1AE8mFSnZXkMLBBlQ6wQpfHuwHhsOQ2YHkSeJ9X0P237pd6dg0vPlgyxcKcbBQxssjS-irpnVZLlLnM-L7-IN8WriGhaF80tS0jUq8AxuaDCtPzNt73cZoRlIZetzRAr3VVwM5A=w3114-h2396" 
            alt="Development Company Logo" 
            width={50} 
            height={50}
          />
          <span className="ml-2 text-xl font-semibold text-gray-800">Comfort Development Limited</span>
        </div>
      </div>
    </header>
  )
}

