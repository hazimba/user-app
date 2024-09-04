"use client"
import { useState, useEffect } from "react"

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ehdqrwqecdsipekyamfh.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoZHFyd3FlY2RzaXBla3lhbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NjcyNzEsImV4cCI6MjA0MTA0MzI3MX0.KZktDv5Ax9AGstJVo3FqHQdP9urn0o19ctq3AB0vDKQ"

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const Dashboard = () => {
    
    const [user, setUser] = useState<any>([])

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const { data } = await supabase.from("user").select('*')
        console.log('123', data)
        setUser(data)
    }
    console.log('data', user)

    return <></>
}
export default Dashboard