import { ref } from 'vue';

export const useValidation = () => {
    const rules = ref(
        {
            email: (v) => !!(v || '').match(/@/) || 'Please enter a valid email',
            length: (len) => (v) => (v || '').length >= len || `Minimum ${len} characters required `,
            maxLength: (len) => (v) => {
                if (v && v.length > len) {
                    return `Max length is ${len}`
                }
            },
            password: (v) =>
                !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                'Password must contain an upper case letter, a numeric character, and a special character',
            required: (v) => !!v || 'This field is required'
        }
    );

    const getRules = () => {
        return rules.value;
    };

    return {
        getRules,
    };
};
