// Estrapolo il metodo createApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Fare la lavatrice',
                    done: true
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Preparare la cena',
                    done: false
                },
                {
                    text: 'Pulire la cucina',
                    done: false
                },
            ]
        }
    },
    methods: {
        // eliminare un task
        removeTask(targetIndex){
            this.tasks = this.tasks.filter((task, i) => {
                return targetIndex !== i;
            });
        }
    }
});

// La monto nell'elemento HTML "root"
app.mount('#root');
