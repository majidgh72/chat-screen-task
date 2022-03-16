const chats = [
    {
        id: 1,
        name: 'Anika',
        avatar: '/demo/avatar-1.jpg',
        time: '21:30',
        lastMessage: 'How Are you :)',
        unreadCount: 1,
        messages: [
            {
                content: 'How Are You today?',
                type: 'recieved',
            },
            {
                content: 'Thanks I am good',
                type: 'sent',
            },
        ]
    },
    {
        id: 2,
        name: 'Olivia',
        avatar: '/demo/avatar-2.jpg',
        time: '17:19',
        lastMessage: 'Ok, I will send you tommorov honey',
        unreadCount: 0,
        messages: [
            {
                content: 'Hi, I am Olivia',
                type: 'recieved',
            },
        ]
    },
    {
        id: 3,
        name: 'Emma Watson',
        avatar: '/demo/avatar-3.jpg',
        time: '07:17',
        lastMessage: 'Please send me your Resume',
        unreadCount: 0,
        messages: [],
    },
    {
        id: 4,
        name: 'Charlotte',
        avatar: '/demo/avatar-4.jpg',
        time: '19:10',
        lastMessage: 'You are The most beautiful girl in the world :)',
        unreadCount: 0,
        messages: [],
    },
];

export default chats;