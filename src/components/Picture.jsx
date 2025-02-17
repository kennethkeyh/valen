import React from 'react'
import { foto1,foto2, foto5, foto4, foto6, foto7, foto3} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: foto5, title: 'Neng', description: "Panggilan pertama aku ke kamu, karna kamu sukak HEHE"},   
    { Image: foto2, title: 'Princess', description: "Ini jelas karna, ya??? kamu memang princess!!"},
    { Image: foto1, title: 'Cantik', description: "Bahkan ga perlu liatpun bisa tau"},
    { Image: foto3, title: 'Manies', description: "Senyumnya mengandung gula??"},
    { Image: foto4, title: 'Sayang', description: "HEHE"},
    { Image: foto6, title: 'My love', description: "HEHEHEHEHEHEHEHEHE"},
    { Image: foto7, title: 'Bby', description: "Ketularan, tapi ko seru?"},




  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture
