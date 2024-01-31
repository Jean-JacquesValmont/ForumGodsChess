import { useState, useEffect } from 'react'
import { supabase } from '../API/supabase';

const UseFetch = (tableName : string) => {

    const [dataFetch, setDataFetch] = useState<String[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from(tableName).select('*');
                setDataFetch(data)

            } catch (error : any) {
                console.error('Erreur lors de la récupération des données:', error.message);
            }
        }

    fetchData();
  }, []); // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécute une seule fois après le montage du composant

  return (
    dataFetch
  )
}

export default UseFetch