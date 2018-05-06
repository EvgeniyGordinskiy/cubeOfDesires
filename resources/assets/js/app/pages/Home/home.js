/* ============
 * Page Home
 * ============
 *
 *
 */

import Forms from './../../utils/forms/forms';
import Formvue from './../../components/form/form.vue';

import Desire from './../../services/desire';

export default {
    data() {
        return {
            form: new Forms({
                question: {
                    value: '',
                    type: 'text',
                    label: 'Question',
                    placeholder: 'Question'
                },
            }),
            answer: '',
            desire : false,
            classAnswer: ''
            }
        },

    watch: {
    'form.question'() {
            this.classAnswer = 'changed';
            this.answer = "I'm listening";
        }
    },
    methods: {
        getAnswer(){
            if(this.form.question.length > 0) {
                if(this.form.question.substr(this.form.question.length - 1) !== '?'){
                    this.answer = "It's not a question.";
                    this.classAnswer = 'changed';
                    this.desire = true
                } else {
                    Desire.getAnswer()
                        .then(resp => {
                            this.answer = resp;
                            this.classAnswer = resp;
                            this.desire = true;
                            Desire.saveDesire({question: this.form.question, answer: resp})
                                .catch(err => {
                                    this.form.recordErrors(err.errors);
                                });
                        })
                        .catch(err => {
                        });
                }

            } else {
                this.answer = '';
                this.desire = false;
            }
        },
    },
    created() {
    },

    components: {
        formv: Formvue,
    },
};