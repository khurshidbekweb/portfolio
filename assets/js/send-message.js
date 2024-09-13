window.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('form-contact'),
        btnMessage = document.getElementById('button-message'),
        telegramTokenBot = "7243637585:AAHpFEkQM4WzMtT5GsIq3gjWCK7aDnWRdEY",
        chatId = "6551895968"

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(form)
        const object = {}
        const message = {
            loading: "Loading...",
            success: "Succcess",
            fialer: "Erorr🤷‍♂️"
        }
        formData.forEach((value, key) => {
            object[key] = value
        })

        btnMessage.textContent = message.loading
        
        fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                chat_id: chatId,
                text: ` Name: ${object.Name}
                        Email: ${object.Email} 
                        Subject: ${object.Subject}
                        Message: ${object.Message}
                `
                })
            }
        ).then(() => {
            btnMessage.textContent = message.success
            form.reset()
        }).catch(()=>{
            btnMessage.textContent = message.fialer
        }).finally(()=> {
            btnMessage.textContent = "Send Message"
        })
    })
})