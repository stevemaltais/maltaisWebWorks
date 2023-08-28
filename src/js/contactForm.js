export function initContactForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModalButton");
    const span = document.getElementsByClassName("close")[0];

    if (!contactForm || !modal || !btn || !span) {
      console.error('Un des éléments requis n\'a pas été trouvé');
      return;
    }

    // Fonction pour ouvrir la modale
    function openModal(event) {
      event.preventDefault();
      modal.style.display = "block";
    }

    // Fonction pour fermer la modale
    function closeModal() {
      modal.style.display = "none";
    }

    // Fonction pour réinitialiser le formulaire
    function resetForm() {
      contactForm.reset();
    }

    // Ajouter des écouteurs d'événements pour les boutons
    btn.addEventListener('click', openModal);
    span.addEventListener('click', closeModal);

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Récupération des éléments du formulaire
      const data = {
        name: contactForm.elements.name.value,
        prenom: contactForm.elements.prenom.value,
        email: contactForm.elements.email.value,
        phone: contactForm.elements.phone.value,
      };

     // Envoi de la requête POST au serveur PHP
  try {
   
    const response = await fetch('./server/index.php?action=contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

        if (!response.ok) {
          throw new Error('Échec de la requête');
        }

        const text = await response.text();

        // Traitement de la réponse du serveur
        console.log(text);
        alert("Formulaire envoyé!");

        closeModal();
        resetForm();

      } catch (error) {
        // Traitement des erreurs
        console.error('Erreur:', error);
      }
    });

    // Fermer la modale lorsque l'utilisateur clique en dehors de celle-ci
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal();
      }
    };
  });
}
