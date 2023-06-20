// Estrapolo il metodo createApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                {
                    text: 'Fare la lavatrice',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Preparare la cena',
                    done: false
                },
                {
                    text: 'Pulire la cucina',
                    done: false
                },
            ],
            
        }
    },
    methods: {
        // eliminare un task
        removeTask(targetIndex){
            this.tasks = this.tasks.filter((task, i) => {
                return targetIndex !== i;
            });
        },
        
        // aggiungere una task
        addTask(){
            
            if (!this.newTask.length) return;

            this.tasks.push({ text: this.newTask , done: false});

            this.newTask = '';
            
        }
    }
});

// La monto nell'elemento HTML "root"
app.mount('#root');
