const emailField = document.getElementById('email');

// Ajoutez ceci en haut de votre fonction initContactForm()
const emailError = document.createElement('div');
emailError.id = "emailError";
emailError.style.color = "red";

// Trouvez votre élément email et ajoutez-y le div d'erreur
const emailElement = contactForm.elements.email;
emailElement.parentNode.insertBefore(emailError, emailElement.nextSibling);


export function initContactForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModalButton");
    const span = document.getElementsByClassName("close")[0];

    if (!contactForm || !modal || !btn || !span) {
      console.error('Un des elements requis n\'a pas ete trouve');
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

    emailField.addEventListener('input', () => {
      const errorMessageElement = document.getElementById("error-message");
      errorMessageElement.textContent = "";
    });

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
        message: contactForm.elements.message.value,
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
    
      const jsonResponse = await response.json(); // Supposons que le serveur retourne du JSON
    
      if (jsonResponse.success === 'Formulaire envoyé avec succès') {
        console.log(jsonResponse.success);
        alert("Formulaire envoyé!");
        closeModal();
        resetForm();
      } else {
        throw new Error(`Erreur serveur : ${JSON.stringify(jsonResponse)}`);
      }
    
    } catch (error) {
      const errorMessageElement = document.getElementById("error-message");
      
      if (error.message.includes("duplicate_email")) {
        errorMessageElement.textContent = "Email déjà existant";
      } else {
        console.error('Erreur:', error);
        errorMessageElement.textContent = error.message;
      }
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
