//react
import { useEffect, useState } from "react";

//firebase & config
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const useFirebaseData = (c) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const ref = collection(db, c)

        getDocs(ref)
            .then((snapshot) => {
                let results = []
            
                snapshot.docs.forEach(doc => {
                    
                    results.push({id: doc.id, ...doc.data()})
                })
            setData(results)
        })
    }, [c])
    return {data}
}