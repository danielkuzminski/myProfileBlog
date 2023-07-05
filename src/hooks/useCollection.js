//react
import { useState, useEffect } from "react";

//firebase & config
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const ref = collection(db, c)

        const unsub = onSnapshot(ref, ((snapshot) => {
            let results = []

            snapshot.docs.forEach(doc => {
                results.push({id: doc.id, ...doc.data()})
            })
            setData(results)
        }))
            

        return () => unsub()
    },[c])
    return {data}
}