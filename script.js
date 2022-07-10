Vue.createApp({
    data() {
        return {
            inputMail: '',
            allMails: []
        };
    },
    methods: {
        add() {
            if (this.inputMail === '') return
            
            this.allMails.push(this.inputMail);
            this.inputMail = '';
        },
        remove(mail) {
           this.allMails = this.allMails.filter(item => item !== mail);
        }
    },
}).mount("#app");
