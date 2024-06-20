import html5 from './html5-logo-31815.png'
import css3 from './css3.png'
import js from './javascript-39420.png'
import py from './icons8-python-48.png'
import mysql from './icons8-mysql-logo-48.png'
import reactlg from './icons8-react-native-48.png'
import twcss from './icons8-tailwind-css-48.png'

function Card2(){
    return (
            <div className="card bg-black">
                <h2 className='font-bold text-xl text-gray-400 py-4 pb-6 '>Hard Skills</h2>
                <p className='py-6 grid sm:grid-cols-2 gap-20 justify-items-center'>
                    <img className='size-10' src={html5}/>
                    <img className='size-10' src={css3}/>
                    <img className='size-10' src={js}/>
                    <img className='size-10' src={py}/>
                    <img className='size-14' src={mysql}/>
                    <img className='size-10' src={reactlg}/>
                    <img className='size-10' src={twcss}/>
                </p>
            </div>
        );
}

export default Card2  
