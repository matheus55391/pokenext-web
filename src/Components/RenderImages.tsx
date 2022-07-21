import Image from "next/image"
import { useEffect } from "react"

type props = {
    load: boolean,
    images: string,
    name: string,
}

export const RenderImage: React.FC<props> = ({
    load,
    images,
    name,
}) =>{

    if(load) {
      return(
        <div>Is Loading...</div>
      )
    }
    else{
        return(
            <div>
                <Image
                    src={images}
                    width={80}
                    height={80}
                ></Image>
                <p>{name}</p>
            </div>
    
        )
    }
  }