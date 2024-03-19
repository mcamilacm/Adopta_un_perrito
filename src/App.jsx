import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Header from './components/Header';
import Tags from './components/Tags';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header 
    title ="Adopta un perrito" />
    <div className= "bigcomponent">
    <MyCard
     image ="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg"
     title = "Bartolo" 
     description ="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
     buttonText= "Salchicha"
     
     >
      
     </MyCard>
       <MyCard
     image ="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg"
     title = "Tommy"
     description ="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
     buttonText= "Pomerania"
     ></MyCard>
       <MyCard
     image ="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
     title = "Chispa"
     description ="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
     buttonText= "Golden"
     ></MyCard>
       <MyCard
     image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO4erNhFuKmV1TNly5fu8RbSFftERnpUCUg&usqp=CAU"
     title = "Ojitos"
     description ="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
     buttonText= "Pug"
     ></MyCard>
     </div>
  
     <Footer text="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
     

    </>
  )
}

export default App
