import React from 'react'
import RowThreads from './RowThreads'
import data from "../../app/dataTest2"

const ChannelPattern = () => {

    const cardsTitle = data.map(item => {
        return (
            <RowThreads
                key={item.id}
                item={item}
            />
        )
      })
      
  return (
    <div>
        <div className="bg-black text-white text-6xl font-bold p-4 border-t-2">
            <div className='flex justify-between'>
                <h2 className="">ChannelPattern</h2>
                <button className='text-xl border rounded-lg p-2 transform hover:bg-white hover:text-black'>Nouvelle discussion</button>
            </div>
            <p className='text-2xl'>Description du canal</p>
        </div>
        <div>
            <div className='flex bg-gray-500 flex justify-between p-2 '>
                <div className='flex items-center'>
                    <p>Fils de discussion</p>
                </div>
                <div className='flex'>
                    <div className='flex items-center p-2'>
                        <p className='w-32'>Dernière réponse</p>
                    </div>
                    <div className='flex items-center p-2'>
                        <p className='w-20'>Stats</p>
                    </div>
                </div>
            </div>
            {cardsTitle}
        </div>
    </div>
  )
}

export default ChannelPattern