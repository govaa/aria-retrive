import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUser, getUserById, updateLastSigninTime } from "@/hooks/auth";
import bcrypt from "bcrypt";
const env_secret = process.env.NEXTAUTH_SECRET;
const secret =
  env_secret ||
  "6092766a5ece0399baebd007d998d5d2a05f6ac2e5b082192eef4d22d0fdd5a5";
export const authOptions = {
  secret: secret,
  pages: {
    signIn: "/cms-login",
  },
  debug: process.env.NODE_ENV !== "production",
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const user = await findUser(email);
        if (!user) throw new Error("User not found");
        const compare_pws = await bcrypt.compare(password, user.password);
        if (email !== user.email || !compare_pws) {
          const error = new Error("Invalid password");
          error.statusCode = 401;
          throw error;
        }
        if (user.isClient == true) {
          const error = new Error("Unauthorised");
          error.statusCode = 401;
          throw error;
        }
        return user;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      if (token && session?.user) {
        const selected = { ...token };
        if (selected.jiti) delete selected.jiti;
        delete selected.iat;
        delete selected.exp;
        session.user = { ...session.user, ...selected, uid: token?.sub };
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.role = user.role;

        // if ("allowed_orgs" in user) {
        //   token.allowed_orgs = user.allowed_orgs;
        // }
      } else if (token?.sub) {
        const user = await getUserById(token.sub);
        token.role = user.role;

        // if ("allowed_orgs" in user) {
        //   token.allowed_orgs = user.allowed_orgs;
        // }
        const {
          firstName,
          lastName,
          username,
          email,
          org,
          tel,

          address,
          name,
        } = user;
        const extra = {
          firstName,
          lastName,
          username,
          email,
          org,
          tel,

          address,
          name,
        };
        token = { ...token, ...extra };
      }

      return token;
    },
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
    },
    async signOut(message) {
      /* on signout */
    },
    async createUser(message) {
      /* user created */
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
    },
    async session(obj) {
      if (process.env.NODE_ENV === "production" && obj?.token?.sub) {
        await updateLastSigninTime(obj.token.sub);
      }
    },
  },
  logger: {
    error(code, metadata) {
      console.log(code, metadata);
    },
    warn(code) {
      console.log(code);
    },
    debug(code, metadata) {
      console.log(code, metadata);
    },
  },
};
export default NextAuth(authOptions);
