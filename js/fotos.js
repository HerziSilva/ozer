
      // Script para a transição de fotos
      document.addEventListener('DOMContentLoaded', function() {
        const photos = document.querySelectorAll('.profile-photo');
        let currentPhotoIndex = 0;

        function changePhoto() {
          photos[currentPhotoIndex].classList.remove('active');
          photos[currentPhotoIndex].classList.add('transitioning');

          currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;

          setTimeout(() => {
            photos.forEach(photo => photo.classList.remove('transitioning'));
            photos[currentPhotoIndex].classList.add('active');
          }, 500); // Metade do tempo da transição CSS
        }

        // Troca a foto a cada 5 segundos
        setInterval(changePhoto, 5000);
      });
