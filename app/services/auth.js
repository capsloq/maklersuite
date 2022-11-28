const strapiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function signIn({ email, password }) {   
   
    const res = await fetch(`${strapiUrl}/api/auth/local`, {
        method: 'POST',
        body: JSON.stringify({ identifier: email, password }),
        headers: { "Content-Type": "application/json" }
    });
   
    const data = await res.json();
    if (res.ok) {
        return data;
    } else {
        throw new Error(data.message);
    }

}