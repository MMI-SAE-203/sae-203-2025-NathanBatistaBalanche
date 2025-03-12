import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allFilmSortedByDiffusion(){
    const records = await pb.collection('films').getFullList({
        sort: 'datediffusion' 
    })
    return records
}

export async function allAnimationByDiffusion(){
    const records = await pb.collection('activites').getFullList({
        sort: 'dateheure',
    })
    return records
}

export async function allInviteSortedByNom(){
    const records = await pb.collection('invites').getFullList({
        sort: 'nom'
    })
    return records
}

export async function filmById(id){
    const record = await pb.collection('films').getOne(id)
    return record;
}

export async function animationById(id){
    const record = await pb.collection('activites').getOne(id)
    return record;
}

export async function inviteById(id){
    const record = await pb.collection('invites').getOne(id)
    return record;
}

export async function getAnimationByAnimateurId(id) {
    const records = await pb.collection('activites').getFullList({
        filter: `animateurs.id = "${id}"`, 
        expand: 'animateurs', 
    });
    return records;
}

export async function getAnimationByAnimateurNom(id) {
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