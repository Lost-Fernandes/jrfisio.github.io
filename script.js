document.getElementById("appointmentForm").addEventListener("submit", function(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var service = document.getElementById("service").value;
    var date = document.getElementById("date").value;

    // Verifica se os campos estão preenchidos
    if (name && phone && service && date) {
        // Monta a URL para o WhatsApp
        var whatsappUrl = `https://api.whatsapp.com/send?phone=5583996750737&text=Olá, meu nome é ${name}. Gostaria de agendar uma consulta de ${service} para o dia ${date}. Meu telefone é ${phone}.`;

        // Redireciona para o WhatsApp
        window.open(whatsappUrl, "_blank");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

function generatePDF() {
    var { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var service = document.getElementById("service").value;
    var date = document.getElementById("date").value;

    // Verifica se os campos estão preenchidos antes de gerar o PDF
    if (name && email && phone && service && date) {
        doc.text("Detalhes da Consulta", 10, 10);
        doc.text(`Nome: ${name}`, 10, 20);
        doc.text(`Email: ${email}`, 10, 30);
        doc.text(`Telefone: ${phone}`, 10, 40);
        doc.text(`Serviço: ${service}`, 10, 50);
        doc.text(`Data da Consulta: ${date}`, 10, 60);

        doc.save("Consulta_Fisioterapia.pdf");
    } else {
        alert("Por favor, preencha todos os campos para gerar o PDF.");
    }
}
