import RootStore from './RootStore.store'

const storeProvider = RootStore.create({
    contents: [
        {
            id: '1',
            title: 'Privet',
            description: 'Some more text',
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: 'Privet 2',
            description: 'Some more text',
            seen: false,
            notes: '',

        },
        {
            id: '3',
            title: 'Privet 3',
            description: 'Some more text',
            seen: false,
            notes: '',

        },
        {
            id: '4',
            title: 'Privet 4',
            description: 'Some more text',
            seen: true,
            notes: 'List',

        },
    ],
    forms_custom: {}
});

export default storeProvider;