import DeleteFleur from "./DeleteFleur";

export default async function DeleteFleurButton({ id }) {

   
    const handleDelete = async () => {
        // Appeler la fonction de suppression avec l'identifiant de la fleur
        if(window.confirm("Voulez-vous vraiment supprimer cette fleur ?"))
        {
            await DeleteFleur({ id });
            
        }

    };

    return (
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
            ❌
        </button>
    );
}


