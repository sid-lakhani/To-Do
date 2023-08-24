import React, { useState, useRef, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'

export default function useFetchTodos() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [todos, setTodos] = useState(null)

    const { currentUser } = useAuth()
    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, "users", currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    console.log(docSnap.data())
                }
                if (docSnap.exists) {
                    console.log("oopsie")
                }
            } catch (err) {
                setError("Failed to load Todos")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { loading, error, todos }
}