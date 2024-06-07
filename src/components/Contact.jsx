import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='pt-20 w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b38fe819-4ff7-4e08-a1a8-b81ba50cad1b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline text-gray-300 flex justify-center'>Contact</p>
                <p className='text-gray-300 py-4 flex justify-center'>Feel free to shoot me an email - kiranmanikonda123@gmail.com</p>
            </div>
            <input className='bg-[#edebeb] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#edebeb]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#edebeb] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact