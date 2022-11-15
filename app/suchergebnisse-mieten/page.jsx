import Filter from "./filter";
import SuchergebnisseMietenListe from "./suchergebnisse";


export default function SuchergebnisseMieten (){
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Filter />
         
            <SuchergebnisseMietenListe />
            <div>Bonus: Pagination</div>
        </div>
    )
}