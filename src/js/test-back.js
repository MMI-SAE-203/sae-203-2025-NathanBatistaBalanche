import { allFilmSortedByDiffusion } from "./backend.mjs";
import { allAnimationByDiffusion } from "./backend.mjs";
import { allInviteSortedByNom } from "./backend.mjs";
import { filmById } from "./backend.mjs";
import { animationById } from "./backend.mjs";
import { inviteById } from "./backend.mjs";
import { getInviteByFilmId } from "./backend.mjs";
import { getAnimationByAnimateurId } from "./backend.mjs";
import { addNewFilm } from "./backend.mjs";
import { addNewAnimation } from "./backend.mjs";
import { addNewInvite } from "./backend.mjs";
import { updateFilmById } from "./backend.mjs";
import { updateAnimationById } from "./backend.mjs";
import { updateInviteById } from "./backend.mjs";
import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

//try {
//    const records = await allFilmSortedByDiffusion() ;
//    console.log(JSON.stringify(records, null, 2)) ;
//    } catch (e) {
//    console.error(e) ;
//    }

//try {
//    const records = await allAnimationByDiffusion() ;
//    console.log(JSON.stringify(records, null, 2)) ;
//    } catch (e) { 
//    console.error(e) ;
//    }

//try {
//    const records = await allInviteSortedByNom() ;
//    console.log(JSON.stringify(records, null, 2)) ;
//    }
//catch (e) { console.error(e) ;
//}

//try {
//    const records = await filmById('lo18r39kak6bisq');
//    console.log(records) ;
//    }
//catch (e) { console.error(e) ;
//}

try {
    const records = await getInviteByFilmId('lo18r39kak6bisq');
    console.log(records);
}
catch (e) { console.error(e);
}

//try {
//    const records = await inviteById('na70un1lt75kx42');
//    console.log(records);
//}
//catch (e) { console.error(e);
//}//

//try {
//    const records = await getAnimationByAnimateurId('e66z48932l606ar');
//    console.log(records);
//} catch (e) {
//    console.error(e);
//}

//try {
//    const records = await getAnimationByAnimateurNom('Dubois');
//    console.log(records);
//} catch (e) {
//    console.error(e);
//}

//try {
//    const records = await addNewFilm({
//        nom: 'Le film de la mort',
//        datediffusion: '2024-10-31 22:00:00',
//        duree: '1h22',
//        langue: 'Anglais',
//        production: 'Killer Productions',
//        synopsis: 'Un film d\'horreur',
//    });
//    console.log(records);
//} catch (e) {
//    console.error(e);
//}

//try {
//    const records = await addNewAnimation({
//        nom: 'Le film de la mort',
//        dateheure: '2024-10-31 22:00:00',
//        description: 'Description',
//        style: 'Expo',
//    });
//    console.log(records);
//} catch (e) {
//    console.error(e);
//}

//try {
//    const records = await addNewInvite({
//        nom: 'Le film de la mort',
//        profession: 'Jean',
//        biographie: '?',
//        wikipedia: 'fr.wikipedia.org'
//    });
//    console.log(records);
//} catch (e) {
//    console.error(e);
//}

//try {
//    const records = await updateFilmById('lo18r39kak', {
//        nom: 'Le film de la mort',
//        datediffusion: '2024-10-31 22:00:00',
//        duree: '1h22',
//        langue: 'Anglais',
//        production: 'Killer Productions',
//        synopsis: 'Un film d\'horreur',
//    });
//    console.log(records);
//}
//catch (e) { console.error(e); }

//try {
//    const records = await updateAnimationById('tqbj58', {
//        nom: 'Le film de la mort',
//        dateheure: '2024-10-31 22:00:00',
//        description: 'Description',
//        style: 'Expo',
//    }); console.log(records);
//} catch (e) { console.error(e); }

//try {
//    const records = await updateInviteById('na70un1lt75kx42', {
//        nom: 'Le film de la mort',
//        profession: 'Jean',
//        biographie: '?',
//        wikipedia: 'fr.wikipedia.org'
//    }); console.log(records);
//} catch (e) { console.error(e); }