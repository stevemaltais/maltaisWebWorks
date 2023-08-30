export function initContactForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModalButton");
    const span = document.getElementsByClassName("close")[0];
    const emailField = document.getElementById('email'); // Assurez-vous d'ajouter cette ligne ici

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

    emailField.addEventListener('input', () => {
      const errorMessageElement = document.getElementById("error-message");
      errorMessageElement.textContent = "";
      emailField.classList.remove('error'); // Retirer la classe d'erreur
    });

    // Ajouter des écouteurs d'événements pour les boutons
    btn.addEventListener('click', openModal);
    span.addEventListener('click', closeModal);

    // Ajouter un écouteur d'événement 'invalid' pour chaque champ du formulaire
    const formFields = contactForm.querySelectorAll('.input__field');
    formFields.forEach((field) => {
      field.addEventListener('invalid', (e) => {
        e.target.classList.add('error');  // ajoute la classe 'error'
      });

      // Enlever la classe 'error' si l'utilisateur corrige l'entrée
      field.addEventListener('input', (e) => {
        e.target.classList.remove('error');
      });
    });

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

        const jsonResponse = await response.json();

        if (jsonResponse.success === 'Formulaire envoyé avec succès') {
          alert("Formulaire envoyé! Ces informations seront utilisées exclusivement pour vous contacter et ne seront pas partagées avec des tiers.");

          closeModal();
          resetForm();
        } else {
          throw new Error(`Erreur serveur : ${JSON.stringify(jsonResponse)}`);
        }

      } catch (error) {
        const errorMessageElement = document.getElementById("error-message");

        if (error.message.includes("duplicate_email")) {
          emailField.classList.add('error'); // Ajouter la classe d'erreur
          errorMessageElement.textContent = "Email déjà existant";
        } else {
          emailField.classList.remove('error'); // Retirer la classe d'erreur
          console.error('Erreur:', error);
          errorMessageElement.textContent = error.message;
        }
      }
    });

    // Fermer la modale lorsque l'utilisateur clique en dehors de celle-ci
    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };
  });
}
