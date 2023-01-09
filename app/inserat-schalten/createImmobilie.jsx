// Backend Calls (Daten Holen für die Immobilie, die der User angeklickt hat. Die ID ist in pramas.slug
async function postImmobilie(immobilie) {
    // if no id, throw error
    if (!immobilie) {
        throw new Error('No Immobilien Id provided');
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/immobilen`
        , { method: 'POST', body: JSON.stringify({ data: immobilie }) });

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to create immobile');
    }

    return res.json();
}

export default async function CreateImmobilie({ immobilie }) {


    const response = await postImmobilie(immobilie);
    // console.log("🚀 ~ file: createImmobilie.jsx:27 ~ CreateImmobilie ~ response", response)

    return (<div>immobile wurde angelegt</div>)
}