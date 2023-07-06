//firebase & config
import { db } from "../firebase/config"
import { doc, deleteDoc } from "firebase/firestore"

//router
import { useNavigate } from "react-router-dom"

export const useDeleteDoc = () => {
	const navigate = useNavigate()

	const deleteDocument = async (id) => {
		const ref = doc(db, "articles", id)

		try {
			await deleteDoc(ref)
			navigate("/")
		} catch (err) {
			console.log(err.message)
		}
	}
	return { deleteDocument }
}
