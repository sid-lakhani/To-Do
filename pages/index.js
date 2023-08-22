import Login from '@/components/Login'
import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '../context/AuthContext'
import UserDashboard from '@/components/UserDashboard'

export default function Home() {
  const { currentUser } = useAuth()

  return (
    <>
      <Head>
        <title>To-Do</title>
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </>
  )
}
