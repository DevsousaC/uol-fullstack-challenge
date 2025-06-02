document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const telephoneInput = document.getElementById('telephone-input');
  const teamRadios = document.querySelectorAll('input[name="selected_team"]');

  form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const gamerName = nameInput.value.trim();
      const email = emailInput.value.trim();
      const telephone = telephoneInput.value.trim();
      
      let selectedTeam = '';
      for (const radio of teamRadios) {
        if (radio.checked) {
          selectedTeam = radio.id === 'av-radio' ? 'Avengers' : 'Justice League';
          break; 
        }
      }

      if (!gamerName || !email || !selectedTeam) {
          alert('Por favor, preencha todos os campos e selecione uma equipe.');
          return;
      }

      const formData = {
          name: gamerName,
          email: email,
          phone: telephone,
          team: selectedTeam
      };
      console.log('Dados a serem enviados:', formData); // Para depuração

      // ATENÇÃO: Substitua 'SUA_URL_DE_API_AQUI' pela URL real do seu back-end
      const apiUrl = 'SUA_URL_DE_API_AQUI'; 
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Dados enviados com sucesso!', result);
          alert('Registro realizado com sucesso! 🎉');
          form.reset();
        } else {  
          const errorData = await response.json(); 
          console.error('Erro ao enviar dados:', response.status, errorData);
          alert(`Erro ao registrar: ${errorData.message || 'Ocorreu um erro desconhecido.'}`);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Não foi possível conectar ao servidor. Verifique sua conexão.');
      }
  });
});