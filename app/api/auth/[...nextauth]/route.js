import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: ''
        })
    ],
    async session({ session }) {

    },
    async signIn({ signin }) {

    }
})

export { handler as GET, handler as POST };