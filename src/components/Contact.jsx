import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='pt-20 w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b38fe819-4ff7-4e08-a1a8-b81ba50cad1b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline text-gray-300 flex justify-center'>Contact</p>
                <p className=' text-gray-300 py-4 justify-center' style={{wordBreak: 'break-word', textAlign: 'center'}}>
                  <p>
                    Feel free to shoot me an email - kiranmanikonda123@gmail.com
                  </p>
                </p>
            </div>
            <input className='bg-[#d3d3d3] p-2 placeholder-gray-800' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#d3d3d3] placeholder-gray-800' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#d3d3d3] p-2 placeholder-gray-800' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact