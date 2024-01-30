"use client"

import React, { useState, useEffect } from 'react'
import RowThreads from './RowThreads'
// import data from "../../app/dataTest2"
import { supabase } from '../API/supabase';

const ChannelPattern = () => {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('generalchannel').select('*');

        if (error) {
          console.error(error);
        } else {
          console.log('Données de la table :', data);
          setData(data || []); // Si data est null, définissez-le sur un tableau vide
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.message);
      } finally {
        setLoading(false); // Définir le chargement sur false, que l'opération réussisse ou échoue
      }
    }

    fetchData();
  }, []); // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécute une seule fois après le montage du composant

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  const rowThread = data.map(item => (
    <RowThreads
      key={item.id}
      item={item}
    />
  ));
      
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
            {rowThread}
        </div>
    </div>
  )
}

export default ChannelPattern