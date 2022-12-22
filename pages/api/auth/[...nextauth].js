import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signIn } from '../../../app/services/auth';




export const authOptions = {
    // Configure one or more authentication providers
    pages: {
        // signIn: '/auth/signin',
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in with Email',
            credentials: {                
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                /**
                 * This function is used to define if the user is authenticated or not.
                 * If authenticated, the function should return an object contains the user data.
                 * If not, the function should return `null`.
                 */
                if (credentials == null) return null;
                /**
                 * credentials is defined in the config above.
                 * We can expect it contains two properties: `email` and `password`
                 */
                try {
                    const { user, jwt } = await signIn({
                        email: credentials.email,
                        password: credentials.password,
                    });                    
               
                    return { ...user, jwt };
                } catch (error) {
                    // Sign In Fail
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
      },
 
    callbacks: {
        //   jwt callback is only called when token is created
        async jwt(props) {           
            const { token, user } = props               
            // Persist the OAuth access_token to the token right after signin
            if (user) {               
                token.user = user
            }
            return token
        },
        // session callback is called whenever a session for that particular user is checked
        async session(props) {          
            const { session, token } = props
            // in above function we created token.user=user
            session.user = token.user
            return session
        }
    }
}
export default NextAuth(authOptions)