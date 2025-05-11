document.addEventListener('DOMContentLoaded', function() {
  const appointmentForm = document.getElementById('appointmentForm');
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // ������ ��� ������ �������
      const formData = new FormData(appointmentForm);
      formData.append('_subject', '��� ���� ���� �� ����� ����');
      
      // ����� �������� �������� ���� FormSubmit
      fetch('https://formsubmit.co/100ggking@gmail.com', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          alert('�� ��� ����� �����! ������� ��� ������.');
          appointmentForm.reset();
        } else {
          throw new Error('��� ��� �� ����� �������.');
        }
      })
      .catch(error => {
        alert('����ǡ ��� ���: ' + error.message);
      });
    });
  }
});