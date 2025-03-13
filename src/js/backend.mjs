import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allFilmSortedByDiffusion() {
    try {
            const records = await pb.collection('films').getFullList({
            sort: 'datediffusion',
        });
        const filmsWithPosters = records.map((film) => {
            film.imgUrl = pb.files.getUrl(film, film.poster);
            return film;
        });
        return filmsWithPosters;
    } catch (error) {
        console.error('Une erreur est survenue en récupérant la liste des films', error);
        return [];
    }
}

export async function allAnimationByDiffusion() {
    try {
        const records = await pb.collection('activites').getFullList({
            sort: 'dateheure',
        });
        const activitesWithImages = records.map((activite) => {
            activite.imgUrl = pb.files.getUrl(activite, activite.illustration);
            return activite;
        });
        return activitesWithImages;
    } catch (error) {
        console.error('Une erreur est survenue en récupérant la liste des activités', error);
        return [];
    }
}

export async function allInviteSortedByNom(){
    const records = await pb.collection('invites').getFullList({
        sort: 'nom'
    })
    return records
}

export async function filmById(id) {
    try {
        const record = await pb.collection('films').getOne(id);
        record.imgUrl = pb.files.getUrl(record, record.poster);
        return record;
    } catch (error) {
        console.error('Erreur lors de la récupération du film par ID:', error);
        return null;
    }
}

export async function animationById(id) {
    try {
        const record = await pb.collection('activites').getOne(id);
        record.imgUrl = pb.files.getUrl(record, record.illustration);
        return record;
    } catch (error) {
        console.error(`Une erreur est survenue en récupérant l'animation avec l'ID ${id}`, error);
        return null;
    }
}

export async function inviteById(id) {
    try {
        const record = await pb.collection('invites').getOne(id);
        record.imgUrl = pb.files.getUrl(record, record.photo);
        return record;
    } catch (error) {
        console.error('Erreur lors de la récupération du film par ID:', error);
        return null;
    }
}

export async function getInviteByFilmId(id) {
    const records = await pb.collection('invites').getFullList({
        filter: `films.id = "${id}"`, 
        expand: 'films', 
    });
    return records;
}

export async function getAnimationByAnimateurId(id) {
    const records = await pb.collection('activites').getFullList({
        expand: 'animateurs', 
        filter: `animateurs.nom = "${id}"`, 
    });
    return records;
}

export async function addNewFilm(film){
    const record = await pb.collection('films').create(film)
    return record
}

export async function addNewAnimation(animation){
    const record = await pb.collection('activites').create(animation)
    return record
}

export async function addNewInvite(invite){
    const record = await pb.collection('invites').create(invite)
    return record
}

export async function updateFilmById(id, film){
    const record = await pb.collection('films').update(id, film)
    return record
}

export async function updateAnimationById(id, animation){    
    const record = await pb.collection('activites').update(id, animation)
    return record
}

export async function updateInviteById(id, invite){
    const record = await pb.collection('invites').update(id, invite)
    return record
}

export async function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} à ${hour}:${minute}`;
}