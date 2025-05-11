document.addEventListener('DOMContentLoaded', function() {
  const appointmentForm = document.getElementById('appointmentForm');
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // الحصول على بيانات النموذج
      const formData = new FormData(appointmentForm);
      formData.append('_subject', 'حجز موعد جديد في عيادة جذور');
      
      // إرسال البيانات باستخدام خدمة FormSubmit
      fetch('https://formsubmit.co/100ggking@gmail.com', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          alert('تم حجز موعدك بنجاح! سنتواصل معك قريبًا.');
          appointmentForm.reset();
        } else {
          throw new Error('حدث خطأ في إرسال النموذج.');
        }
      })
      .catch(error => {
        alert('عذرًا، حدث خطأ: ' + error.message);
      });
    });
  }
});
