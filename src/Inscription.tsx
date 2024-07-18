import './App.css'
import MainImg from './assets/login_img.png'
import Link_Logo from "./assets/link_logo.png"
import Goog_Logo from "./assets/goog_logo.png"

function App() {

  return (
    <div className='flex h-screen'>
      <div className="flex-grow flex flex-col bg-white">
        <div className='flex flex-col items-center justify-center h-full'>
          <div className="flex flex-col h-[149px] w-[480px] gap-[16px] spacing">
            <div className="flex text-[#1E1E1E] roboto text-[32px] font-[900]">🎓 Tu étais indispensable</div>
            <div className='flex text-[#808080] roboto text-[20px] font-[400]'>Intégrez un réseau solide pour découvrir l'entreprise idéale pour votre stage.</div>
          </div>
          <div className="flex gap-[10px] spacing">
            <div className="flex rounded-[10px] border-[1px] border-[#E4E4E4] gap-[10px] py-[10px] w-[426px] h-[44px] justify-center items-center cursor-pointer">
              <div><img src={Link_Logo} alt="" className='h-[24px] w-[24px] m-w-[100%] m-h-[100%]'/></div>
              <div className='singularText text-[#1E1E1E]'>Je me connecte avec Linkedin</div>
            </div>
            <div className="flex rounded-[10px] border-[1px] border-[#E4E4E4] gap-[10px] py-[10px] h-[44px] w-[44px] justify-center items-center cursor-pointer">
              <img src={Goog_Logo} alt="" className='h-[24px] w-[24px]'/>
            </div>
          </div>
          <div className="flex items-center gap-[16px] spacing">
            <div className='w-[213px] bg-[#E4E4E4] h-[1px]'></div>
            <div className='singularText text-[#808080] font-[500]'>OU</div>
            <div className='w-[213px] bg-[#E4E4E4] h-[1px]'></div>
          </div>
          <div className="flex gap-[20px] rounded-[11px] p-[8px] spacing">
            <div className="flex w-[222px] rounded-[10px] py-[12px] px-[20px] gap-[10px] bg-[#4285F4] cursor-pointer"><button className='h-full w-full singularText text-white font-[500]'>Connexion</button></div>
            <div className="flex w-[222px] rounded-[10px] py-[12px] px-[20px] gap-[10px] cursor-pointer"><button className='h-full w-full singularText text-[#808080] font-[500]'>Inscription</button></div>
          </div>
          <form action="">
            <div className="flex flex-col">
                <div className="flex gap-[20px]">
                    <div className="flex flex-col gap-[6px] gap-[20px] w-[230px] spacing">
                        <label htmlFor="email" className='w-full h-[18px] singularText font-[500] text-[15px] text-[#4F4F4F]'>Prénom</label>
                        <input type="email" id='email' className='w-full py-[12px] px-[20px] rounded-[10px] border-[1px] border-[#BBBBBB] gap-[15px] placeholder:text-[#BDBDBD] placeholder:text-[16px] placeholder:font-[400]' placeholder='John'/>
                    </div>
                    <div className="flex flex-col gap-[6px] gap-[20px] w-[230px] spacing">
                        <label htmlFor="email" className='w-full h-[18px] singularText font-[500] text-[15px] text-[#4F4F4F]'>Nom</label>
                        <input type="email" id='email' className='w-full py-[12px] px-[20px] rounded-[10px] border-[1px] border-[#BBBBBB] gap-[15px] placeholder:text-[#BDBDBD] placeholder:text-[16px] placeholder:font-[400]' placeholder='Doe'/>
                    </div>
                </div>
                <div className="flex flex-col gap-[6px] w-[480px] spacing">
                    <label htmlFor="email" className='w-full h-[18px] singularText font-[500] text-[15px] text-[#4F4F4F]'>Adresse e-mail</label>
                    <input type="email" id='email' className='w-full py-[12px] px-[20px] rounded-[10px] border-[1px] border-[#BBBBBB] gap-[15px] placeholder:text-[#BDBDBD] placeholder:text-[16px] placeholder:font-[400]' placeholder='john.doe@mail.com'/>
                </div>
                <div className="flex flex-col gap-[6px] w-[480px] spacing">
                    <label htmlFor="password" className='w-full h-[18px] singularText font-[500] text-[15px] text-[#4F4F4F]'>Mot de passe</label>
                    <input type="password" id='password' className='w-full py-[12px] px-[20px] rounded-[10px] border-[1px] border-[#BBBBBB] gap-[15px] placeholder:text-[#BDBDBD] placeholder:text-[16px] placeholder:font-[400]' placeholder='•••••••••••••••'/>
                </div>
                <div className="flex gap-[6px] spacing cursor-pointer">
                    <input type="checkbox" id="checkbox" className='h-[19px] w-[19px] border-[1px] border-[#BBBBBB]'/>
                    <label htmlFor="checkbox" className='singularText text-[#4F4F4F]'>J'accepte les <span className='underline'>Conditions Générales d'Utilisation</span></label>
                </div>
                <div className="flex w-[480px] gap-[10px] py-[12px] px-[20px] rounded-[10px] bg-[#4285F4] cursor-pointer"><button className='w-full h-full singularText text-white font-[500]'>Je me connecte</button></div>
            </div>
          </form>

        </div>
      </div> 
      <div className="flex h-full">
        <img src={MainImg} alt="" className='object-contain h-full'/>
      </div>
    </div>
  )
}

export default App
