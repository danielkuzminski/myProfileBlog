//react
import { useState, useEffect } from "react";

//firebase & config
import { query,collection, getDocs, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirestoreQuery = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const ref = collection(db, 'articles')

        const q = query(ref, where('tag', '==', term))

        getDocs(q)
            .then((snapshot) => {
                let results = []

                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setData(results)
            })
    },[])
    return {data}
}