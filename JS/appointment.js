document.addEventListener('DOMContentLoaded', function() {
  const appointmentForm = document.getElementById('appointmentForm');
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // ÇáÍÕæá Úáì ÈíÇäÇÊ ÇáäãæĞÌ
      const formData = new FormData(appointmentForm);
      formData.append('_subject', 'ÍÌÒ ãæÚÏ ÌÏíÏ İí ÚíÇÏÉ ÌĞæÑ');
      
      // ÅÑÓÇá ÇáÈíÇäÇÊ ÈÇÓÊÎÏÇã ÎÏãÉ FormSubmit
      fetch('https://formsubmit.co/100ggking@gmail.com', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          alert('Êã ÍÌÒ ãæÚÏß ÈäÌÇÍ! ÓäÊæÇÕá ãÚß ŞÑíÈğÇ.');
          appointmentForm.reset();
        } else {
          throw new Error('ÍÏË ÎØÃ İí ÅÑÓÇá ÇáäãæĞÌ.');
        }
      })
      .catch(error => {
        alert('ÚĞÑğÇ¡ ÍÏË ÎØÃ: ' + error.message);
      });
    });
  }
});